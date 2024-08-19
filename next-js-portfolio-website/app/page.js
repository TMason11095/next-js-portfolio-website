import Project from "@/components/Project/Project";
import ProjectsList from "@/components/Project/ProjectsList";

export default function Home({image}) {
  return (
    <>
      <div className="flex justify-content-center flex-1 grey-background">
        <div className="flex column section-margins section-width dark-blue-text flex-1">
          <div className="flex justify-content-center header-text-size bold header-padding border-bottom light-blue-border light-blue-text">
            Projects
          </div>
          <ProjectsList />
        </div>
      </div>
    </>
  );
}
