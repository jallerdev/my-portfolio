import TimeLine from "@/features/home/components/TimeLine";
import Cover from "@/features/home/components/Cover";
import Stack from "@/features/home/components/Stack";
// import ProjectsGrid from "@/features/home/components/Projects";
import Contact from "@/features/home/components/Contact";

export default function Home() {
  return (
    <div className="">
      <div>
        <Cover />
      </div>
      <div>
        <Stack />
      </div>
      <div>
        <TimeLine />
      </div>
      {/* <div>
        <ProjectsGrid />
      </div> */}
      <div>
        <Contact />
      </div>
    </div>
  );
}
