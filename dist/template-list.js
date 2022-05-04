"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTemplatePath = exports.templateList = exports.templates = void 0;
exports.templates = {
    'Vue-ts + Vue-Router + Element Plus  with auto-import': 'vue-ts-element-plus',
    'Vue-ts + Vue-Router + Ant Design  with auto-import': 'vue-ts-ant-design',
};
exports.templateList = Object.keys(exports.templates);
const getTemplatePath = (templateName) => exports.templates[templateName];
exports.getTemplatePath = getTemplatePath;
//# sourceMappingURL=template-list.js.map