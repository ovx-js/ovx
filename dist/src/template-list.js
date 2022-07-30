"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTemplatePath = exports.templateList = exports.templates = void 0;
const chalk_1 = __importDefault(require("chalk"));
exports.templates = {
    'Vue-ts + Vue-Router + Element Plus  with auto-import': 'vue-ts-element-plus',
    ['Vue-tsx + Vue-Router + Element Plus ' + chalk_1.default.bold.italic('WithOut') + ' auto-import']: 'vue-tsx-element-plus',
    'Vue-ts + Vue-Router + Ant Design  with auto-import': 'vue-ts-ant-design',
};
exports.templateList = Object.keys(exports.templates);
const getTemplatePath = (templateName) => exports.templates[templateName];
exports.getTemplatePath = getTemplatePath;
//# sourceMappingURL=template-list.js.map