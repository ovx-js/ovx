#!/usr/bin/env node

import * as fs from 'fs'
import * as path from 'path'
import * as inquirer from 'inquirer'
import chalk from 'chalk'
import * as shelljs from 'shelljs'
import { templateList as CHOICES, getTemplatePath } from './template-list'
import * as template from './utils/template'

export interface CliOptions {
  projectName: string;
  templateName: string;
  templatePath: string;
  targetPath: string;
}

const CURR_DIR = process.cwd()
const QUESTIONS = [
  {
    name: 'template',
    type: 'list',
    message: 'Which template do you want to use? ' + chalk.gray('(More templates coming soon)'),
    choices: CHOICES,
  },
  {
    name: 'projectName',
    type: 'input',
    message: 'Project name:',
  }
]

function createProject(projectPath: string) {
  if (fs.existsSync(projectPath)) {
    console.log(chalk.red(`Folder ${projectPath} already exists. Delete or use another name.`))
    return false
  }
  fs.mkdirSync(projectPath)
  return true
}

function postProcess (options: CliOptions) {
  const isNode = fs.existsSync(path.join(options.targetPath, 'package.json'))
  if(isNode) {
    inquirer.prompt([{
      name: 'install',
      type: 'confirm',
      message: 'Run npm install automatically?',
      default: false,
    }]).then(answers => {
      if(answers['install']) {
        console.log(chalk.green('Installing dependencies...'))
        shelljs.cd(options.targetPath)
        const result = shelljs.exec('npm install')
        if(result.code !== 0) {
          console.log(chalk.red.italic('npm install') + chalk.red(' failed.'))
          return false
        } else {
          console.log(chalk.green.italic('npm install') + chalk.green(' success.'))
          return true
        }
      } else {
        console.log(chalk.green('Done. Now run:'))
        console.log(`  cd ${options.projectName}`)
        console.log('  npm install')
        console.log('  npm run dev')
        console.log(chalk.gray.italic('yarn also works.'))
        return true
      }
    })
  } else return true
}

const SKIP_FILES = ['node_modules', '.git', '.DS_Store', '.template.json']
const textFileExtension = /.*\.([jt]sx|[jt]s|json|vue|gitignore|html|md|txt)$/
function createDirectoryContents(templatePath: string, projectName: string) {
  const filesToCreate = fs.readdirSync(templatePath)
  filesToCreate.forEach(file => {
    const originFilePath = path.join(templatePath, file)
    const stats = fs.statSync(originFilePath)
    if(SKIP_FILES.indexOf(file) > -1) return
    if (stats.isFile()) {
      if (textFileExtension.test(file)) {
        let contents = fs.readFileSync(originFilePath, 'utf8')
        contents = template.render(contents, { projectName })
        const writePath = path.join(CURR_DIR, projectName, file)
        fs.writeFileSync(writePath, contents, 'utf8')
      } else {
        const contents = fs.readFileSync(originFilePath)
        const writePath = path.join(CURR_DIR, projectName, file)
        fs.writeFileSync(writePath, contents)
      }
    } else if (stats.isDirectory()) {
      fs.mkdirSync(path.join(CURR_DIR, projectName, file))
      createDirectoryContents(
        path.join(templatePath, file),
        path.join(projectName, file)
      )
    }
  })
}

inquirer.prompt(QUESTIONS)
  .then(answers => {
    const projectChoice = answers['template']
    const projectName = answers['projectName']
    const templatePath = path.join(__dirname, 'templates', getTemplatePath(projectChoice))
    const targetPath = path.join(CURR_DIR, projectName)
    const options: CliOptions = {
      projectName,
      templateName: projectChoice,
      templatePath,
      targetPath,
    }

    if (!createProject(targetPath)) {
      return
    }
    createDirectoryContents(templatePath, projectName)
    postProcess(options)
  })
  .catch(err => console.log(chalk.red.bold('Unexpected error occurred: \n', err)))
