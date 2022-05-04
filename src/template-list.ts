export interface TemplateList {
  [name: string]: string;
}

export const templates: TemplateList = {
  'Vue-ts + Vue-Router + Element Plus  with auto-import': 'vue-ts-element-plus',
  'Vue-ts + Vue-Router + Ant Design  with auto-import': 'vue-ts-ant-design',
}

export const templateList = Object.keys(templates)
export const getTemplatePath = (templateName: string) => templates[templateName]
