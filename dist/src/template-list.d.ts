export interface TemplateList {
    [name: string]: string;
}
export declare const templates: TemplateList;
export declare const templateList: string[];
export declare const getTemplatePath: (templateName: string) => string;
