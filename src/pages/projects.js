import ProjectCard from '@/components/pageComponents/ProjectCard';
import React from 'react';

function Page({ projects }) {
  console.log(projects);
  return (
    <div>
      <div>
        <span className='flex justify-center uppercase text-xl text-green-600 font-semibold'>
          Our Projects
        </span>
        <div className='container grid grid-cols-2 gap-6 mt-10 px-10'>
          {projects?.map((project) => {
            return <ProjectCard key={project._id} project={project} />;
          })}
          {/* <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard /> */}
        </div>
      </div>
    </div>
  );
}

export default Page;

export async function getServerSideProps() {
  try {
    const res = await fetch('http://localhost:5000/api/frontend/projects');
    if (!res.ok) {
      throw new Error(`Failed to fetch data. Status: ${res.status}`);
    }

    const projects = await res.json();

    return {
      props: {
        projects,
      },
    };
  } catch (error) {
    console.error('Error fetching data:', error.message);
    return {
      props: {
        projects: [],
      },
    };
  }
}
