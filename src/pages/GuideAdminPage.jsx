import { useEffect, useState } from "react";
import GuideForm from "../components/guide/GuideForm";
import Error from "../components/Error";
import Loader from "../components/Loader";
import axiosInstance from "../services/axios";

import GuideListAdmin from "../components/guide/GuideListAdmin";

function GuideAdminPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [guides, setGuide] = useState([]);

  useEffect(() => {
    async function fetchGuides() {
      try {
        setIsLoading(true);

        const res = await axiosInstance.get("/posts/", {
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
          <h3 className="title mt-10">Post Guide</h3>
          <GuideForm />
          <h3 className="title mt-10">Guide List</h3>
          <GuideListAdmin guides={guides} />
        </div>
      </section>
    </main>
  );
}

export default GuideAdminPage;
