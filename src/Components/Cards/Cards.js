import './Cards.css'
import single from '../../assets/single.png'
import double from '../../assets/double.png'
import triple from '../../assets/triple.png'

export default function Cards() {
    return (
        <div className='main-cards-container'>
        <div className='main-2'>
        </div>
            <div className="card-container">
                <div className='card-inside-div'>
                    <div>
                        <img src={single} alt='single' className='card-image' />
                        <h2>Single User</h2>
                        <h3>$149</h3>
                        <p>1 Granted User</p>
                        <p>500GB storage</p>
                    </div>
                </div>
                <button className='cards-btn'>Start Trial</button>

            </div>

            &nbsp; &nbsp; &nbsp;

            <div className="card-container">
                <div className='card-inside-div'>
                    <div>
                        <img src={double} alt='double' className='card-image' />
                        <h2>Double User</h2>
                        <h3>$220</h3>
                        <p>2 Granted User</p>
                        <p>1TB storage</p>
                    </div>
                </div>
                <button className='cards-btn'>Start Trial</button>
            </div>

            &nbsp;&nbsp;&nbsp;

            <div className="card-container">
                <div className='card-inside-div'>
                    <div>
                        <img src={triple} alt='triple' className='card-image' />
                        <h2>Triple User</h2>
                        <h3>$350</h3>
                        <p>3 Granted User</p>
                        <p>1.5TB storage</p>
                    </div>
                </div>
                <button className='cards-btn'>Start Trial</button>
            </div>

        </div>
    )

}