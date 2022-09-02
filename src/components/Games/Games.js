import { Component } from "react";
import TitleCard from '../TitleCard';
import CoverBanner from '../../media/games-bg.webp';
import TypingGame from "./TypingGame";
import { Modal } from "../Modal";

class Games extends Component {
    state = {
        show: false,
    }

    showModal = () => {
        console.log("hahaha")
        this.setState({ show: true });
    };

    hideModal = () => {
        this.setState({ show: false });
    };

    render() {
        const title = {
            id: 1,
            title: 'Typing Game',
            backdrop_path: 'https://i.ytimg.com/vi/HvMrOoUeqO0/maxresdefault.jpg'
        }
        return (
            <>
                <div className='home'>
                    {console.log("Home Rendered")}
                    <div className='cover'>
                        <img src={CoverBanner} className='cover-banner' alt='cover-banner' />
                    </div>
                    <div className='container'>
                        <div className='trending'>
                            <div className='home-title'>Trending Games</div>
                            <div className='titles fl-left'>
                                <TitleCard key={title.id} data={title} showModal={this.showModal} />
                            </div>
                        </div>
                        <br></br>
                    </div>
                    <Modal show={this.state.show} handleClose={this.hideModal}>
                       <TypingGame hideModal={this.hideModal}  />
                    </Modal>
                    
                </div>
            </>
        )
    }


}


export default Games