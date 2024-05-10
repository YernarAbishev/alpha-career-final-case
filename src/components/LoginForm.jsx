import React, { useState } from "react";
import axiosInstance from "../services/axios";
import { Link, useNavigate } from "react-router-dom";
import { REGISTER_PAGE_ROUTE } from "../utils/consts";
import { useAuth } from "../providers/AuthProvider"; // Импортируем хук useAuth

function LoginForm() {
  const { login } = useAuth(); // Получаем функцию login из контекста аутентификации
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axiosInstance.post("/auth/login", {
        email: email.toLowerCase(),
        password: password,
      });
      console.log("Успешная авторизация:", res.data);
      login(res.data); // Вызываем функцию login с токеном в качестве аргумента
      setError(null);
      navigate("/");
    } catch (error) {
      console.error("Ошибка авторизации:", error.response.data[0].msg);
      setError(error.response.data[0].msg);
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h1 className="title">Вход в систему</h1>
      <input
        className="form-control"
        type="email"
        name="email"
        id="email"
        placeholder="E-mail"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        className="form-control"
        type="password"
        name="password"
        id="password"
        placeholder="Пароль"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button className="button is-primary" type="submit">
        Войти
      </button>
      {error && (
        <p className="helper" style={{ color: "red" }}>
          {error}
        </p>
      )}
      <p className="helper">
        Еще нет аккаунта? Пройди{" "}
        <Link to={REGISTER_PAGE_ROUTE} className="link">
          регистрацию
        </Link>
      </p>
    </form>
  );
}

export default LoginForm;
