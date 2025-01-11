import { Link } from "react-router-dom";
import styles from "../componentsCss/hello.module.css";

function Header() {
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
      <body>
        <h1 className={styles.h1}>Добро пожаловать в cистему</h1>
        <h1 className={styles.h1}>кампусных курсов</h1>
      </body>
    </>
  );
}
export default Header;
