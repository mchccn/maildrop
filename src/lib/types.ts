export interface IComponent {
    name: string;
    category: string;
    content: { [property: string]: string };
    jsx: () => React.ReactNode;
}
