import { Component, createRef } from 'react'
import NavbarLeft from './NavbarLeft'
import NavbarRight from './NavbarRight'

class Navbar extends Component {
    constructor(props) {
        super(props)
        this.navbar = createRef()
    }

    componentDidMount() {
        window.addEventListener('scroll', this.changeColor)
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.changeColor)
    }

    changeColor = e => {
        window.scrollY >= 100 ? this.navbar.current.classList.add('black') : this.navbar.current.classList.remove('black');
    }

    
    render() {
        return (
            <>
                {console.log("Navbar Rendered")}
                <div ref={this.navbar} className='navbar'>
                    <div className='nav-container'>
                      <NavbarLeft/>
                      <NavbarRight/>
                    </div>
                </div>
            </>
        )
    }
}

export default Navbar