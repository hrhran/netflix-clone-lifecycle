import { PureComponent } from 'react'
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
                            <li>Home</li>
                            <li>TV Shows</li>
                            <li>Movies</li>
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