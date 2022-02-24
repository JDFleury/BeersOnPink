import React, { useEffect, useState } from "react";
import './specific-pastYear.styles.scss';
import { Bop2019, Bop2018, Bop2017, Bop2016 } from "../../assets/pastYears/ImageArrays";



const SpecificPastYear = ({ year }) => {
    const [imageIndex, setImageIndex] = useState(0);
    const [paused, setPaused] = useState(false);
    let images = []
    let imageFolder = null;

    switch (year) {
        case 2019:
            imageFolder = Bop2019;
            break;
        case 2018:
            imageFolder = Bop2018;
            break;
        case 2017:
            imageFolder = Bop2017;
            break;
        case 2016:
            imageFolder = Bop2016;
            break;
        default:
            imageFolder = Bop2019;
            break;
    }
    let keys = Object.keys(imageFolder);
    keys.forEach((key) => {
        images.push(imageFolder[key]);
    });


    const updateIndex = (currentIndex) => {
        if (currentIndex < 0) {
            currentIndex = images.length - 1;
        } else if (currentIndex >= images.length) {
            currentIndex = 0;
        }

        setImageIndex(currentIndex);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            if (!paused) {
                updateIndex(imageIndex + 1);
            }

        }, 4000);
        return () => {
            clearInterval(interval);

        }

    });

    return (
        <div
            className="specificPastYearContainer"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
        >
            <div className="text-container">
                <h5>{year}</h5>
            </div>
            {
                images.map((image, index) => (
                    <img className={`${index === imageIndex ? 'active image' : 'image'}`} key={index} src={image} alt="" />
                ))
            }

        </div>
    );
}

export default SpecificPastYear;