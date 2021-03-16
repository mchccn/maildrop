import Dexie from "dexie";
import Head from "next/head";
import { useState } from "react";

export default function Index() {
    const db = new Dexie("maildrop");

    db.version(1).stores({
        pages: "++id,components",
    });

    const [componentsPanelActive, setComponentsPanelActive] = useState(false);
    const [inspectorPanelActive, setInspectorPanelActive] = useState(false);

    return (
        <>
            <Head>
                <title>maildrop</title>
            </Head>
            <div className="root flex flex-col h-screen">
                <header className="flex items-center h-16 p-4 shadow-md z-50">
                    <h2 className="text-xl select-none font-medium">
                        mail<span className="text-blue-500">drop</span>
                    </h2>
                </header>
                <div className="editor set-height flex flex-1">
                    <aside
                        className="components-panel set-height w-96 h-full absolute left-0 bottom-0 shadow-md z-10 pl-1 bg-white"
                        style={{
                            transform: componentsPanelActive ? "translateX(0)" : "translateX(-100%)",
                            transition: "0.15s cubic-bezier(0.4, 0, 0.2, 1) transform",
                        }}
                    ></aside>
                    <div className="set-height flex-1 bg-gray-100 grid place-items-center overflow-scroll">
                        <div
                            className="page bg-white mx-10"
                            style={{
                                width: "77.2727272727vh",
                                height: "100vh",
                            }}
                        ></div>
                    </div>
                    <aside
                        className="components-panel set-height w-96 h-full absolute right-0 bottom-0 shadow-md z-10 pl-1 bg-white"
                        style={{
                            transform: inspectorPanelActive ? "translateX(0)" : "translateX(100%)",
                            transition: "0.15s cubic-bezier(0.4, 0, 0.2, 1) transform",
                        }}
                    ></aside>
                </div>
                <div
                    className="trigger set-height w-1 h-full bg-gray-900 fixed bottom-0 left-0 z-50"
                    onClick={() => setComponentsPanelActive(!componentsPanelActive)}
                ></div>
                <div
                    className="trigger set-height w-1 h-full bg-gray-900 fixed bottom-0 right-0 z-50"
                    onClick={() => setInspectorPanelActive(!inspectorPanelActive)}
                ></div>
            </div>
        </>
    );
}
