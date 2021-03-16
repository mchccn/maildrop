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
     * ID of the component.
     */
    id: string;
    /**
     * Tailwind classes.
     */
    classNames: string[];
    /**
     * Component's content.
     */
    content: Content;
}

/**
 * Properties of a single component.
 */
export interface IComponentProperties<Component extends IComponent = IComponent> {
    /**
     * ID of the component.
     */
    id: string;
    /**
     * Component's calculated margin.
     */
    margin: {
        top: number;
        right: number;
        bottom: number;
        left: number;
    };
    /**
     * Component's calculated padding.
     */
    padding: {
        top: number;
        right: number;
        bottom: number;
        left: number;
    };
    /**
     * Component's calculated width.
     */
    width: number;
    /**
     * Component's calculated height.
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
    content: Component["content"];
}
