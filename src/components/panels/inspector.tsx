import { Dispatch, SetStateAction } from "react";
import * as uuid from "uuid";
import { IComponent } from "../../lib/types";

export default function InspectorPanel({
    current,
    setCurrent,
}: {
    current: (IComponent & { id: string }) | undefined;
    setCurrent: Dispatch<SetStateAction<(IComponent & { id: string }) | undefined>>;
}) {
    return (
        <aside className="inspector-panel set-height w-96 h-full shadow-md z-10 pr-3 pl-2 py-2 bg-white overflow-scroll">
            {current ? (
                <div>
                    {Object.keys(current.content).map((field) => (
                        <div className="flex flex-col" key={uuid.v4()}>
                            <label htmlFor={field}>{field}</label>
                            <textarea
                                className="resize-none border border-gray-300 rounded p-2"
                                name={field}
                                onChange={(e) =>
                                    setCurrent({ ...current, content: { ...current.content, [field]: e.target.value } })
                                }
                                defaultValue={current.content[field]}
                            ></textarea>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="w-full h-full grid place-items-center">
                    <h2 className="text-lg text-gray-300 select-none">No component selected.</h2>
                </div>
            )}
        </aside>
    );
}
