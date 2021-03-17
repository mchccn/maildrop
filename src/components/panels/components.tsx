import { Dispatch, SetStateAction, useState } from "react";
import { IComponent } from "../../lib/types";

export default function ComponentsPanel({
    allComponents,
    components,
    setComponents,
}: {
    allComponents: IComponent[];
    components: IComponent[];
    setComponents: Dispatch<SetStateAction<IComponent[]>>;
}) {
    const [activeCategory, setActiveCategory] = useState("");
    const [activeTransform, setActiveTransform] = useState(false);

    return (
        <aside className="components-panel set-height w-96 h-full shadow-md z-10 bg-white overflow-hidden">
            <div
                className="flex h-full"
                style={{
                    width: "calc(384px * 2)",
                    transform: activeTransform ? "translateX(-50%)" : "translateX(0)",
                    transition: "0.25s cubic-bezier(0.4, 0, 0.2, 1) transform",
                }}
            >
                <div className="w-96 h-full p-4 inline-block">
                    <h3 className="text-2xl text-gray-700 my-2">all categories</h3>
                    {[...new Set(allComponents.map(({ category }) => category))].map((category, i) => (
                        <p
                            className="cursor-pointer rounded p-2 hover:bg-gray-50"
                            onClick={() => {
                                setActiveCategory(category);
                                setActiveTransform(true);
                            }}
                            key={i}
                        >
                            {category}
                        </p>
                    ))}
                </div>

                <div className="w-96 h-full p-4 inline-block">
                    <h4
                        className="text-sm text-gray-400 cursor-pointer"
                        onClick={() => {
                            setActiveTransform(false);
                            setTimeout(() => setActiveCategory(""), 250);
                        }}
                    >
                        ← back
                    </h4>
                    {allComponents
                        .filter(({ category }) => category === activeCategory)
                        .map((component, i) => (
                            <div
                                className="cursor-pointer m-2"
                                key={i}
                                onClick={() => setComponents([...components, component])}
                            >
                                {component.name}
                                <div>{component.jsx}</div>
                            </div>
                        ))}
                </div>
            </div>
        </aside>
    );
}
