import styles from "../componentsCss/header.module.css";
import { useNavigate } from "react-router-dom";
import { logoutUser } from "../requests";

interface Props {
  email: string;
}
const Header: React.FC<Props> = ({ email }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    logoutUser();
    navigate("/login", { replace: true });
  };

  return (
    <header className={styles.header}>
      <p className={styles.logo}>Кампусные курсы</p>
      <ul className={styles.navbar}>
        <li className={styles.link}>Группы курсов</li>
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
};

export default Header;
