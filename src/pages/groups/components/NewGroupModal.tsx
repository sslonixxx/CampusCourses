import { SubmitErrorHandler, SubmitHandler, useForm } from "react-hook-form";
import Group from "../../../@types/Group";
import { createGroup } from "../../../shared/requests/group/createGroup";

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
    <div className="modalBack">
      <div className="modalContainer">
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
          <div className="btnContainer">
            <button className="btnModalClose">Сохранить</button>
            <button
              onClick={(e) => {
                e.preventDefault();
                closeModal(false);
              }}
              className="btnModalClose"
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
