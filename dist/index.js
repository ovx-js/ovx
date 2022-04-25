#!/usr/bin/env node
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs = __importStar(require("fs"));
const path = __importStar(require("path"));
const inquirer = __importStar(require("inquirer"));
const chalk_1 = __importDefault(require("chalk"));
const shelljs = __importStar(require("shelljs"));
const template_list_1 = require("./template-list");
const template = __importStar(require("./utils/template"));
const CURR_DIR = process.cwd();
const QUESTIONS = [
    {
        name: 'template',
        type: 'list',
        message: 'Which template do you want to use? (other templates are coming soon)',
        choices: template_list_1.templateList,
    },
    {
        name: 'projectName',
        type: 'input',
        message: 'Project name:',
    }
];
function createProject(projectPath) {
    if (fs.existsSync(projectPath)) {
        console.log(chalk_1.default.red(`Folder ${projectPath} already exists. Delete or use another name.`));
        return false;
    }
    fs.mkdirSync(projectPath);
    return true;
}
function postProcess(options) {
    const isNode = fs.existsSync(path.join(options.targetPath, 'package.json'));
    if (isNode) {
        inquirer.prompt([{
                name: 'install',
                type: 'confirm',
                message: 'Run npm install automatically?',
                default: false,
            }]).then(answers => {
            if (answers['install']) {
                console.log(chalk_1.default.green('Installing dependencies...'));
                shelljs.cd(options.targetPath);
                const result = shelljs.exec('npm install');
                if (result.code !== 0) {
                    console.log(chalk_1.default.red.italic('npm install') + chalk_1.default.red(' failed.'));
                    return false;
                }
                else {
                    console.log(chalk_1.default.green.italic('npm install') + chalk_1.default.green(' success.'));
                    return true;
                }
            }
            else {
                console.log(chalk_1.default.green('Done. Now run:'));
                console.log(`  cd ${options.projectName}`);
                console.log('  npm install');
                console.log('  npm run dev');
                console.log(chalk_1.default.gray.italic('yarn also works.'));
                return true;
            }
        });
    }
    else
        return true;
}
const SKIP_FILES = ['node_modules', '.git', '.DS_Store', '.template.json'];
const textFileExtension = /.*\.([jt]sx|[jt]s|json|vue|gitignore|html|md|txt)$/;
function createDirectoryContents(templatePath, projectName) {
    const filesToCreate = fs.readdirSync(templatePath);
    filesToCreate.forEach(file => {
        const originFilePath = path.join(templatePath, file);
        const stats = fs.statSync(originFilePath);
        if (SKIP_FILES.indexOf(file) > -1)
            return;
        if (stats.isFile()) {
            if (textFileExtension.test(file)) {
                let contents = fs.readFileSync(originFilePath, 'utf8');
                contents = template.render(contents, { projectName });
                const writePath = path.join(CURR_DIR, projectName, file);
                fs.writeFileSync(writePath, contents, 'utf8');
            }
            else {
                const contents = fs.readFileSync(originFilePath);
                const writePath = path.join(CURR_DIR, projectName, file);
                fs.writeFileSync(writePath, contents);
            }
        }
        else if (stats.isDirectory()) {
            fs.mkdirSync(path.join(CURR_DIR, projectName, file));
            createDirectoryContents(path.join(templatePath, file), path.join(projectName, file));
        }
    });
}
inquirer.prompt(QUESTIONS)
    .then(answers => {
    const projectChoice = answers['template'];
    const projectName = answers['projectName'];
    const templatePath = path.join(__dirname, 'templates', (0, template_list_1.getTemplatePath)(projectChoice));
    const targetPath = path.join(CURR_DIR, projectName);
    const options = {
        projectName,
        templateName: projectChoice,
        templatePath,
        targetPath,
    };
    if (!createProject(targetPath)) {
        return;
    }
    createDirectoryContents(templatePath, projectName);
    postProcess(options);
})
    .catch(err => console.log(chalk_1.default.red.bold('Unexpected error occurred: \n', err)));
//# sourceMappingURL=index.js.map