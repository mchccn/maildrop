import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import allComponents from "../lib/all";
import { IComponent } from "../lib/types";
import ComponentsPanel from "./panels/components";
import InspectorPanel from "./panels/inspector";

export default function Editor({
    inspectorPanelActive,
    components,
    setComponents,
}: {
    inspectorPanelActive: boolean;
    components: IComponent[];
    setComponents: Dispatch<SetStateAction<IComponent[]>>;
}) {
    const [height, setHeight] = useState(100);

    const [current, setCurrent] = useState<IComponent | undefined>(undefined);
    const [_, rerender] = useState(0);

    const handleOnDragEnd = (result: any) => {
        if (!result.destination) return;

        const copy = [...components];
        const [reorderedItem] = copy.splice(result.source.index, 1);
        copy.splice(result.destination.index, 0, reorderedItem);

        return setComponents(copy);
    };

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
                <div className="spacing w-full h-10"></div>
                <div
                    className="page bg-white flex flex-col justify-between"
                    style={{
                        width: "77.2727272727vh",
                        minHeight: `${height}vh`,
                    }}
                >
                    {typeof window !== "undefined" ? (
                        <DragDropContext onDragEnd={handleOnDragEnd}>
                            <Droppable droppableId="rendered-components">
                                {(provided) => (
                                    <div ref={provided.innerRef} {...provided.droppableProps}>
                                        {components.map(({ jsx }, i) => (
                                            <Draggable key={i} draggableId={i.toString()} index={i}>
                                                {(provided) => (
                                                    <div
                                                        ref={provided.innerRef}
                                                        {...provided.draggableProps}
                                                        {...provided.dragHandleProps}
                                                        onContextMenu={(e) => {
                                                            e.preventDefault();
                                                            console.log(i);
                                                            const copy = [...components];
                                                            copy.splice(i, 1);
                                                            setComponents(copy);
                                                        }}
                                                    >
                                                        {jsx}
                                                    </div>
                                                )}
                                            </Draggable>
                                        ))}
                                        {provided.placeholder}
                                    </div>
                                )}
                            </Droppable>
                        </DragDropContext>
                    ) : null}
                </div>
                <div className="spacing w-full h-10"></div>
            </div>

            <InspectorPanel current={current} rerender={rerender} />
        </div>
    );
}
