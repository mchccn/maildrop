export interface IContentField {
    content: unknown;
}

export interface ITextContentField extends IContentField {
    content: string;
    fontSize: number;
}

export interface IImageContentField extends IContentField {
    content: string;
    width: number;
    height: number;
}
