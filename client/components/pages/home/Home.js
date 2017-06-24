import React from 'react';
import css from './Home.css'
import { connect } from 'react-redux';
import AboutSection from './sections/About'
import EducationSection from './sections/Eduction'
import WelcomeSection from './sections/Welcome'
import ContactSection from './sections/Contact'
import RealityBombProject from './sections/Projects/RealityBomb'
import FourSquaresProject from './sections/Projects/FourSquare'


import Scroll from 'react-scroll' ;
import Waypoint from 'react-waypoint';

var Element    = Scroll.Element;

var scrollSpy  = Scroll.scrollSpy;


@connect((store) => {
  return {
    scrollPosition: store.navBar.scrollPosition,
  };
})
class Home extends React.Component {

  constructor(){
    super();
    this.state = { width: '0', height: '0' };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    this.onEnterSection = this.onEnterSection.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);

    scrollSpy.update();

  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);

  }


  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }

  onEnterSection(){
    console.log("new section")
  }



  render() {
    // DONT ALLOW PAGE TO RESZIE AFTER LOADING !!!!!!!

    var numOfPages = 3
    var color1 = this.props.scrollPosition * 30/800
    const containerStyle = {
      height: this.state.height - 50,
      overflow: 'hidden',
    };


    return (
      <div class="home">

        <Element name="Home">
          <div class="page p1" style={containerStyle}>
            <WelcomeSection/>
          </div>
        </Element>

        <Element name="About">
          <div class="page p2 flex flex-justify-centre">
            <AboutSection/>
          </div>

          <div class="page p3 flex flex-justify-centre">
            <EducationSection/>
          </div>
        </Element>



        {/*<Waypoint onLeave={this.onEnterSection}/>*/}

        <Element name="Projects">
          <div id="about-us" class="page p3 stretch flex flex-column flex-align-items-centre flex-justify-centre">
            <RealityBombProject/>
            <FourSquaresProject/>
            <RealityBombProject/>
          </div>
        </Element>

        <Element name="Contact">
          <div class="page" style={containerStyle}>
            <ContactSection/>
          </div>
        </Element>



      </div>
    );
  }
}

export default Home;
