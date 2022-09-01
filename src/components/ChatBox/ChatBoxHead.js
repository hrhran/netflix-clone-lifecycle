import { Component } from 'react'

class ChatBoxHead extends Component {

    constructor(props){
        super(props)
        console.log(props)
    }
    
    shouldComponentUpdate() {
        return false
    }
    
    render() {
        return (
            <>
                 <div className='chatbox-heading' onClick={this.props.onclick}>
                    Chat Support
                </div>
            </>
        )
    }
}

export default ChatBoxHead