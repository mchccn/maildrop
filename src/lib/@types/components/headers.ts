import { IComponent } from "../Component";
import { IImageContentField, ITextContentField } from "../ContentField";

export type HeaderWithLogoComponent = IComponent<{
    title: ITextContentField;
    logo: IImageContentField;
}>;
