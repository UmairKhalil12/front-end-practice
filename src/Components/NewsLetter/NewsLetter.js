import './NewsLetter.css'

export default function NewsLetter() {
    return (

        <div className='main-container-newsletter' id='contact'>
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
                <div>
                    <p>We care about prevention of your data</p>
                </div>
            </div>

        </div>

    );

}