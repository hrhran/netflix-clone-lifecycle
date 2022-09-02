import { Component, createRef } from "react";
import { Link } from "react-router-dom";
import { wordList } from "./constants";

let spans;
let typed;
let seconds = 10;

class TypingGame extends Component {
    constructor(props) {
        super(props)
        this.btn = createRef()
        this.words = createRef()
        this.timerDiv = createRef()
    }

    static getDerivedStateFromProps(nextProps, prevState ) {
        if (prevState.hscore < prevState.score) {
            return {
                hscore: prevState.score
            };
        }
        return null;
    }

    componentDidMount(){
        document.addEventListener("keydown", this.typing, false);
    }

    state = {
        hscore: 0,
        score: 0,
    }

    startGame = () => {
       this.current()
       this.random()
    }

    current = () => {
        this.setState({score: 0})
        this.btn.current.disabled = true
        let timer = setInterval(() => {
            seconds--;
            this.timerDiv.current.innerHTML = seconds
            if (seconds === 0) {
    			this.words.current.innerHTML = "";
    			this.btn.current.disabled = false;
    			clearInterval(timer);
    			seconds = 10;
    			this.timerDiv.current.innerHTML = "10";
    			this.btn.current.disabled = false;	
    		}
 		}, 1000);
    }

    random = () => {
        this.words.current.innerHTML = "";
        let random = Math.floor(Math.random() * (1943 - 0 + 1)) + 0;
        let wordArray = wordList[random].split("");
        for (let i = 0; i < wordArray.length; i++) { 
            let span = document.createElement("span");
            span.classList.add("span");
            span.innerHTML = wordArray[i];
            this.words.current.appendChild(span);
        }
        spans = document.querySelectorAll(".span");
    }

    typing = (e) =>  {
        typed = String.fromCharCode(e.which);
        for (var i = 0; i < spans.length; i++) {
            if (spans[i].innerHTML === typed) { 
                if (spans[i].classList.contains("bg")) { 
                    continue;
                } else if (((spans[i].classList.contains("bg") === false) && (spans[i-1] === undefined)) || (spans[i-1].classList.contains("bg") !== false)) { // if it dont have class, if it is not first letter or if the letter before it dont have class (this is done to avoid marking the letters who are not in order for being checked, for example if you have two "A"s so to avoid marking both of them if the first one is at the index 0 and second at index 5 for example)
                    spans[i].classList.add("bg");
                    break;
                }
            }
        }
        var checker = 0;
        for (var j = 0; j < spans.length; j++) {
            if (spans[j].className === "span bg") {
                checker++;
            }
            if (checker === spans.length) { 
                this.setState({score: this.state.score + 1})
                document.removeEventListener("keydown", this.typing, false);
                setTimeout(() =>{
                    this.words.current.className = "words"; 
                    this.random(); 
                    document.addEventListener("keydown", this.typing, false);
                }, 400);
            }

        }
    }

    render() {
        console.log(this.state)
        return (
            <div className="wrapper">
                <Link to="/games"><button className="button-tg">GO BACK</button></Link>
                <button className="button-tg" ref={this.btn} onClick={this.startGame}>START</button>
                <div className="outerWrap">
                    <div className="scoreWrap">
                        <p>High Score</p>
                        <span className="score" ref={this.hscoreDiv}>{this.state.hscore}</span>
                        <p>Score</p>
                        <span className="score" ref={this.scoreDiv}>{this.state.score}</span>
                    </div>
                    <div className="timeWrap">
                        <p>Time left</p>
                        <span className="time" ref={this.timerDiv}>10</span>
                    </div>
                </div>
                <div className="wordsWrap">
                    <p className="words" ref={this.words}></p>
                </div>
            </div>
        )
    }
}

export default TypingGame

