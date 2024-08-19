import ProjectTag from "./ProjectTag";

export default function TagsList({skills}) {
    return (
        <>
            {skills && (
                <div className="tags flex row wrap">
                    {skills.map((skill) =>
                        (skill && (
                            <ProjectTag key={skill.id} skill={skill} />
                        ))
                    )}
                </div>
            )}
        </>
    );
}