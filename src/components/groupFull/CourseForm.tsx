import styles from "../../cssModuls/course.module.css";

import Course from "./Course";

interface CourseFormProps {
  course: Course;
}

const CourseForm: React.FC<CourseFormProps> = ({ course }) => {
  return (
    <>
      <div className={styles.course}>
        <h3>{course.name}</h3>
        <div className={styles.groupName}>Учебный год - {course.startYear}</div>
        <div className={styles.groupName}>Семестр - {course.semester}</div>
        <span className={styles.smallFont}>
          Мест всего - {course.maximumStudentsCount}
        </span>
        <span className={styles.smallFont}>
          Мест свободно - {course.remainingSlotsCount}
        </span>
      </div>
    </>
  );
};

export default CourseForm;
