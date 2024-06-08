import React from 'react';
import { Card, CardBody, Typography } from '@material-tailwind/react';

const Home = () => {
    return (
        <section className="h-screen flex items-center justify-center text-white">
            <Card className="max-w-sm bg-opacity-75 ">
                <CardBody>
                    <img src="../assets/Home.gif" alt="Hero" className="w-full h-auto mb-4 border-2 shadow-[#6E59A8] shadow-glow" />
                    <Typography variant="h5" color="blue-gray" className="mb-2">
                        Home
                    </Typography>
                    <Typography>
                        Welcome to the Home section. This is where you'll find the introduction to our website.
                    </Typography>
                </CardBody>
            </Card>
        </section>
    );
};

export default Home;
