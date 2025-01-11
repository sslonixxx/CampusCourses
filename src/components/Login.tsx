import { SubmitErrorHandler, SubmitHandler, useForm } from "react-hook-form";
import "../componentsCss/forms.css";
import { loginUser } from "../requests";
import { useNavigate } from "react-router-dom";

export interface LoginForm {
  email: string;
  password: string;
}
function Login() {
  const { register, handleSubmit, formState } = useForm<LoginForm>({});
  const navigate = useNavigate();
  const submit: SubmitHandler<LoginForm> = async (data) => {
    await loginUser(data);
    navigate("/profile", { replace: true });
    console.log(data);
  };
  const error: SubmitErrorHandler<LoginForm> = (data) => {
    console.log(data);
  };
  const emailError = formState.errors["email"]?.message;
  const passwordError = formState.errors["password"]?.message;

  return (
    <main>
      <form className="form" onSubmit={handleSubmit(submit, error)}>
        <h2>Вход</h2>
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
        <button>Отправить</button>
      </form>
    </main>
  );
}

export default Login;
