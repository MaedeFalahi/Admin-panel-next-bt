
import { useState } from "react";
import Link from "next/link";

import { useLogin } from "../components/services/mutations";
import { setCookie } from "../components/utils/cookie";

function Login() {
  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const { mutate } = useLogin();

  const changeHandler = (event) => {
    setForm((form) => ({ ...form, [event.target.name]: event.target.value }));
  };

  const loginHandler = (event) => {
    event.preventDefault();

    const { username, password } = form;

    if (!username || !password)
      return alert("User Name and Password is Necessary");

    mutate(form, {
      onSuccess: (data) => {
        console.log(data);
        setCookie("token", data?.token);
        <Link href="/" />
      },
      onError: (error) => console.log(error.response.data.message),
    });
  };

  return (
    <form onSubmit={loginHandler}>
      <input
        type="text"
        name="username"
        placeholder="username"
        value={form.username}
        onChange={changeHandler}
      />
      <input
        type="password"
        name="password"
        placeholder="password"
        value={form.password}
        onChange={changeHandler}
      />
      <button type="submit">Login</button>
    </form>
  );
}

export default Login;