import React, { useState } from "react";
import axiosInstance from "../services/axios";
import { Link, useNavigate } from "react-router-dom";
import { LOGIN_PAGE_ROUTE } from "../utils/consts";

function RegisterCompanyForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [companyName, setCompanyName] = useState("");
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axiosInstance.post("/auth/registercompany", {
                email: email.toLowerCase(),
                password: password,
                companyName: companyName,
            });
            console.log("Успешная регистрация:", res.data);
            setError(null)
            navigate("/login");
        } catch (error) {
            console.error("Ошибка регистрации:", error.response.data[0].msg);
            setError(error.response.data[0].msg);
        }
    };

    return (
        <form className="form register" onSubmit={handleSubmit}>
            <h1 className="title">Регистрация компании</h1>
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
            <input
                className="form-control"
                type="text"
                name="companyName"
                id="companyName"
                placeholder="Название компании"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                required
            />
            <button className="button is-primary" type="submit">Зарегистрироваться</button>
            {error && <p className="helper" style={{ color: "red" }}>{error}</p>}
            <p className="helper">Уже есть аккаунт? Войдите <Link to={LOGIN_PAGE_ROUTE} className="link">здесь</Link></p>
        </form>
    );
}

export default RegisterCompanyForm;
