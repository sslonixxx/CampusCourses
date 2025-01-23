import React from "react";
import Group from "./Group";
import { AiFillEdit } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import styles from "../../cssModuls/groupList.module.css";

interface SingleGroupProps {
  group: Group;
}

const SingleGroup: React.FC<SingleGroupProps> = ({ group }) => {
  return (
    <div className={styles.group}>
      <span className={styles.groupName}>{group.name}</span>
      <div className={styles.icons}>
        <AiFillEdit size={25} className={styles.edit} />
        <MdDelete size={25} className={styles.edit} />
      </div>
    </div>
  );
};

export default SingleGroup;
