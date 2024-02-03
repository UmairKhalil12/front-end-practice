import "./Analytics.css"
import laptop from '../../assets/laptop.jpg'


export default function Analytics({ MobileNavStatus , windowWidth}) {
    const containerClassName = MobileNavStatus && windowWidth < 768 ? 'analytics-main-open': 'analytics-main'


    return (
        <div className='analytics-main'>

            <div className="analytics-with-image">
                <div>
                    <img src={laptop} className="laptop-image" alt="laptop" />
                </div>
            </div>

            <div className="analytics-second">

                <div className="analytics-second-2">
                    <p className="analytics-para" >MERN DASHBOARD</p>
                    <h1>Mastering Mern </h1>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                        Quia voluptatibus rerum accusantium eius placeat,
                        ad porro perferendis illo voluptatem sint temporibus,
                        vitae, sit nemo aliquid doloribus impedit assumenda? Repellendus, amet?</p>


                    <div className="analytics-btn-div">
                        <button className="analytics-btn"> Get Started </button>
                    </div>

                </div>

            </div>
        </div>
    )
}