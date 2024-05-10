import { useState } from "react";
import axiosInstance from "../../services/axios";

function VacancyForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [salary, setSalary] = useState(0);

  const handleSubmit = async () => {
    try {
      await axiosInstance.post(
        "vacancies",
        {
          "title": title,
          "description": description,
          "salary": salary,
          "workTypeId": "662f67ad4bf5335782f2ac95"
        },
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      );
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form>
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
        name="description"
        id="description"
        placeholder="Описание"
        required
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        className="form-control"
        type="text"
        name="salary"
        id="salary"
        placeholder="Заработная плата"
        required
        value={salary}
        onChange={(e) => setSalary(e.target.value)}
      />
      <button className="button is-primary" onClick={handleSubmit}>
        Добавить
      </button>
    </form>
  );
}
export default VacancyForm;
