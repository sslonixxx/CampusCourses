import { Link } from "react-router-dom";
import styles from "../profile/header.module.css";
import moreStyles from "../hello/hello.module.css";

interface HelloProps {
  showBody?: boolean;
}

function Hello({ showBody = true }: HelloProps) {
  return (
    <>
      <header className={styles.header}>
        <p className={styles.logo}>Кампусные курсы</p>
        <ul className={styles.log}>
          <li>
            <Link className={styles.link} to="/register">
              {" "}
              Регистрация
            </Link>
          </li>
          <li>
            <Link className={styles.link} to="/login">
              {" "}
              Вход
            </Link>
          </li>
        </ul>
      </header>
      {showBody && (
        <body>
          <div className={moreStyles.title}>Добро пожаловать в cистему</div>
          <div className={moreStyles.title}>кампусных курсов</div>
        </body>
      )}
    </>
  );
}
export default Hello;
