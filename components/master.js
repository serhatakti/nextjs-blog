import Head from 'next/head';
import Image from 'next/image';
import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import Header from "./header";

const name = 'Your Name';
export const siteTitle = 'Turdef';

export default function Master({ children, home }) {
    return (
        <>
            <Head>
                <meta name="og:title" content={siteTitle} />
            </Head>
            <div className="main-wrap">
               <Header />
            </div>
        </>

    );
}
