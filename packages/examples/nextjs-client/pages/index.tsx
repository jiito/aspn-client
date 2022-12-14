import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { AspnClient } from '@aspn/client';

export default function Home() {
  let aspn_client = new AspnClient({ id: 1, function_id: 1 });

  const sendReq = async () => {
    let res = await aspn_client.get('wasm-hello-world');
    console.log(res);
  };
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">CS 701 DEMO!</a>
        </h1>
        <button
          onClick={async () => {
            await sendReq();
          }}
        >
          Get the result!
        </button>
      </main>

      <footer className={styles.footer}>
        <a href="https://aspn.network" target="_blank" rel="noopener noreferrer">
          Powered by aspn.network
        </a>
      </footer>
    </div>
  );
}
