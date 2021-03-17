import { Dispatch, SetStateAction } from "react";
import { IComponent } from "../../lib/types";

export default function InspectorPanel({
    current,
    rerender,
}: {
    current: IComponent | undefined;
    rerender: Dispatch<SetStateAction<any>>;
}) {
    return <aside className="inspector-panel set-height w-96 h-full shadow-md z-10 p-2 bg-white overflow-scroll"></aside>;
}
