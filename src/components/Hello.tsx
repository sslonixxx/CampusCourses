import { Link } from "react-router-dom";
import styles from "../cssModuls/header.module.css";
import hello from "../cssModuls/hello.module.css";

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
          <h1 className={hello.h1}>Добро пожаловать в cистему</h1>
          <h1 className={hello.h1}>кампусных курсов</h1>
        </body>
      )}
    </>
  );
}
export default Hello;
