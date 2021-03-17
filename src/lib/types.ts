export interface IComponent {
    name: string;
    category: string;
    jsx: React.ReactNode;
}

export enum Draggables {
    COMPONENT = "COMPONENT",
}
