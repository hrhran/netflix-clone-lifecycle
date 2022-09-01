import { Component } from 'react'
import Navbar from './Navbar/Navbar'
import { Outlet, Navigate } from 'react-router-dom'
import { connect } from 'react-redux'

class Layout extends Component {
    render(){
        if(!this.props.auth){
            return <Navigate to='/login' />
        }
        return (
            <>
            {console.log("Layout Rendered")}
                <Navbar />
                <div>
                    <Outlet />
                </div>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth,
    }
}

export default connect(mapStateToProps, null)(Layout)