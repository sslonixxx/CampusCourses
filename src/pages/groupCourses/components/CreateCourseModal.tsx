import {
  Controller,
  SubmitErrorHandler,
  SubmitHandler,
  useForm,
} from "react-hook-form";
import Course from "../../../@types/Course";
import { Group, Radio, Select } from "@mantine/core";
import styles from "../course.module.css";
import { useEffect, useState } from "react";
import { EditorState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { CreateCourse } from "../../../@types/CreateCourse";
import { getTeachersList } from "../../../shared/requests/course/getTeachersList";
import { createCourse } from "../../../shared/requests/course/createCourse";

export interface CreateCourseModal {
  closeModal: (arg0: boolean) => void;
  updateList: (newList: Course[]) => void;
  id: string;
}

export const CreateCourseModal: React.FC<CreateCourseModal> = ({
  closeModal,
  updateList,
  id,
}) => {
  const { control, register, handleSubmit, formState } = useForm<CreateCourse>(
    {}
  );
  const submit: SubmitHandler<CreateCourse> = async (course) => {
    const data = {
      ...course,
    };
    const newCourseList = await createCourse(id, data);
    updateList(newCourseList);
  };

  const [teachersList, setTeachersList] = useState<
    { value: string; label: string }[]
  >([]);
  useEffect(() => {
    const fillTeachersList = async () => {
      const response = await getTeachersList();
      if (Array.isArray(response)) {
        setTeachersList(
          response.map(({ id, fullName }) => ({ value: id, label: fullName }))
        );
      }
    };
    fillTeachersList();
  }, []);

  const error: SubmitErrorHandler<Course> = (data) => {
    console.log(data);
  };
  const [requirementsEditorState, setRequirementsEditorState] = useState(
    EditorState.createEmpty()
  );
  const [annotationsEditorState, setAnnotationsEditorState] = useState(
    EditorState.createEmpty()
  );
  const nameError = formState.errors["name"]?.message;
  const startYearError = formState.errors["startYear"]?.message;
  const maximumStudentsCountError =
    formState.errors["maximumStudentsCount"]?.message;

  return (
    <div className="modalBack" onClick={(e) => e.stopPropagation()}>
      <div className="modalContainer" onClick={(e) => e.stopPropagation()}>
        <form className="form" onSubmit={handleSubmit(submit, error)}>
          <h2>Создание курса</h2>
          <div className="input-container">
            <label>Название курса</label>
            <input
              type="text"
              {...register("name", {
                required: "Обязательное поле",
              })}
            />
            {nameError && <p className="invalidField">{nameError}</p>}
            <label>Год начала курса</label>
            <input
              type="number"
              {...register("startYear", {
                required: "Обязательное поле",
              })}
            />
            {startYearError && <p className="invalidField">{startYearError}</p>}
            <label>Общее число мест</label>
            <input
              type="number"
              {...register("maximumStudentsCount", {
                required: "Обязательное поле",
              })}
            />
            {maximumStudentsCountError && (
              <p className="invalidField">{maximumStudentsCountError}</p>
            )}
            <div className={styles.semester}>
              <label>Семестр</label>
              <Controller
                name="semester"
                control={control}
                defaultValue="Spring"
                render={({ field }) => (
                  <Radio.Group
                    value={field.value}
                    onChange={(value) => field.onChange(value)}
                  >
                    <Group>
                      <Radio
                        className={styles.semesterInput}
                        value="Spring"
                        label="Весенний"
                      />
                      <Radio
                        className={styles.semesterInput}
                        value="Autumn"
                        label="Осенний"
                      />
                    </Group>
                  </Radio.Group>
                )}
              />
            </div>
            <div className={styles.annotations}>
              <label>Требования</label>
              <Controller
                name="requirements"
                control={control}
                rules={{ required: "Обязательное поле" }}
                defaultValue=""
                render={({ field }) => (
                  <>
                    <Editor
                      editorState={requirementsEditorState}
                      onEditorStateChange={(state) => {
                        setRequirementsEditorState(state);
                        const plainText = state
                          .getCurrentContent()
                          .getPlainText();
                        field.onChange(plainText);
                      }}
                      wrapperClassName={styles.wrapper}
                      editorClassName={styles.editor}
                    />
                    {formState.errors.requirements && (
                      <p className="invalidField">
                        {formState.errors.requirements.message}
                      </p>
                    )}
                  </>
                )}
              />
            </div>
            <div className={styles.annotations}>
              <label>Аннотации</label>
              <Controller
                name="annotations"
                control={control}
                rules={{ required: "Обязательное поле" }}
                defaultValue=""
                render={({ field }) => (
                  <>
                    <Editor
                      editorState={annotationsEditorState}
                      onEditorStateChange={(state) => {
                        setAnnotationsEditorState(state);
                        const plainText = state
                          .getCurrentContent()
                          .getPlainText();
                        field.onChange(plainText);
                      }}
                      wrapperClassName={styles.wrapper}
                      editorClassName={styles.editor}
                    />
                    {formState.errors.annotations && (
                      <p className="invalidField">
                        {formState.errors.annotations.message}
                      </p>
                    )}
                  </>
                )}
              />
            </div>
            <Controller
              name="mainTeacherId"
              control={control}
              rules={{ required: "Выберите преподавателя" }}
              render={({ field }) => (
                <>
                  <Select
                    mt="md"
                    label="Преподаватель"
                    placeholder="Выберите преподавателя"
                    data={teachersList}
                    searchable
                    value={field.value}
                    onChange={(value) => field.onChange(value)}
                  />
                  {formState.errors.mainTeacherId && (
                    <p className="invalidField">
                      {formState.errors.mainTeacherId.message}
                    </p>
                  )}
                </>
              )}
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
