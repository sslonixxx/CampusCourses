import React from "react";
import Group from "./Group";
import { AiFillEdit } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import styles from "../../componentsCss/groupList.module.css";

interface SingleGroupProps {
  group: Group;
}

const SingleGroup: React.FC<SingleGroupProps> = ({ group }) => {
  return (
    <div className={styles.group}>
      <span className={styles.groupName}>{group.name}</span>
      <AiFillEdit />
      <MdDelete />
    </div>
  );
};

export default SingleGroup;
