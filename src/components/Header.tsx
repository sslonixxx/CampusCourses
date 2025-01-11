import styles from "../componentsCss/header.module.css";
import { Link } from "react-router-dom";

function Header(email: string) {
  return (
    <header className={styles.header}>
      <p className={styles.logo}>Кампусные курсы</p>
      <ul className={styles.navbar}>
        <li className={styles.link}>Группы курсов</li>
        <li className={styles.link}>Мои курсы</li>
        <li className={styles.link}>Преподаваемые курсы</li>
      </ul>
      <ul className={styles.log}>
        <li>
          <p>{email}</p>
        </li>
        <li>
          <Link className={styles.link} to="/login">
            {" "}
            Выход
          </Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;
