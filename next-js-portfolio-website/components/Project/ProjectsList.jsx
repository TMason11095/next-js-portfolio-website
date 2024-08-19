import { getProjects } from "@/lib/project-helper";
import Project from "./Project";

export default function ProjectsList() {
    //Grab all the projects
    const projects = getProjects();
    //Sort by date
    projects.sort((a, b) => {
        //Compare the start dates
        const startDateComparison = b.startDate - a.startDate;
        //Return the comparison if the start dates differ
        if (startDateComparison != 0) {
            return startDateComparison;
        }
        //Start dates are the same so compare the end dates
        //If either end date is null, then that project is currently being worked on (and therefore is the latest)
        if (!a.endDate) {
            return -1;
        }
        if (!b.endDate) {
            return 1;
        }
        //Neither are current, so return the final comparisons
        return b.endDate - a.endDate;
    });

    return (
        <div className="flex row section-width project-gap wrap">
            {projects.map((project) => 
                <Project key={project.id} project={project} />
            )}
        </div>
    );
}