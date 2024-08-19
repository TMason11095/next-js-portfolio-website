import ProjectContent from "./ProjectContent";
import ProjectScreenshot from "./ProjectScreenshot";

export default function Project({project}) {
    return (
        <>
            <div className="project-container flex column">
                <ProjectScreenshot {...project} />
                <ProjectContent {...project} />
            </div>
        </>
    );
}