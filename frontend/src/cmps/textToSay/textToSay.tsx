import React, { Component } from 'react';
import './textToSay.css';

interface State {}
interface Props {
    text: string;
}

class TextToSay extends Component<Props, State> {
    props = {
        text: '',
    };

    sayIt = (e: React.SyntheticEvent) => {
        let msg = new SpeechSynthesisUtterance(this.props.text);
        window.speechSynthesis.speak(msg);
    };

    render() {
        return (
            <div className="tts-button">
                <a href="#" className="play-button" onClick={this.sayIt}>
                    ►
                </a>
                <audio src="" hidden />
            </div>
        );
    }
}

export default TextToSay;
