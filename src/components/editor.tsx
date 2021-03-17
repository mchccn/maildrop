import { useEffect, useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import allComponents from "../lib/all";
import { IComponent } from "../lib/types";
import ComponentsPanel from "./panels/components";
import InspectorPanel from "./panels/inspector";

export default function Editor({ inspectorPanelActive }: { inspectorPanelActive: boolean }) {
    const [components, setComponents] = useState<IComponent[]>([]);

    function handleOnDragEnd(result: any) {
        if (!result.destination) return;

        const copy = [...components];
        const [reorderedItem] = copy.splice(result.source.index, 1);
        copy.splice(result.destination.index, 0, reorderedItem);

        setComponents(copy);
    }

    useEffect(() => {
        window.addEventListener("beforeunload", (e) =>
            components.length ? (e.returnValue = "Are you sure you want to leave? Changes you made won't be saved.") : undefined
        );
    }, []);

    return (
        <div
            className="editor set-height flex flex-1"
            style={{
                width: inspectorPanelActive ? "calc(100%)" : "calc(100% + 384px)",
                transition: "0.15s cubic-bezier(0.4, 0, 0.2, 1) width",
            }}
        >
            <ComponentsPanel allComponents={allComponents} components={components} setComponents={setComponents} />
            <div className="set-height flex-1 bg-gray-100 grid place-items-center overflow-scroll">
                <div
                    className="page bg-white"
                    style={{
                        width: "77.2727272727vh",
                        height: "100vh",
                    }}
                >
                    {typeof window !== "undefined" ? (
                        <DragDropContext onDragEnd={handleOnDragEnd}>
                            <Droppable droppableId="rendered-components">
                                {(provided) => (
                                    <ul ref={provided.innerRef} {...provided.droppableProps}>
                                        {components.map(({ jsx }, i) => (
                                            <Draggable key={i} draggableId={i.toString()} index={i}>
                                                {(provided) => (
                                                    <li
                                                        ref={provided.innerRef}
                                                        {...provided.draggableProps}
                                                        {...provided.dragHandleProps}
                                                    >
                                                        {jsx}
                                                    </li>
                                                )}
                                            </Draggable>
                                        ))}
                                        {provided.placeholder}
                                    </ul>
                                )}
                            </Droppable>
                        </DragDropContext>
                    ) : null}
                </div>
            </div>
            <InspectorPanel />
        </div>
    );
}
