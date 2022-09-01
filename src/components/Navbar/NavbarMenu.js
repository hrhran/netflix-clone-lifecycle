import { Component } from 'react'


class NavbarMenu extends Component {
    constructor(props) {
        super(props)
    }


    render(){
        return(
            <>
            <div className="nav-menu-card">
                <ul className="nav-menu-items">
                    <li>Manage Profile</li>
                    <li>Account</li>
                    <li>Help Centre</li>
                </ul>
            </div>
            </>
        )
    }

}

export default NavbarMenu