import React from 'react';
import { Card, CardBody, Typography } from '@material-tailwind/react';

const Projects = () => {
    return (
        <section className="h-screen flex items-center justify-center text-white">
            <Card className="max-w-sm bg-opacity-75">
                <CardBody>
                    <img src="/assets/Project.gif" alt="Projects" className="w-full h-auto mb-4 border-2 shadow-[#2AB48C] shadow-glow" />
                    <Typography variant="h5" color="blue-gray" className="mb-2">
                        Projects
                    </Typography>
                    <Typography>
                        This is the Projects section. Here you can showcase your amazing projects.
                    </Typography>
                </CardBody>
            </Card>
        </section >
    );
};

export default Projects;
