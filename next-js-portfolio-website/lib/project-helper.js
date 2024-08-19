import rawProjects from '@/data/projects.json'
import rawSkills from '@/data/skills.json'
import skillGroups from '@/data/skill-groups.json'
import { createDateObj } from "@/lib/date-range";

const IMG_PATH = '/images/projects/'

export function getProjects() {
    //Grab all the skill groups for more efficient mapping on skills
    const skillGroupsLookup = skillGroups.reduce((lookup, group) => {
        //Add the group to the lookup
        lookup[group.id] = group;
        return lookup;
    }, {})

    //Grab all the skills for more efficient mapping on projects
    const skillsLookup = rawSkills.reduce((lookup, skill) => {
        //Map the group to the skill's group id
        skill.group = skillGroupsLookup[skill.groupId];
        //Add the skill to the lookup
        lookup[skill.id] = skill;
        return lookup;
    }, {});

    //Map all the project sub ids to their respective objects
    //Update the image file name to the full path
    const projects = rawProjects.map(project => {
        //New object to avoid updating the original data (which breaks on refresh)
        const updatedProject = {...project};

        //Map skills from skill ids
        updatedProject.skills = updatedProject.skillIds.map(skillId => skillsLookup[skillId]);
        //Map full image path
        updatedProject.image = updatedProject.image ? `${IMG_PATH}${updatedProject.image}` : null;
        //Convert the "YYYY-MM" dates into full date objects
        updatedProject.startDate = createDateObj(updatedProject.startDate);
        updatedProject.endDate = createDateObj(updatedProject.endDate);

        return updatedProject;
    });

    //Return the projects
    return projects;
}