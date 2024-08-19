export default function ProjectTag({ skill }) {
    return (
        <div className={`tag-container ${skill.group ? skill.group.cssTagClassName : null}`}>
            <div className="tag">
                {skill.name}
            </div>
        </div>
    );
}