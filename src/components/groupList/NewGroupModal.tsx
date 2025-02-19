import { SubmitErrorHandler, SubmitHandler, useForm } from "react-hook-form";
import Group from "./Group";
import styles from "../../cssModuls/groupList.module.css";
import { createGroup } from "../../requests";

interface Modal {
  closeModal: (arg0: boolean) => void;
  addGroup: (newGroup: Group) => void;
}

const NewGroupModal: React.FC<Modal> = ({ closeModal, addGroup }) => {
  const { register, handleSubmit } = useForm<Group>();
  const submit: SubmitHandler<Group> = async (newGroup) => {
    const data = {
      ...newGroup,
      id: Date.now(),
    };
    const payload = { name: newGroup.name };
    await createGroup(payload);
    addGroup(data);
  };

  const error: SubmitErrorHandler<Group> = (data) => {
    console.log(data);
  };

  return (
    <div className={styles.modalBack}>
      <div className={styles.modalContainer}>
        <form className="form" onSubmit={handleSubmit(submit, error)}>
          <h2>Добавление группы</h2>
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

export default NewGroupModal;
