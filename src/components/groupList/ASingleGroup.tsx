import React, { useState } from "react";
import Group from "./Group";
import { AiFillEdit } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import styles from "../../cssModuls/groupList.module.css";
import { deleteCampusGroup, putCampusGroup } from "../../requests";
import EditGroupModal from "./EditGroupModal";
import { useNavigate } from "react-router-dom";
import { useGroupName } from "../../contexts/groupName/useGroupName";

interface ASingleGroupProps {
  group: Group;
  onDelete: (id: number) => void;
  onEdit: (updatedGroup: Group) => void;
}

const deleteGroup = (group: Group, onDelete: (id: number) => void) => {
  deleteCampusGroup(group.id);
  onDelete(group.id);

  console.log(group.id);
};

const ASingleGroup: React.FC<ASingleGroupProps> = ({
  group,
  onDelete,
  onEdit,
}) => {
  const [showEditGroupModal, setShowEditGroupModal] = useState(false);

  const navigate = useNavigate();

  const editGroup = (group: Group) => {
    putCampusGroup(group);
    onEdit(group);
  };
  const { setGroup } = useGroupName();
  const onClickFunction = (e: React.MouseEvent, group: Group) => {
    e.stopPropagation();
    setGroup(group.name);
    navigate(`/groups/${group.id}`);
  };

  return (
    <div className={styles.group} onClick={(e) => onClickFunction(e, group)}>
      <span className={styles.groupName}>{group.name}</span>
      <div className={styles.icons} onClick={(e) => e.stopPropagation()}>
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

export default ASingleGroup;
