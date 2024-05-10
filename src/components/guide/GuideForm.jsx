import { useState } from "react";
import axiosInstance from "../../services/axios";

function GuideForm() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };
  const handleSubmit = async () => {
    try {
      await axiosInstance.post(
        "posts",
        {
          title: title,
          content: content,
          isPublic: isChecked,
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
    <form className="job-card mb-10">
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
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
        <label htmlFor="checkbox-circle1" onClick={() => handleSubmit()}>
          Public?
        </label>
      </div>
      <button className="button is-primary" onClick={handleSubmit}>Добавить гайд</button>
    </form>
  );
}
export default GuideForm;
