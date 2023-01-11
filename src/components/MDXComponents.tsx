import styles from "../styles/markdown.module.css";

const MDXComponents = {
  p: (props: any) => <p {...props} className={styles.p} />,
  a: (props: any) => <a {...props} className={styles.link} />,
  h1: (props: any) => <h1 {...props} className={styles.postTitle} />,
};

export default MDXComponents;
