export interface TemplateList {
  [name: string]: string;
}

export const templates: TemplateList = {
  'Vue-ts + Vue-Router + Element Plus with auto-import': 'vue-ts-element-plus',
};

export const templateList = Object.keys(templates);
export const getTemplatePath = (templateName: string) => templates[templateName];
