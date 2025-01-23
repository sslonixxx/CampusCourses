import React from "react";
import Group from "./Group";
import styles from "../../cssModuls/groupList.module.css";

interface SingleGroupProps {
  group: Group;
}

const SingleGroup: React.FC<SingleGroupProps> = ({ group }) => {
  return (
    <div className={styles.group}>
      <span className={styles.groupName}>{group.name}</span>
    </div>
  );
};

export default SingleGroup;
