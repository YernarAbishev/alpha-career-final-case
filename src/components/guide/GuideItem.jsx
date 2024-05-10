import {GUIDE_PAGE_ROUTE} from "../../utils/consts";
import transliterate from "../../utils/transliterate";
import {Link} from "react-router-dom";

function GuideItem({guide}) {
    const route =
        GUIDE_PAGE_ROUTE.substring(0, GUIDE_PAGE_ROUTE.length - 15) +
        `${guide._id}/` +
        `${transliterate(guide.title)}`;

    return (

        <article className="guide-card">
            <h3 className="guide-title">{guide.title}</h3>
            <p className="guide-date">Опубликовано: {guide.postedDate}</p>
            <Link to={route} className="button is-primary">Читать</Link>
        </article>
    );
}

export default GuideItem;