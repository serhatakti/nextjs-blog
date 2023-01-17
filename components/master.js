import Head from 'next/head';
import Image from 'next/image';
import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import Header from "./header";
import ShareIcons from "./share-icons";

const name = 'Your Name';
export const siteTitle = 'Turdef';

export default function Master({ children}) {
    return (
        <>
            <Head>
                <meta name="og:title" content={siteTitle} />
            </Head>
            <div className="main-wrap">
               <Header />
                <ShareIcons />
                <main className="position-relative">
                    {children}
                </main>
            </div>
        </>

    );
}
