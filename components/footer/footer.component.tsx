import styles from "./footer.module.scss";

const Footer = (): JSX.Element => {
  return (
    <footer className={styles.footer}>
      <span className={styles.text}>© Created By :</span>
      <a href="https://www.ahmedalameldeen.me/" target="_blank" rel="author">
        Ahmed Alam El-Deen
      </a>
    </footer>
  );
};

export default Footer;
