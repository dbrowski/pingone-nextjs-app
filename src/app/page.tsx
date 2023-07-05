import Image from "next/image";
import styles from "./page.module.css";

const envID = "";
const clientID = "";
const scopes = "";
const responseType = "code";
const grantType = "authorization_code";



export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>Get started with PingOne and NextJS</p>
        <div>
          <div style={{ paddingBottom: "1vh" }}>By</div>
          <a
            href="https://apidocs.pingidentity.com/pingone/main/v1/api/#getting-started-with-the-pingone-apis"
            target="_blank"
            rel="noopener noreferrer">
            <Image
              src="/Ping-Logo.svg"
              alt="Ping Identity Logo"
              className={styles.pingLogo}
              width={100}
              height={100}
              priority
            />
          </a>
        </div>
      </div>

      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/PingOne.svg"
          alt="PingOne Logo"
          width={620}
          height={112}
          priority
        />
      </div>

      <div>
        <a
          href="https://apidocs.pingidentity.com/pingone/main/v1/api/#getting-started-with-the-pingone-apis"
          target="_blank"
          rel="noopener noreferrer">
          <h1>Login</h1>
        </a>
      </div>
    </main>
  );
}
