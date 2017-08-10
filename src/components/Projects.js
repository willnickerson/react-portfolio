import React, { Component } from 'react';
import Slider from 'react-slick';
import DownButton from './DownButton';
import { StyleSheet, css } from 'aphrodite';

class Projects extends Component {
  render() {
    const settings = {
      arrows: true,
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div id="Projects" className={css(styles.sliderPage)}>
        <Slider {...settings}>
          <div>
            {/* eventually but sub slider in here */}
              <p className={css(styles.description)}>
                <span className={css(styles.title)}>Portamento. </span>
                Social media meets the synthesizer. Share and discover sounds the you make on this MEAN stack application. 
                <ul className={css(styles.linkList)}>
                  <li><a className={css(styles.link)} href="https://portamento.herokuapp.com/#!/"> live site </a></li>
                  <li><a className={css(styles.link)} href=""> repos</a></li>
                </ul>
                <img className="project-image" src="http://res.cloudinary.com/lejipni8p/image/upload/c_crop,g_north,h_1310,w_2560/v1490814219/Screen_Shot_2017-03-24_at_5.03.32_PM_gsp3re.png" alt="#"/>
              </p> 
          </div>
          <div>
            <p className={css(styles.description)}>
              <span className={css(styles.title)}>Earth House. </span>
              An ecommerceand content management solution built for a local cold-pressed juice company using the MEAN stack.
              <ul className={css(styles.linkList)}>
                <li><a className={css(styles.link)} href="https://portamento.herokuapp.com/#!/"> live site</a></li>
                <li><a className={css(styles.link)} href="">repos</a></li>
              </ul>
              <img className="project-image" src="http://res.cloudinary.com/lejipni8p/image/upload/c_crop,g_north,h_1310,w_2560/v1490814197/Screen_Shot_2017-03-24_at_5.05.17_PM_gunpnq.png" alt="#"/>
            </p>
          </div>
          <div>
            <p className={css(styles.description)}>
              <span className={css(styles.title)}>React Juicer. </span>
              Make delicious juice recipices with my first full-stack React app!
              <ul className={css(styles.linkList)}>
                <li><a className={css(styles.link)} href="https://portamento.herokuapp.com/#!/">live site</a></li>
                <li><a className={css(styles.link)} href="">repos</a></li>
              </ul>
              <img className="project-image" src="http://res.cloudinary.com/lejipni8p/image/upload/c_crop,g_north,h_1310,w_2560/v1499893316/Screen_Shot_2017-07-12_at_2.00.57_PM_x63cpk.png" alt="#"/>
            </p>
          </div>
        </Slider>
        <DownButton text="Contact" anchor="#Contact"/>
      </div>
    );
  }
}

const styles = StyleSheet.create({
  sliderPage: {
    width: '100%',
    height: '75vh',
    paddingTop: '25vh',
    position: 'relative',
    '@media (min-width: 360px)': {
      height: '74vh',
      paddingTop: '26vh'
    },
    '@media (min-width: 600px)': {
      height: '85vh',
      paddingTop: '15vh'
    }
  },
  title: {
    display: 'inline',
    fontSize: '1.3em',
    fontFamily: '"Metal Lord", sans-serif'
  },
  description: {
    fontSize: '.9em',
    textAlign: 'left',
    width: '85%',
    margin: '0 auto',
    height: '50vh',
    overflow: '-moz-scrollbars-vertical', 
    overflowY: 'scroll',
    '@media (min-width: 600px)': {
      height: '45vh'
    },
    '@media (min-width: 850px)': {
      height: 'auto',
      width: '75%'
    }
  },
  logoItem: {
    float: 'left',
    width: '20%'
  },
  logo: {
    width: '100%'
  },
  link: {
    color: 'rgb(255,40,0)',
    fontSize: '1em',
    marginRight: '15px',
    float: 'left',
    fontFamily: '"Raleway", sans-serif'
  },
  linkList: {
    margin: 0
  }
});

export default Projects;