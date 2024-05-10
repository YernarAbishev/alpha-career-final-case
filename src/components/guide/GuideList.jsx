import GuideItem from "./GuideItem";

function GuideList({guides}) {
    return (
        <div className="guides">
            {guides.map((guide) => (
                <GuideItem guide={guide} key={guide.id} />
            ))}
        </div>
    );
}

export default GuideList;