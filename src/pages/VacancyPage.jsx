
import { useEffect, useState } from "react";
import axiosInstance from "../services/axios";
import Error from "../components/Error";
import Loader from "../components/Loader";
import { useParams } from "react-router-dom";
import splitHundreds from "../utils/numberFormatter";

function VacancyPage() {
  const [vacancies, setVacancy] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const params = useParams();

  const [company, setCompany] = useState("");
  const [type, setType] = useState("");

  console.log(params.vacancyid);

  useEffect(() => {
    async function fetchVacncy() {
      try {
        setIsLoading(true);
        const res = await axiosInstance.get(`/vacancies/${params.vacancyid}`);
        setVacancy(res.data);
        const resComp = await axiosInstance.get(`/users/${res.data.userId}`);
        const resTypes = await axiosInstance.get(
          `/types/${res.data.workTypeId}`
        );
        setCompany(resComp.data);
        setType(resTypes.data);
      } catch (e) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }

    fetchVacncy();
  }, [params.vacancyid]);

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <Error />;
  }

  return (
    <main>
      <section className="default-block">
        <div className="container-job d-flex space-between">
          <div className="left">
            <h1 className="title">{vacancies.title}</h1>
            <h2 className='job-salary mt-10'>{splitHundreds(vacancies.salary)} тг</h2>
            <h3 className='job-company'>Требуемый опыт работы: не требуется</h3>
            <h3 className='job-company mt-10'>{type.name}</h3>
            <div className="job-description mt-10">{vacancies.description}</div>
          </div>
          <div className="job-card-vacancy">
            <div className="job-company">Компания</div>
            <div className="job-title">{company.companyName}</div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default VacancyPage;
