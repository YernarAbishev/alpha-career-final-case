import VacancyList from "../components/vacancy/VacancyList";
import {useEffect, useState} from "react";
import axiosInstance from "../services/axios";
import Error from "../components/Error";
import Loader from "../components/Loader";

function VacanciesPage() {

    const [vacancies, setVacancy] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        async function fetchVacncies() {
            try {
                setIsLoading(true);
                const res = await axiosInstance.get("/vacancies");
                setVacancy(res.data);
            } catch (e) {
                setIsError(true)
            } finally {
                setIsLoading(false)
            }
        }

        fetchVacncies();
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
                    <h1 className="title">Вакансии</h1>
                    <h2 className="subtitle">Откройте дверь в своё будущее в Alpha Career Center</h2>
                    <VacancyList vacancies={vacancies}/>
                </div>
            </section>
        </main>
    );
}

export default VacanciesPage;