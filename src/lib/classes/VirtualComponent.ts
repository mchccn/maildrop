import { IComponent } from "../@types/Component";

/**
 * A component represented in pure logic.
 * @abstract
 */
export default abstract class VirtualComponent<Element extends HTMLElement, Component extends IComponent> {
    public element: Element;
    public component: Component;

    constructor(element: Element, component: Component) {
        this.element = element;
        this.component = component;
    }
}
