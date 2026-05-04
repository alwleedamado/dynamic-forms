import styles from './react-adapter.module.scss';

export function ReactAdapter() {
  return (
    <div className={styles['container']}>
      <h1>Welcome to ReactAdapter!</h1>
    </div>
  );
}

export default ReactAdapter;
