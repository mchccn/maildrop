import * as scrollLock from "body-scroll-lock";
import Dexie from "dexie";
import jsxToString from "jsx-to-string";
import { GetStaticProps } from "next";
import { useEffect, useState } from "react";
import Editor from "../components/editor";
import Meta from "../components/meta";
import { IComponent } from "../lib/types";

export default function Index({ assetPrefix }: { assetPrefix: string }) {
    const db = new Dexie("maildrop");

    db.version(1).stores({
        pages: "++id,components",
    });

    const [components, setComponents] = useState<IComponent[]>([]);
    const [inspectorPanelActive, setInspectorPanelActive] = useState(false);

    const [copied, setCopied] = useState(false);

    useEffect(() => {
        scrollLock.disableBodyScroll(document.body);
    }, []);

    return (
        <>
            <Meta assetPrefix={assetPrefix} />
            <div className="root flex flex-col h-screen">
                <header className="flex items-center h-16 p-4 shadow-md z-50 justify-between">
                    <h2 className="text-xl select-none font-medium">
                        mail<span className="text-blue-500">drop</span>
                    </h2>

                    <a
                        className="cursor-pointer"
                        onClick={() => {
                            window.navigator.clipboard.writeText(components.map(({ jsx }) => jsxToString(jsx)).join("\n"));
                            setCopied(true);
                            setTimeout(() => setCopied(false), 1000);
                        }}
                    >
                        <span className={copied ? "text-green-500" : ""}>{copied ? "copied" : "copy html"}</span>
                    </a>
                </header>

                <Editor inspectorPanelActive={inspectorPanelActive} components={components} setComponents={setComponents} />

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
