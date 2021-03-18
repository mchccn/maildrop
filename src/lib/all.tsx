import { IComponent } from "./types";

export default [
    {
        name: "test",
        category: "test",
        content: {
            text: "i am a test",
        },
        jsx() {
            return <div className="w-80 h-96 bg-gray-400">{this.content.text}</div>;
        },
    },
] as IComponent[];
