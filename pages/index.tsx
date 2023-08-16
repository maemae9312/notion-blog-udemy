import { getAllPosts } from '../lib/notionAPI';
import Head from 'next/head';

export const getStaticProps = async () => {
  const allPosts = await getAllPosts();

  return {
    props: {
      allPosts,
    },
    revalidate: 60,
  };
};

export default function Home( { allPosts } ) {
  console.log(allPosts);
  return (
    <div>
      <Head>
        <title>Hello Nekosama</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>
  )
}
