import React, { useEffect, useState } from 'react';

const TypingAnimation = () => {
    const anim = [
        { t: "{ }", ms: 400 },
        { t: "{_}", ms: 400 },
        { t: "{ }", ms: 400 },
        { t: "{_}", ms: 400 },
        { t: "{K_}", ms: 100 },
        { t: "{KI_}", ms: 100 },
        { t: "{KIN_}", ms: 100 },
        { t: "{KING_}", ms: 100 },
        { t: "{KINGL_}", ms: 100 },
        { t: "{KINGLA_}", ms: 100 },
        { t: "{KINGLAS_}", ms: 100 },
        { t: "{KINGLAST_}", ms: 100 },
        { t: "{KINGLAST }", ms: 300 },
        { t: "{KINGLAST_}", ms: 400 },
        { t: "{KINGLAST }", ms: 400 },
        { t: "{KINGLAST_}", ms: 400 },
        { t: "{KINGLAST}", ms: 400 },
        { t: "{KINGLAST}", ms: 400 },
    ];

    const [text, setText] = useState('');
    const [index, setIndex] = useState(0);
    const [animationCompleted, setAnimationCompleted] = useState(false);

    useEffect(() => {
        let stepDenominator = 1;
        if (window.localStorage.stepDenominator)
            stepDenominator = window.localStorage.stepDenominator;

        const update = () => {
            if (index < anim.length) {
                const step = anim[index];
                setText(step.t);
                setIndex(prevIndex => prevIndex + 1);
            } else {
                setAnimationCompleted(true);
                window.localStorage.stepDenominator = 2;
            }
        };

        if (index < anim.length) {
            const timer = setTimeout(update, anim[index].ms / stepDenominator);
            return () => clearTimeout(timer);
        }
    }, [index, anim]);

    useEffect(() => {
        if (animationCompleted) {
            setTimeout(() => {
                document.getElementById('main').style.opacity = 1;
            }, 500);
        }
    }, [animationCompleted]);

    return (
        <div className="text-2xl flex justify-center items-center  font-mono">
            <h1 id="intro" dangerouslySetInnerHTML={{ __html: text }}></h1>
        </div>
    );
};

export default TypingAnimation;
