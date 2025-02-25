import { SubmitErrorHandler, SubmitHandler, useForm } from "react-hook-form";
import Group from "../../../@types/Group";
import styles from "../groupList.module.css";

interface Modal {
  closeModal: (arg0: boolean) => void;
  editGroup: (newGroup: Group) => void;
  group: Group;
}

const EditGroupModal: React.FC<Modal> = ({ closeModal, editGroup, group }) => {
  const { register, handleSubmit } = useForm<Group>({
    defaultValues: group,
  });
  const submit: SubmitHandler<Group> = async (data) => {
    const updatedGroup = { ...group, name: data.name };
    editGroup(updatedGroup);
  };

  const error: SubmitErrorHandler<Group> = (data) => {
    console.log(data);
  };

  return (
    <div className={styles.modalBack} onClick={(e) => e.stopPropagation()}>
      <div
        className={styles.modalContainer}
        onClick={(e) => e.stopPropagation()}
      >
        <form className="form" onSubmit={handleSubmit(submit, error)}>
          <h2>Редактирование группы</h2>
          <div className="input-container">
            <label>Название группы</label>
            <input
              type="text"
              {...register("name", {
                required: "required field",
              })}
            />
          </div>
          <div className={styles.btnContainer}>
            <button className="button">Сохранить</button>
            <button
              onClick={(e) => {
                e.preventDefault();
                closeModal(false);
              }}
              className={styles.btnModalClose}
            >
              Отмена
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditGroupModal;
