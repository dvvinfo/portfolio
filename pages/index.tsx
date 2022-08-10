import type { NextPage } from "next";
import styles from "../styles/Home.module.css";

const Home: NextPage = (): JSX.Element => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>My Potfolio</h1>
      </main>
    </div>
  );
};

export default Home;
