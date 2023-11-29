import logo from './logo.svg';
import styles from './Sample.module.css';

export function Sample() {
  return (
    <div className={styles.sample}>
      <header className={styles.header}>
        <img src={logo} className={styles.logo} alt="logo" />
        <p>
          Edit <code>packages/components/Sample/src/Sample.tsx</code> and save to reload.
        </p>
        <a className={styles.link} href="https://reactjs.org" target="_blank">
          Learn React
        </a>
      </header>
    </div>
  );
}
