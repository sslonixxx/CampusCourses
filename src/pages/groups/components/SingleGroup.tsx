import React from "react";
import styles from "../groupList.module.css";
import Group from "../../../@types/Group";

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
