import InputCommon from "@components/InputCommon/InputCommon";
import styles from "./styles.module.scss";
import Button from "@components/Button/Button";
import { useFormik } from "formik";
import * as Yup from "yup";

function Login() {
  const { container, title, boxRememberMe, lostPassword, btnLogin } = styles;

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },

    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      password: Yup.string()
        .min(6, "Your password must be at least 6 characters")
        .required("Password is required"),
    }),

    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <div className={container}>
      <div className={title}>SIGN IN</div>

      <form onSubmit={formik.handleSubmit}>
        <InputCommon
          id="email"
          label="Username or Email "
          type="text"
          isRequired
          formik={formik}
        />

        <InputCommon
          id="password"
          label="Password"
          type="password"
          isRequired
          formik={formik}
        />

        <div className={boxRememberMe}>
          <input type="checkbox" />
          <span>Remember me</span>
        </div>

        <div className={btnLogin}>
          <Button content={"LOGIN"} type="submit" />
        </div>
      </form>

      <div className={lostPassword}>Lost your password?</div>
    </div>
  );
}

export default Login;
