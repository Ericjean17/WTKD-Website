import Header from "../../components/Header/Header";
import "./Home.scss";
import Button from "../../components/Button/Button";
import carousel_1 from "../../assets/events/wtkd-1.jpg";
import carousel_2 from "../../assets/events/wtkd-2.jpg";
import carousel_3 from "../../assets/events/wtkd-3.jpeg";
import carousel_4 from "../../assets/events/wtkd-4.jpeg";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Footer from "../../components/Footer/Footer";

const carouselImages = [carousel_1, carousel_2, carousel_3, carousel_4, carousel_1, carousel_2, carousel_3];
const currentEvents = [
    {
        name: "Canada's Wonderland",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique culpa saepe facere corporis cumque excepturi eos ipsam inventore porro laudantium! Non maxime repudiandae sunt quaerat, itaque nostrum iusto beatae natus. Laboriosam officiis quam, ipsa aspernatur autem adipisci cumque nobis nam minima, iure atque hic iste quia cupiditate? Quidem magni, enim esse, molestias consectetur ducimus fugiat optio consequuntur voluptatibus nemo porro. Harum, eligendi reprehenderit! Ullam nam porro eveniet adipisci ipsum laboriosam hic? Quis debitis illo laborum reiciendis! Magnam non, omnis quod est laboriosam animi, officia distinctio recusandae, explicabo consectetur corporis quaerat?",
        date: "June 1st, 2025",
        time: "10:00am",
        location: "Vaughan, Ontario",
    }
];

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

function Carousel() {
    const settings = {
        className: "center",
        centerMode: true,
        centerPadding: "20%",
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1500,
        autoplaySpeed: 3750,
        cssEase: "linear",
    }

    return (
        <div className="slider-container">
            <Slider {...settings}>
                {carouselImages.map((image, i) => (
                    <div className="carousel-slide" key={i}>
                        <img className="carousel-image" src={image} alt="" />
                    </div>
                ))}
            </Slider>
        </div>
    )
};

// Have a past events folder in resources
const Events = () => {
    return (
        <div className="upcoming-events">
            <div>
                <h3 className="event-subtitle">Upcoming Events</h3>
                <p className="no-events">There are no upcoming events yet :c</p>
                <div className="events">
                    {currentEvents.map(event => (
                        <div className="event">
                            <div className="event-content">
                                <h4>Event: {event.name}</h4>
                                <p>{event.description}</p>
                                <date datetime="2025-06-01">
                                    <span>📌{event.date} at {event.time} in {event.location}</span>
                                </date>
                            </div>
                        </div>   
                    ))}
                </div>
                <Carousel />
            </div>
        </div>
    )
}

export default function Home() {
    return (
    <>
        <Header />
        <Title title="Taekwondo Club" subtitle="at Western University"/>
        <Events />
        <Footer />
    </>
    )
};