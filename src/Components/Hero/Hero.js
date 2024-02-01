import "./Hero.css"
import { ReactTyped } from "react-typed";

export default function Hero() {
    return (
        <div className="hero-main-container">
            <div className="hero-container-2">
                <p className="hero-para"> GROW WITH REACT JS </p>
                <h1> Growing with MERN </h1>
                <div className="typed-text-hero">
                    <p className="typed-para"> Hello grow with </p>
                    &nbsp; 
                    <ReactTyped
    
                        strings={['Mongo', 'Express', 'React', 'Node']}
                        typeSpeed={40}
                        backSpeed={50}
                        className="react-typed"
                        loop />
                </div>
                <br/> 
                <button className="hero-button">Get Started</button>
            </div>
        </div>

    )
}