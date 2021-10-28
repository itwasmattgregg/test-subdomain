import styles from '../styles/Layout.module.css';

export default function Layout({ children }) {
  return (
    <>
      <div className={styles.navigation}></div>
      <h1>Navigation area</h1>
      {children}
    </>
  );
}
