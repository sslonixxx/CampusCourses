import React, { useState } from "react";
import Group from "./Group";
import { AiFillEdit } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import styles from "../../cssModuls/groupList.module.css";
import { deleteCampusGroup, putCampusGroup } from "../../requests";
import EditGroupModal from "./EditGroupModal";

interface SingleGroupProps {
  group: Group;
  onDelete: (id: number) => void;
}

const deleteGroup = (group: Group, onDelete: (id: number) => void) => {
  deleteCampusGroup(group.id);
  onDelete(group.id);

  console.log(group.id);
};
const editGroup = (group: Group) => {
  putCampusGroup(group);
};

const SingleGroup: React.FC<SingleGroupProps> = ({ group, onDelete }) => {
  const [showEditGroupModal, setShowEditGroupModal] = useState(false);

  return (
    <div className={styles.group}>
      <span className={styles.groupName}>{group.name}</span>
      <div className={styles.icons}>
        <AiFillEdit
          size={25}
          className={styles.edit}
          onClick={() => setShowEditGroupModal(true)}
        />
        <MdDelete
          size={25}
          className={styles.edit}
          onClick={() => deleteGroup(group, onDelete)}
        />
      </div>
      {showEditGroupModal && (
        <EditGroupModal
          closeModal={() => setShowEditGroupModal(false)}
          editGroup={editGroup}
          group={group}
        />
      )}
    </div>
  );
};

export default SingleGroup;
