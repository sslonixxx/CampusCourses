import styles from "../cssModuls/header.module.css";
import { Link, useNavigate } from "react-router-dom";
import { logoutUser } from "../requests";
import { useEmail } from "../contexts/email/useEmail";

function Header() {
  const { email } = useEmail();
  const navigate = useNavigate();
  const handleClick = () => {
    logoutUser();
    navigate("/login", { replace: true });
  };

  return (
    <header className={styles.header}>
      <p className={styles.logo}>Кампусные курсы</p>
      <ul className={styles.navbar}>
        <Link className={styles.link} to="/groups">
          {" "}
          Группы курсов
        </Link>
        <li className={styles.link}>Мои курсы</li>
        <li className={styles.link}>Преподаваемые курсы</li>
      </ul>
      <div className={styles.log}>
        <p className={styles.email}>{email}</p>
        <button onClick={handleClick} className={styles.btnEnter}>
          Выход
        </button>
      </div>
    </header>
  );
}

export default Header;
