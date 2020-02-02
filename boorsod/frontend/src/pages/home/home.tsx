import React from 'react';
import './home.scss';
import home from '../../assets/images/home-visual.jpg';

function Home() {
    return (
        <div>
            <div className="head">
                <img className="home-visual" src={home} alt="home" />
                <div className="home-h">
                    <h3 className="home-h1"> Improve </h3>
                    <h3 className="home-h2"> your </h3>
                    <div className="home-memory">
                        <h3 className="home-h3">memory</h3>
                        <h3 className="home-point">.</h3>
                    </div>
                </div>
            </div>
            {/* <h3>Improve your grades by studying with flashcards</h3>
            <h3>
                Brainscape's online flashcards app applies decades of cognitive science research to make studying as
                efficient as humanly possible.
            </h3>
            <h3>You can create new cards by pressing + button</h3>

            <h3>Learn Faster</h3>
            <h3>with Spaced Repetition</h3> */}
        </div>
    );
}

export default Home;
