import { useEffect, useState } from "react";
import axiosInstance from "../../services/axios";
import { VACANCY_PAGE_ROUTE } from "../../utils/consts";
import { Link } from "react-router-dom";
import transliterate from "../../utils/transliterate";

export default function VacancyItem({ vacancy }) {
  console.log(vacancy);

  const [company, setCompany] = useState("");
  const [type, setType] = useState("");
  const route =
    VACANCY_PAGE_ROUTE.substring(0, VACANCY_PAGE_ROUTE.length - 17) +
    `${vacancy._id}/` +
    `${transliterate(vacancy.title)}`;

  console.log(route);

  useEffect(() => {
    async function fetchVacncies() {
      try {
        const res = await axiosInstance.get(`/users/${vacancy.userId}`);
        const resTypes = await axiosInstance.get(
          `/types/${vacancy.workTypeId}`
        );
        setCompany(res.data);
        setType(resTypes.data);
      } catch (e) {
        console.log(e.message);
      }
    }

    fetchVacncies();
  }, [vacancy.userId, vacancy.workTypeId]); // Добавлены зависимости

  return (
    <article className="job-card">
      <h3 className="job-title">{vacancy.title}</h3>
      <p className="job-company">{company.companyName}</p>
      <strong className="job-city">{vacancy.city}</strong>
      <span className="job-experience">{vacancy.experience}</span>
      <span className="job-experience">{type.name}</span>
      <span className="job-experience">{vacancy.salary} тг</span>
      <Link to={route} className="button is-primary">
        Смотреть
      </Link>
    </article>
  );
}
