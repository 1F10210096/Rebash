import styles from './index.module.scss'; // モジュール化されたスタイルをインポート

const TitlePage = () => {
  return (
    <div className={styles.menu}>
      <div className={`${styles.btn} ${styles.trigger}`}>
        <span className={styles.line} />
      </div>
      <div className={styles.icons}>
        {/* 以下、他の rotater ブロックも同様に修正 */}
        <div className={styles.rotater}>
          <div className={`${styles.btn} ${styles.btnIcon}`}>
            <i className="fa fa-codepen" />
          </div>
        </div>
        {/* 他の rotater ブロックも同様に修正 */}
      </div>
    </div>
  );
};

export default TitlePage;
