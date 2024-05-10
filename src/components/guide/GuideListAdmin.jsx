import GuideItemAdmin from "./GuideItemAdmin";

function GuideListAdmin({guides}) {
    return (
        <div className="guides mt-10">
            {guides.map((guide) => (
                <GuideItemAdmin guide={guide} key={guide._id} />
            ))}
        </div>
    );
}

export default GuideListAdmin;