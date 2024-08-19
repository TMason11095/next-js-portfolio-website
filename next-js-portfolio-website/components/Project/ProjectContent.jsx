import DateRange from "./DateRange";
import TagsList from "./TagsList";


export default function ProjectContent({title, startDate, endDate, description, skills}) {
    return (
        <div className="flex column">
            <div className="flex row baseline header">
                <div className="standard-header-text-size bold light-blue-text">
                    {title}
                </div>
                <DateRange startDate={startDate} endDate={endDate} />
            </div>
            <div>
                {description}
            </div>
            <TagsList skills={skills} />
        </div>
    );
}