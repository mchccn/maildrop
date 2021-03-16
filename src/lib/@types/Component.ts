import { IContentField } from "./ContentField";

/**
 * Component type.
 */
export interface IComponent<
    Content extends {
        [property: string]: IContentField | IComponent;
    } = {}
> {
    /**
     * Display name of the component.
     */
    name: string;
    /**
     * Component's metadata.
     */
    metadata: IComponentMetadata<Content>;
}

/**
 * Metadata for a component.
 */
export interface IComponentMetadata<Content extends { [field: string]: IContentField | IComponent } = {}> {
    /**
     * ID of the component.
     */
    id: string;
    /**
     * Component's margin.
     */
    margin: {
        top: number;
        right: number;
        bottom: number;
        left: number;
    };
    /**
     * Component's padding.
     */
    padding: {
        top: number;
        right: number;
        bottom: number;
        left: number;
    };
    /**
     * Component's width.
     */
    width: number;
    /**
     * Component's height.
     */
    height: number;
    /**
     * Component's distance from the top.
     */
    top: number;
    /**
     * Component's distance from the left.
     */
    left: number;
    /**
     * Component's Z-axis index.
     */
    zIndex: number;
    /**
     * Component's content.
     */
    content: Content;
}
