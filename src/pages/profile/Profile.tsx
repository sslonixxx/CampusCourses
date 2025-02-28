import { SubmitErrorHandler, SubmitHandler, useForm } from "react-hook-form";
import styles from "./profile.module.css";
import { useEffect } from "react";
import Header from "./Header";
import { useEmail } from "../../shared/contexts/email/useEmail";
import { PutProfile } from "../../shared/requests/requestsProvider";
import { GetProfile } from "../../shared/requests/requestsProvider";
export interface ProfileForm {
  fullName: string;
  email: string;
  birthDate: string;
}

function Profile() {
  const { register, handleSubmit, formState, reset } = useForm<ProfileForm>();
  const { setEmail } = useEmail();
  useEffect(() => {
    const fillProfile = async () => {
      try {
        const data = await GetProfile();
        const formattedData = {
          ...data,
          birthDate: data.birthDate.split("T")[0],
        };
        reset(formattedData);
        setEmail(data.email);
      } catch (error) {
        console.error("Error fetching profile data:", error);
      }
    };

    fillProfile();
  }, [reset, setEmail]);

  const submit: SubmitHandler<ProfileForm> = (data) => {
    const payload = {
      ...data,
      birthDate: data.birthDate.toString(),
    };
    PutProfile(payload);
    setEmail(data.email);
  };

  const error: SubmitErrorHandler<ProfileForm> = (data) => {
    console.log(data);
  };

  const emailError = formState.errors["email"]?.message;
  return (
    <>
      <Header></Header>
      <main>
        <form className="form" onSubmit={handleSubmit(submit, error)}>
          <h2>Профиль</h2>
          <div className={styles.inputContainer}>
            <label className={styles.label}>ФИО</label>
            <input
              className={styles.input}
              type="text"
              {...register("fullName", {
                required: "required field",
              })}
            />
          </div>
          <div className={styles.inputContainer}>
            <label className={styles.label}>Email</label>
            <input
              className={styles.input}
              type="email"
              {...register("email", {
                required: "required field",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: "Invalid email addresss",
                },
              })}
              placeholder="user@exemple.com"
            />
            {emailError && <p className="invalidField">{emailError}</p>}
          </div>
          <div className={styles.inputContainer}>
            <label className={styles.label}>День рождения</label>
            <input
              className={styles.input}
              type="date"
              {...register("birthDate", { required: "required field" })}
            />
          </div>
          <button className="button">Изменить</button>
        </form>
      </main>
    </>
  );
}
export default Profile;
