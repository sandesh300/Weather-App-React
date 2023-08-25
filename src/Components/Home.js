import React from 'react';
import WeekInfoCardComponents from './WeekInfoCard';
import ChooseStateComponents from './ChooseState';
import HumidityComponents from './Humidity';
import LeftComponents from './Left';
import Footer from './Footer';
import './HomeComponents.css'; // Import your CSS file

const HomeComponents = () => {
    return (
        <div className='homeWrap'>
            <div className='weatherSection'>
                <LeftComponents />
                <div className='rightSide'>
                    <ChooseStateComponents />
                    <WeekInfoCardComponents />
                    <HumidityComponents />
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default HomeComponents;

