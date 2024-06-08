import React from 'react';
import { Card, CardBody, Typography } from '@material-tailwind/react';

const About = () => {
    return (
        <section className="h-screen flex items-center justify-center text-white">
            <Card className="max-w-sm bg-opacity-75">
                <CardBody>
                    <img src="/assets/About.gif" alt=" About" className="w-full h-auto mb-4 border-2 shadow-[#33AF8D] shadow-glow" />
                    <Typography variant="h5" color="blue-gray" className="mb-2">
                        About
                    </Typography>
                    <Typography>
                        This is the About section. Here you can provide information about yourself or your company.
                    </Typography>
                </CardBody>
            </Card>
        </section >
    );
};

export default About;
