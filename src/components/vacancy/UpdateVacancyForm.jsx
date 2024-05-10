import React, { useState, useEffect } from "react";
import axiosInstance from "../../services/axios";
import { useNavigate, useParams } from "react-router-dom";

function UpdateVacancies() {
  const { guideid } = useParams();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [isPublic, setIsPublic] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosInstance.get(`/posts/${guideid}`);
        const postData = response.data;
        setTitle(postData.title);
        setContent(postData.content);
        setIsPublic(postData.isPublic);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [guideid]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axiosInstance.put(
        `/posts/${guideid}`,
        {
          title: title,
          content: content,
          isPublic: isPublic,
        },
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      );
      console.log("Post updated successfully:", response.data);
      setSubmitted(true);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (submitted) {
      navigate("/admin");
    }
  }, [submitted, navigate]);

  return (
    <main>
      <section className="default-block">
        <div className="container">
          <form onSubmit={handleSubmit}>
            <input
              className="form-control"
              type="title"
              name="text"
              id="title"
              placeholder="Заголовок"
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <input
              className="form-control"
              type="text"
              name="content"
              id="content"
              placeholder="Описание"
              required
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />

            <div className="checkbox-circle">
              <input
                type="checkbox"
                id="checkbox-circle1"
                name="check"
                checked={isPublic}
                onChange={(e) => setIsPublic(e.target.checked)}
              />
              <label htmlFor="checkbox-circle1">Public?</label>
            </div>
            <button
              className="button is-primary"
              type="submit" // Указываем тип кнопки как "submit"
            >
              Обновить
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}

export default UpdateVacancies;
