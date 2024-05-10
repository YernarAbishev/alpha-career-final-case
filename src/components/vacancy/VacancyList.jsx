import VacancyItem from "./VacancyItem";

function VacancyList({vacancies}) {

    return (
        <div className="jobs">
            {vacancies.map((vacancy) => (
                <VacancyItem vacancy={vacancy} key={vacancy.id} />
            ))}
        </div>
    );
}

export default VacancyList;