import React, { Component } from 'react'
import { connect } from 'react-redux'

import ChatBoxHead from './ChatBoxHead'
import ChatBoxInput from './ChatBoxInput'

import { pushAction } from '../../redux/actions/chatActions'

class ChatBox extends Component {
    constructor(props) {
        super(props)
        console.log("chatbox props", this.props)
        this.chatRef = React.createRef();

    }

    state = {
        showChat: false,
    }

    componentDidMount() {
        console.log('ok', this.chatRef)
    }

    handleChatClick = e => {
        console.log('look', this.chatRef)
        this.setState({ showChat: !this.state.showChat })
        console.log(this.state)
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        if (prevProps.messages.length < this.props.messages.length)
            return this.chatRef.current.scrollHeight - this.chatRef.current.scrollTop;
        return null;
    }

    componentDidUpdate(prevProps, prevState, snap) {
        if (snap) 
            this.chatRef.current.scrollTop = this.chatRef.current.scrollHeight - snap
    }

    submitHandler = (e) => {
        e.preventDefault();
        console.log(this.props)
        this.props.pushAction(e.target[0].value)
        e.target[0].value = ""
    }

    render() {
        let count = 0
        return (
            <div className='chatbox'>
                <ChatBoxHead onclick={this.handleChatClick} />

                {this.state.showChat &&
                    <div>
                        <div className='chatbox-bg' ref={this.chatRef}>
                            {this.props.messages.map(el => (
                                <p className='chat-message' key={count++}>{el}</p>
                            ))}
                        </div>
                        <ChatBoxInput />
                    </div>
                }



            </div>
        )
    }
}


const mapStateToProps = state => {
    console.log(state)
    return {
        messages: state.chatbot.userInput,
    }
}

export default connect(mapStateToProps, { pushAction })(ChatBox)