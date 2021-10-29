import styles from '../styles/Layout.module.css';

export default function Layout({ children }) {
  return (
    <>
      <div className={styles.navigation}>
        <h1>Navigation area</h1>
      </div>
      {children}
    </>
  );
}
