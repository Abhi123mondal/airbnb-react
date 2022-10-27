
import ball from '../pictures/ball.jpg';
import water from '../pictures/water.jpg';
import yellow from '../pictures/yellow.jpg';
import '../styles/midsection.css';
import Chip from'./chips';
import Slide from './Slider';
 

function midsection(){
    return(
        <>
        <div className='container'>
            <div className='slider'>
            <h1>When are you travelling?</h1> 
            <Slide/>
            </div>
            <div className='wrapper'>
                <div className='media'>
                    <img src={ball} alt="" width="532px"/>
                    <div className="first-left">
                    <p>Collection</p>
                    <h4>Most popular around <br /> the world</h4>
                    </div>
                    <button className="btn-first">Show all</button>
                </div>

                <div className='media'>
                    <img src={water} alt="" width="532px" />
                    <div className="second-left">
                    <p>Collection</p>
                    <h4>Great for team <br /> building</h4>
                    </div>
                    <button className="btn-second">Show all</button>
                </div>

                <div className='media'>
                    <img src={yellow} alt=""  width="535px"/>
                    <div className="third-left">
                    <p>Collection</p>
                    <h4>Fun for the <br /> family</h4>
                    </div>
                    <button className="btn-third">Show all</button>
                </div>
            
            </div>
            <Chip/>

        </div>

        </>


    )
}

export default midsection;