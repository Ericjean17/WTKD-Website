import Header from "../../components/Header/Header";
import React from 'react';
import logo from "../../assets/wtkd-logo.jpg";
import "./Home.scss";
import Button from "../../components/Button/Button";



const Title = ({ title, subtitle }) => {
    return (
        <div className="title-container">
            <div className="title-text">
                <h1>{title}</h1>
                <h2>{subtitle}</h2>
            </div>
            <Button page="/about" name="Learn more"/>
        </div>
    )
};

// Have a past events folder in resources
const Events = ({ title, description }) => {
    return (
        <>
            <div>
                <h3>Upcoming Events</h3>
                <p>No upcoming events yet :c</p>
            </div>
            <div>
                <h3>Recent event</h3>
                <p>Korea Day Demo Performance</p>
            </div>
        </>
    )
}

export default function Home() {
    return (
    <>
        <Header />
        <Title title="Taekwondo Club" subtitle="at Western University"/>
    </>
    )
};