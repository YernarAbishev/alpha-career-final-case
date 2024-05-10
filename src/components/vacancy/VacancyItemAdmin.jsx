import axiosInstance from "../../services/axios";
import { Link } from "react-router-dom";

function VacancyItemAdmin({ guide }) {
  const handleDelete = async () => {
    await axiosInstance.delete(`/posts/${guide._id}`, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    });
    window.location.reload();
  };
  console.log(guide);
  return (
    <article className="guide-card">
      <h3 className="guide-title">Заголовок: {guide.title}</h3>
      <p className="guide-date">Описание: {guide.content}</p>
      <p className="guide-date">
        Public: {guide.isPublic ? "Public" : "Not Public"}
      </p>
      <div>
        <Link to={`/guide/${guide._id}/update`}>
          <button className="button is-primary">Изменить</button>
        </Link>
        <span> </span>
        <button className="button is-danger" onClick={() => handleDelete()}>
          Удалить
        </button>
      </div>
    </article>
  );
}

export default VacancyItemAdmin;
