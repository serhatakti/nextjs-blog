import Head from 'next/head';
import Layout, {siteTitle} from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import {getSortedPostsData} from '../lib/posts';
import Link from 'next/link';
import Date from '../components/date';
import Master from "../components/master";
import Banner from "../components/banner";
import Categories from "../components/categories";

export async function getStaticProps() {
    const allPostsData = getSortedPostsData();
    return {
        props: {
            allPostsData,
        },
    };
}

export default function Home({allPostsData}) {
    return (
        <Master >
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-md-9">
                        <div className="row">
                            <div className="col-lg-4 col-md-4">
                                <Banner no={1} page="Anasayfa" type="A" />
                            </div>
                            <div className="col-lg-4 col-md-4">
                                <Banner no={2} page="Anasayfa" type="A" />
                            </div>
                            <div className="col-lg-4 col-md-4">
                                <Banner no={3} page="Anasayfa" type="A" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <Categories />
                </div>
            </div>
        </Master>
        /*<Layout home>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <section className={utilStyles.headingMd}>
                <p>[Your Self Introduction]</p>
                <p>
                    (This is a sample website - you’ll be building a site like this on{' '}
                    <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
                </p>
            </section>
            <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
                <h2 className={utilStyles.headingLg}>Blog</h2>
                <ul className={utilStyles.list}>
                    {allPostsData.map(({id, date, title}) => (
                        <li className={utilStyles.listItem} key={id}>
                            <a href={`/posts/${id}`}>{title}</a>
                            <br />
                            <small className={utilStyles.lightText}>
                                <Date dateString={date} />
                            </small>
                        </li>
                    ))}
                </ul>
            </section>
        </Layout>*/
    );
}
