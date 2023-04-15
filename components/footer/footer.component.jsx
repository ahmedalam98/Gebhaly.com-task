import styles from "./footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <span className={styles.text}>© Created By :</span>
      <a href="https://github.com/ahmedalam98" target="_blank" rel="author">
        Ahmed Alam El-Deen
      </a>
    </footer>
  );
};

export default Footer;
