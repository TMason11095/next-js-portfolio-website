const skillGroups = require('@/data/skill-groups.json');

export function getSkillGroup(groupName) {
    const group = skillGroups.filter((group) => {
        return group.id == groupName;
    })

    return group[0];
}