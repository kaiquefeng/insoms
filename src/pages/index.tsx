import Head from "next/head";
import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { Feedback } from "../components/Feedback";

import { Footer } from "../components/Footer";
import apiImages from "../services/baseImages";
import styles from "../styles/Home.module.scss";

export default function Home() {
  const [url, setUrl] = useState("");
  const [errorRequest, setErrorRequest] = useState("");
  const [imagesList, setImagesList] = useState([]);
  const [loader, setLoader] = useState(false);

  function searchImages() {
    console.log("valor", url);
    setLoader(true);
    const results = apiImages.get(`/images/${url}`);
    results
      .then((res) => {
        console.log("RESULTS::::", res.data);
        setImagesList(res.data as any);
        setLoader(false);
      })
      .catch((err) => {
        setErrorRequest(err.message);

        setLoader(false);
      });
  }
  return (
    <div className={styles.container}>
      <Head>
        <title>Insoms</title>
        <meta name="description" content="Search images in web" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Bem vindo ao <a href="https://nextjs.org">Insoms!</a>
        </h1>

        <p className={styles.description}>
          Web scrapping for images <code className={styles.code}>BETA</code>
        </p>
        <div>
          <div className={styles.containerInput}>
            <input
              className={styles.input}
              type="text"
              onChange={(e) => setUrl(e.target.value)}
            />
            <a className={styles.button} onClick={searchImages}>
              <FiSearch className={styles.iconButton} />
            </a>
          </div>
        </div>
        {errorRequest !== "" && <Feedback value={url} error={errorRequest} />}

        <div
          className={loader ? styles.containerLoading : styles.containerImages}
        >
          {loader ? (
            <div className={styles.loader}></div>
          ) : (
            <>
              {imagesList.map((item: any) => (
                <div key={item.src} className={styles.item}>
                  <img className={styles.imageItem} src={item.src} />
                  <a className={styles.download} href={item.src} download>
                    Download
                  </a>
                </div>
              ))}
            </>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
