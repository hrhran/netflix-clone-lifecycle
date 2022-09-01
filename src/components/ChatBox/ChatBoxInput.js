import { Component } from 'react'
import { pushAction } from '../../redux/actions/chatActions'
import { connect } from 'react-redux'

class ChatBoxInput extends Component {

    submitHandler = (e) => {
        e.preventDefault();
        console.log(this.props)
        this.props.pushAction(e.target[0].value)
        e.target[0].value = ""
    }

    // shouldComponentUpdate(){
    //     return false
    // }

    render() {
        return (
            <>
                <div className='chatbox_inputform'>
                    <form className='chatbox_inputform__form' onSubmit={this.submitHandler}>
                        <input type="text" placeholder='Type something...' />
                        <input type='submit' value='Send'></input>
                    </form>
                </div>
            </>
        )
    }
}

export default connect(null, { pushAction })(ChatBoxInput)