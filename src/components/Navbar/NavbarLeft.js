import { PureComponent } from 'react'
import { Link } from 'react-router-dom'
import { ReactComponent as NavbarLogo } from '../../media/logo.svg'

class NavbarLeft extends PureComponent {

    render() {
        return (
            <>
            {console.log("NavLeft Rendered")}
              <div className='nav-left'>
                    <div className='nav-logo'>
                        <NavbarLogo />
                    </div>
                    <div className='nav-left-menu'>
                        <ul>
                            <li><Link className="text-link" to="/">Home</Link></li>
                            <li>TV Shows</li>
                            <li><Link className="text-link" to="/games">Games</Link></li>
                            <li>New & Popular</li>
                            <li>My List</li>
                        </ul>
                    </div>
                </div>
            </>  
        )
    }
}

export default NavbarLeft