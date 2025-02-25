import React, { useState } from "react";
import { AiFillEdit } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import styles from "../groupList.module.css";
import { useNavigate } from "react-router-dom";
import Group from "../../../@types/Group";
import { useGroupName } from "../../../shared/contexts/groupName/useGroupName";
import EditGroupModal from "./EditGroupModal";
import { putGroup } from "../../../shared/requests/group/putGroup";
import { deleteGroup } from "../../../shared/requests/group/deleteGroup";

interface ASingleGroupProps {
  group: Group;
  onDelete: (id: number) => void;
  onEdit: (updatedGroup: Group) => void;
}

const deleteCampusGroup = (group: Group, onDelete: (id: number) => void) => {
  deleteGroup(group.id);
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
    putGroup(group);
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
          onClick={() => deleteCampusGroup(group, onDelete)}
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
