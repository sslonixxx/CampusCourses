import { SubmitErrorHandler, SubmitHandler, useForm } from "react-hook-form";
import "../login/forms.css";
import { useNavigate } from "react-router-dom";
import Hello from "../hello/Hello";
import { RegisterUser } from "../../shared/requests/requestsProvider";

export interface RegisterForm {
  fullName: string;
  birthDate: string;
  email: string;
  password: string;
  confirmPassword: string;
}

function Register() {
  const { register, handleSubmit, formState } = useForm<RegisterForm>();
  const navigate = useNavigate();
  const submit: SubmitHandler<RegisterForm> = (data) => {
    const payload = {
      ...data,
      birthDate: data.birthDate.toString(),
    };
    RegisterUser(payload);
    navigate("/profile", { replace: true });
    console.log(payload);
  };

  const error: SubmitErrorHandler<RegisterForm> = (data) => {
    console.log(data);
  };

  const emailError = formState.errors["email"]?.message;
  const passwordError = formState.errors["password"]?.message;
  return (
    <>
      <Hello showBody={false}></Hello>
      <main>
        <form className="form" onSubmit={handleSubmit(submit, error)}>
          <h2>Регистрация нового пользователя</h2>
          <div className="input-container">
            <label>ФИО</label>
            <input
              type="text"
              {...register("fullName", {
                required: "required field",
              })}
            />
          </div>
          <div className="input-container">
            <label>День рождения</label>
            <input
              type="date"
              {...register("birthDate", { required: "required field" })}
            />
          </div>
          <div className="input-container">
            <label>Email</label>
            <input
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
          <div className="input-container">
            <label>Пароль</label>
            <input
              type="password"
              {...register("password", {
                required: "required field",
                minLength: {
                  value: 6,
                  message: "Minimum length of password is 6",
                },
                pattern: {
                  value: /^(?=.*\d)(?=.*[a-z]).{6,}$/,
                  message: "Password must consist 1 number",
                },
              })}
              placeholder="******"
            />
            {passwordError && <p className="invalidField">{passwordError}</p>}
          </div>
          <div className="input-container">
            <label>Повторите пароль</label>
            <input
              type="password"
              {...register("confirmPassword", {
                required: "required field",
                minLength: {
                  value: 6,
                  message: "Minimum length of password is 6",
                },
                pattern: {
                  value: /^(?=.*\d)(?=.*[a-z]).{6,}$/,
                  message: "Password must consist 1 number",
                },
              })}
              placeholder="******"
            />
            {passwordError && <p className="invalidField">{passwordError}</p>}
          </div>
          <button className="button">Зарегистрироваться</button>
        </form>
      </main>
    </>
  );
}

export default Register;
