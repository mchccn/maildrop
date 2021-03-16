import { IComponent } from "../Component";
import { IImageContentField, ITextContentField } from "../ContentField";

export type ParagraphComponent = IComponent<{
    content: ITextContentField;
}>;

export type ImageComponent = IComponent<{
    content: IImageContentField;
}>;
