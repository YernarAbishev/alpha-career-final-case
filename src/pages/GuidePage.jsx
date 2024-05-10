
import { useEffect, useState } from "react";
import axiosInstance from "../services/axios";
import Error from "../components/Error";
import Loader from "../components/Loader";
import { useParams } from "react-router-dom";
import {GUIDES_PAGE_ROUTE} from "../utils/consts";
import {Link} from "react-router-dom";

function GuidePage() {
    const [guide, setGuide] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const params = useParams();

    console.log(params.guideid);

    useEffect(() => {
        async function fetchGuide() {
            try {
                setIsLoading(true);
                const res = await axiosInstance.get(`/posts/${params.guideid}`);
                setGuide(res.data);
            } catch (e) {
                setIsError(true);
            } finally {
                setIsLoading(false);
            }
        }

        fetchGuide();
    }, [params.guideid]);

    if (isLoading) {
        return <Loader />;
    }

    if (isError) {
        return <Error />;
    }

    return (
        <main>
            <section className="default-block">
                <div className="container mb-10">
                    <Link to={GUIDES_PAGE_ROUTE} className="button is-danger">Назад</Link>
                </div>
                <div className="container d-flex space-between">
                    <div className="left">
                        <h1 className="title">{guide.title}</h1>
                        <div className="job-description mt-10">{guide.content}</div>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default GuidePage;
