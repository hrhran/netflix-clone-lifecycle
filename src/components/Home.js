import { Component, createRef } from 'react'
import TitleCard from './TitleCard';
import CoverLogo from'../media/spiderman-logo.png';
import CoverBanner from'../media/spiderman.png';
import CoverTeaser from '../media/cover-teaser.mp4'
import {ReactComponent as PlayIcon} from '../media/play.svg'
import {ReactComponent as InfoIcon} from '../media/info.svg'
import { fetchTitles } from '../redux/actions/titleActions';
import { connect } from 'react-redux';


class Home extends Component {
  constructor(props) {
    super(props)
    this.video = createRef()
    this.image = createRef()
  }

  componentDidMount() {
     this.props.fetchTitles()
  } 


  videoEndHandler = () => {
    this.video.current.style.display = 'none';
    this.image.current.style.display = 'inline';
  }

  render() {
    return (
      <div className='home'>
        {console.log("Home Rendered")}
        <div className='cover'>
          <img src={CoverBanner} ref={this.image} className='cover-banner image' alt='cover-banner' />
          <video ref={this.video} autoPlay muted onEnded={this.videoEndHandler} className='cover-banner video'>
              <source src={CoverTeaser} type="video/mp4" />
          </video>
          <div className='cover-items'>
            <img src={CoverLogo} className='cover-logo' alt='cover-logo' />
            <div className='cover-info'>
              <p>Peter Parker seeks Doctor Strange's help to make people forget about Spiderman's identity. However, when the spell he casts gets corrupted, several unwanted guests enter their universe.</p>
            </div>
            <div className='cover-btn'>
              <button className='play-btn'><PlayIcon /> Play</button>
              <button className='info-btn'><InfoIcon /> More Info</button>
            </div>
          </div>
        </div>
        <div className='container'>
          <div className='trending'>
            <div className='home-title'>Trending Movies</div>
            <div className='titles'>
              {this.props.titles?this.props.titles.map(title => <TitleCard key={title.id} data={title} />):null}
            </div>
          </div>
          <br></br><br></br><br></br><br></br>
        </div>
  
  
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    titles: state.titles.results,
  }
}

export default connect(mapStateToProps, { fetchTitles })(Home)