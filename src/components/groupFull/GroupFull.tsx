import { useEffect, useState } from "react";
import styles from "../../cssModuls/groupList.module.css";
import { getCoursesList, getUserRole } from "../../requests";
import Role from "../Role";
import Course from "./Course";
import CourseForm from "./CourseForm";
import { useParams } from "react-router-dom";
import Header from "../Header";
import { useGroupName } from "../../contexts/groupName/useGroupName";

const GroupFull: React.FC = () => {
  const { group } = useGroupName();
  const { id } = useParams<{ id: string }>();
  const [role, setRole] = useState<Role>();
  const [coursesList, setCoursesList] = useState<Course[]>([]);

  useEffect(() => {
    const fillCoursesList = async () => {
      console.log(id);
      if (!id) {
        console.error("Ошибка: id не определен!");
        return;
      }
      const response = await getCoursesList(id);
      setCoursesList(response);
    };
    fillCoursesList();
  }, [id]);

  useEffect(() => {
    const getRole = async () => {
      const responce = await getUserRole();
      setRole(responce);
    };
    getRole();
  }, []);
  return (
    <>
      <Header></Header>
      <main className={styles.main}>
        <div className={styles.mainContainer}>
          <h1 className={styles.title}>Группа - {group}</h1>
          {role?.isAdmin == true && (
            <button className={styles.button}>Создать курс</button>
          )}
          <div className={styles.container}>
            {coursesList.map((course) => (
              <CourseForm course={course} key={course.id} />
            ))}
          </div>
        </div>
      </main>
    </>
  );
};
export default GroupFull;
