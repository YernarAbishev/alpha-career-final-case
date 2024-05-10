import { useEffect, useState } from "react";
import Error from "../components/Error";
import Loader from "../components/Loader";
import axiosInstance from "../services/axios";

import VacancyForm from "../components/vacancy/VacancyForm";
import VacancyListAdmin from "../components/vacancy/VacancyListAdmin";

function CompanyAdminPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [guides, setGuide] = useState([]);
  console.log(localStorage.getItem("token"));
  useEffect(() => {
    async function fetchGuides() {
      try {
        setIsLoading(true);

        const res = await axiosInstance.get("/vacancies/", {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        });
        setGuide(res.data);
      } catch (e) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }

    fetchGuides();
  }, []);
  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <Error />;
  }
  return (
    <main>
      <section className="default-block">
        <div className="container">
          <h3 className="title mt-10">Управление вакансиями</h3>
          <VacancyForm />
          <h3 className="title mt-10">Список</h3>
          <VacancyListAdmin guides={guides} />
        </div>
      </section>
    </main>
  );
}

export default CompanyAdminPage;
