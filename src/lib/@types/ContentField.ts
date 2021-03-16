/**
 * A content field.
 * @abstract
 */
export interface IContentField {
    /**
     * The content of the field.
     */
    content: unknown;
}

/***
 * A text field.
 */
export interface ITextContentField extends IContentField {
    /**
     * The text.
     */
    content: string;
    /**
     * The font size.
     */
    fontSize: number;
}

/**
 * An image field.
 */
export interface IImageContentField extends IContentField {
    /**
     * Image URL or base64 source.
     */
    content: string;
    /**
     * Width of the image field.
     */
    width: number;
    /**
     * Height of the image field.
     */
    height: number;
}
