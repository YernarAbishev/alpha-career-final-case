import VacancyItemAdmin from "./VacancyItemAdmin";

function VacancyListAdmin({ guides }) {
  return (
    <div className="guides mt-10">
      {guides.map((guide) => (
        <VacancyItemAdmin guide={guide} key={guide._id} />
      ))}
    </div>
  );
}

export default VacancyListAdmin;
