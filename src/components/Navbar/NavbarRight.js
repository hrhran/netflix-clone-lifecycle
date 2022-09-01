import { PureComponent } from 'react'
import { ReactComponent as SearchIcon } from '../../media/search.svg'
import { ReactComponent as NotifyIcon } from '../../media/notify.svg'

import ProfileIcon from '../../media/pfp.png';
import NavbarMenu from './NavbarMenu'

class NavbarRight extends PureComponent {
    
    state = {
        view: false,
    }

    toggleView = () => {
        this.setState({ view: !this.state.view })
    }

    render() {
        return (
            <>
                <div className='nav-right'>
                     <ul>
                        <li><SearchIcon /></li>
                        <li>Children</li>
                        <li><NotifyIcon /></li>
                        <li onClick={this.toggleView} ><div className='profile-icon'><img src={ProfileIcon} alt='pfp' /></div></li>
                    </ul>
                    {this.state.view && <NavbarMenu />}
                </div>
            </>  
        )
    }
}

export default NavbarRight