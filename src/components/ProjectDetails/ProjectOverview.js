import { CodeIcon } from '@heroicons/react/solid';
import React, { useEffect } from 'react'
import { projects } from '../../data';

export default function ProjectOverview(props) {
    useEffect(() => {
        var n = window.location.pathname.lastIndexOf('/');
        let result = window.location.pathname.substring(n + 1);
        const array = [];
        const desArray = [];
        let project = projects.forEach((e) => {
            if (e.id == result) {
                array.push({
                    id: e.id,
                    title: e.title,
                    subtitle: e.subtitle,
                    description: e.description,
                    image: e.image,
                    fullDescription: e.fullDescription.forEach((e) => {
                        desArray.push(e);
                    }),
                })
                setProject(array[0]);
                setDescription(desArray);
            }
        })
        console.log(array)
        console.log(desArray)
    }, []);
    const [project, setProject] = React.useState([]);
    const [description, setDescription] = React.useState([]);
    return (
        <div id="details" className="text-gray-400 bg-gray-900 body-font">
            <div className="container px-5 py-10 mx-auto text-center lg:px-40">
                <div className="flex flex-col w-full mb-20">
                    <CodeIcon className="mx-auto inline-block w-10 mb-4" />
                    <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
                        Apps I've Built
                    </h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                        2+ years of Mobile App development experience with proficiency in developing cross-platform mobile apps using Flutter framework.
                    </p>
                </div>
                <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                    <a
                        href={project.link}
                        key={`${project.image}`}
                        className="sm:w-1/2 w-100 p-4" />
                    <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                        <img
                            alt="gallery"
                            className="flex-wrap"
                            src={project.image}
                        />
                        <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                            <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                                {project.subtitle}
                            </h2>
                            <h1 className="title-font text-lg font-medium text-white mb-3">
                                {project.title}
                            </h1>
                            <p className="leading-relaxed">{project.description}</p>
                        </div>
                        <div className='max-w-7xl mx-auto py-6 sm:px-6 lg:px-8'>
                        {description.map((e)=>(
                        <h2
                        className='border-2 border-gray-800 leading-relaxed text-white mb-3'
                        key={e.id}
                        >
                         {e.description}
                        </h2>
                        ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
