import './NewsLetter.css'

export default function NewsLetter({ MobileNavStatus , windowWidth}) {

    const containerClassName = MobileNavStatus && windowWidth < 768 ? 'main-container-newsletter-open': 'main-container-newsletter'
    return (

        <div className='main-container-newsletter'>
            <div className='text-container'>
                <h2>Want tips and tricks for optimizing your website ?</h2>
                <p>Signup to our newsletter</p>
            </div>

            <div className='input-container'>
                <div className='input-container-2'>
                    <div className='email'>
                        <input placeholder='Enter your email' className='input-field' />
                    </div>
                    <div className='btn'>
                        <button className='notify-btn'>Notify Me</button>
                    </div>
                </div>
                <p>We care about prevention of your data</p>
            </div>

        </div>

    );

}