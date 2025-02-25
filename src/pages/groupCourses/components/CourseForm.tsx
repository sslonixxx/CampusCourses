import styles from "../course.module.css";

import Course from "./Course";
import Status from "../../../@types/Status";

interface CourseFormProps {
  course: Course;
}

const CourseForm: React.FC<CourseFormProps> = ({ course }) => {
  const status = Status[course.status as keyof typeof Status];
  const statusClass =
    {
      Created: styles.statusCreated,
      Started: styles.statusStarted,
      OpenForAssigning: styles.statusOpenForAssigning,
      Finished: styles.statusFinished,
    }[course.status as keyof typeof Status] || "";

  return (
    <>
      <div className={styles.course}>
        <div className={styles.courseText}>
          <div className={styles.container}>
            <h3>{course.name}</h3>
            <div className={`${styles.groupName} ${statusClass}`}>{status}</div>
          </div>
          <div className={styles.groupName}>
            Учебный год - {course.startYear}
          </div>
          <div className={styles.groupName}>Семестр - {course.semester}</div>
          <span className={styles.smallFont}>
            Мест всего - {course.maximumStudentsCount}
          </span>
          <span className={styles.smallFont}>
            Мест свободно - {course.remainingSlotsCount}
          </span>
        </div>
      </div>
    </>
  );
};

export default CourseForm;
