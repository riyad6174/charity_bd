import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

function ProjectCard({ project }) {
  console.log(project, 'props');
  return (
    <div>
      <div class='flex flex-col justify-center py-4 h-full'>
        <div class='relative w-full  h-full flex flex-col md:flex-row md:space-x-5 space-y-3 md:space-y-0 rounded-xl shadow-lg px-3 max-w-xs md:max-w-4xl mx-auto border border-green-600 bg-white'>
          <div class='w-full  md:w-1/4  bg-white grid place-items-center'>
            <Image
              src={`http://localhost:5000/img/${project?.image}`}
              height={400}
              width={400}
              alt='tailwind logo'
              className='rounded-xl py-2 w-96 h-full object-cover'
            />
          </div>
          <div class='w-full md:w-2/3 bg-white  flex flex-col justify-between space-y-2 p-3'>
            <div>
              <Link href={`/project/${project?._id}`}>
                <p class=' text-gray-800 md:text-xl text-xl '>
                  {project?.title}
                </p>
              </Link>
              <p class=' text-gray-500 text-base pt-2 line-clamp-2 md:line-clamp-3'>
                {project?.description}
              </p>
            </div>
            <Link
              href={`/project/${project?._id}`}
              className=' text-center w-24 py-1 rounded-sm  font-thin bg-green-600 text-white'
            >
              Donate
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
