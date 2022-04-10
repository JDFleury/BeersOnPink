import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import ContactForm from '../../components/contactForm/contactForm.component';
import Footer from '../../components/footer/footer.component';
import Jumbotron from '../../components/jumbotron/jumbotron.component';
import PastYear from '../../components/pastyear/pastYear.component';
import './homepage.styles.scss';

const Homepage = () => {
    // Setting up AutoScroll
    const location = useLocation();
    useEffect(() => {
        if (location.hash) {
            let elem = document.getElementById(location.hash.slice(1))
            if (elem) {
                elem.scrollIntoView({ behavior: "smooth" })
            }
        } else {
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
        };
    }, [location]);
    return (
        <div className="homepageContainer container-fluid p-0">
            <div className="row">
                <div className="col-12">
                    <Jumbotron />
                </div>
            </div>
            <div className="row homepageInfo">
                <div className="col-12 my-3 d-flex justify-content-center">
                    <h2>ABOUT</h2>
                </div>
                <div className="col-12 col-md-4 infoBox">
                    <h4>Where does the money go?</h4>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim, facilis officiis dolore vitae asperiores porro suscipit cumque reprehenderit assumenda architecto natus corporis vero amet numquam ipsam, libero perferendis, optio cupiditate!</p>
                </div>
                <div className="col-12 col-md-4 infoBox">
                    <h4>How it started</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat tenetur eos praesentium dolorum architecto, soluta quibusdam quae voluptas eaque iure, aliquam non officia error quam ipsum ab libero sed sunt. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad explicabo deserunt quia praesentium fuga, magni sit distinctio molestiae odio a corporis repudiandae eaque alias accusantium consectetur, voluptates vero itaque dignissimos.</p>
                </div>
                <div className="col-12 col-md-4 infoBox">
                    <h4>How we raise money</h4>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel nobis expedita odio, blanditiis tempora cupiditate quae ipsum ipsa eaque officia reiciendis laborum. Perspiciatis porro sapiente fugiat distinctio animi, debitis praesentium.</p>
                </div>
                <div className="col-3 me-auto ps-3">
                    <Link className='infoLink' to={'/'}>More information</Link>
                </div>
            </div>
            <div className="row auctionContainer">
                <div className="col-12 mb-auto">
                    <h2>AUCTION</h2>
                </div>
                <div className="col-12 mb-auto">
                    <h3>No Current Auction</h3>
                    <h4>More information coming soon!</h4>
                </div>
            </div>
            <div className="row">
                <div className="col-12 pastYearsContainer">
                    <h2>PAST YEARS</h2>
                </div>
                <div className="col-12 pb-4 px-4 pt-2">
                    <PastYear />
                </div>
            </div>
            <div id="contact" className="row contactContainer">
                <div className="col-12">
                    <ContactForm />
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <Footer />
                </div>
            </div>


        </div>
    );
}

export default Homepage;