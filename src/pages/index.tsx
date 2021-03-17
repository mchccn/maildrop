import * as scrollLock from "body-scroll-lock";
import Dexie from "dexie";
import { GetStaticProps } from "next";
import { useEffect, useState } from "react";
import Editor from "../components/editor";
import Meta from "../components/meta";

export default function Index({ assetPrefix }: { assetPrefix: string }) {
    const db = new Dexie("maildrop");

    db.version(1).stores({
        pages: "++id,components",
    });

    const [inspectorPanelActive, setInspectorPanelActive] = useState(false);

    useEffect(() => {
        scrollLock.disableBodyScroll(document.body);

        window.addEventListener(
            "beforeunload",
            (e) => (e.returnValue = "Are you sure you want to leave? Changes you made won't be saved.")
        );
    }, []);

    return (
        <>
            <Meta assetPrefix={assetPrefix} />
            <div className="root flex flex-col h-screen">
                <header className="flex items-center h-16 p-4 shadow-md z-50">
                    <h2 className="text-xl select-none font-medium">
                        mail<span className="text-blue-500">drop</span>
                    </h2>
                </header>

                <Editor inspectorPanelActive={inspectorPanelActive} />

                <div
                    className="trigger set-height w-1 h-full bg-gray-900 fixed bottom-0 right-0 z-50"
                    onClick={() => setInspectorPanelActive(!inspectorPanelActive)}
                ></div>
            </div>
        </>
    );
}

//@ts-ignore
export const getStaticProps: GetStaticProps = () => {
    return {
        props: {
            assetPrefix: process.env.NODE_ENV === "production" ? "/maildrop" : "",
        },
    };
};
