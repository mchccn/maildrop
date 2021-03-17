import Head from "next/head";

export default function Meta({ assetPrefix }: { assetPrefix: string }) {
    return (
        <Head>
            <meta charSet="utf-8" />
            <meta name="description" content="Make pages with ease." />
            <meta name="keywords" content="maildrop" />
            <meta name="author" content="cursorsdottsx" />
            <meta name="robots" content="follow" />
            <meta name="theme-color" content="#000000" />

            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://cursorsdottsx.github.io/maildrop/" />
            <meta property="og:site_name" content="maildrop" />
            <meta property="og:keywords" content="maildrop" />
            <meta property="og:locale" content="en-US" />
            <meta property="og:title" content="maildrop" />
            <meta property="og:description" content="Make pages with ease." />
            <meta
                property="og:image"
                content="https://og-image.now.sh/mail**drop**.png?theme=light&md=1&fontSize=100px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg&heights=250"
            />

            <title>maildrop</title>

            <link rel="shortcut icon" href={`${assetPrefix}/fav.png`} type="image/x-icon" />
        </Head>
    );
}
