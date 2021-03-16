import { IContentField } from "../@types/ContentField";

/**
 * A component abstracted from the DOM.
 * @abstract
 */
export default abstract class Component<
    Content extends {
        [property: string]: IContentField;
    }
> {
    public name: string;
    public id: string;
    public content: Content;

    constructor(name: string, id: string, content: Content) {
        this.name = name;
        this.id = id;
        this.content = content;
    }
}
