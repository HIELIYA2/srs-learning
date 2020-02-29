import React from 'react';
import './home.scss';
import home1 from '../../assets/images/home1.jpg';
import home2 from '../../assets/images/home2.jpg';
import home3 from '../../assets/images/home3.jpg';
import desk from '../../assets/images/desk.jpg';

function Home() {
    return (
        <div>
            <div className="home">
                <div className="home-txt-1">
                    <h3 className="home-h1"> Improve </h3>
                    <h3 className="home-h2"> your </h3>
                    <div className="home-memory">
                        <h3 className="home-h3">memory</h3>
                        <h3 className="home-point">.</h3>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;

{
    /* <img className="home-img-1" src={home1} alt="home" />
<div className="home-txt-1">
    <h3 className="home-h1"> Improve </h3>
    <h3 className="home-h2"> your </h3>
    <div className="home-memory">
        <h3 className="home-h3">memory</h3>
        <h3 className="home-point">.</h3>
    </div>
</div>
<img className="home-img-2" src={home2} alt="home" />
<h3 className="home-txt-2">
    decades of cognitive science research to make studying as efficient as humanly possible.
</h3>
<img className="home-img-3" src={home3} alt="home" />
<h3 className="home-txt-3">Improve your grades by studying with flashcards</h3> */
}
