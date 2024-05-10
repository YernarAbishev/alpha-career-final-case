import GuideList from "../components/guide/GuideList";
import {useEffect, useState} from "react";
import axiosInstance from "../services/axios";
import Error from "../components/Error";
import Loader from "../components/Loader";

function GuidesPage() {

    const [guides, setGuide] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        async function fetchGuides() {
            try {
                setIsLoading(true);
                const res = await axiosInstance.get("/posts/public");
                setGuide(res.data);
            } catch (e) {
                setIsError(true)
            } finally {
                setIsLoading(false)
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
                    <h1 className="title">Гайды</h1>
                    <h2 className="subtitle">Изучайте, улучшайтесь и достигайте успеха с нашими полезными гайдами</h2>
                    <GuideList guides={guides}/>
                </div>
            </section>
        </main>
    );
}

export default GuidesPage;