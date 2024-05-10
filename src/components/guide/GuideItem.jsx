function GuideItem({guide}) {
    return (
        <article className="guide-card">
            <h3 className="guide-title">{guide.title}</h3>
            <p className="guide-date">Опубликовано: {guide.postedDate}</p>
            <button className="button is-primary">Читать</button>
        </article>
    );
}

export default GuideItem;