import React, { Component } from 'react';
import Slider from 'react-slick';
import DownButton from './DownButton';
import { StyleSheet, css } from 'aphrodite';
import angularLogo from '../angular-icon.svg';
import mongoLogo from '../MongoDB_Logo.png';
import nodeLogo from '../Node.js-logo.svg';
import expressLogo from '../express-logo.svg';

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
                Social media meets the synthesizer. Share and discover sounds that you and your friends make on this MEAN stack application.
                <ul className={css(styles.linkList)}>
                  <li><a className={css(styles.link)} href="https://portamento.herokuapp.com/#!/">live site</a></li>
                  <li><a className={css(styles.link)} href="">repo for server</a></li>
                  <li><a className={css(styles.link)} href="">repo for app</a></li>
                </ul>
              </p> 
              <img className="project-image" src="http://res.cloudinary.com/lejipni8p/image/upload/c_crop,g_north,h_1310,w_2560/v1490814219/Screen_Shot_2017-03-24_at_5.03.32_PM_gsp3re.png" alt="#"/>
          </div>
          <div>
            <p className={css(styles.description)}>
              <span className={css(styles.title)}>Earth House. </span>
              An ecommerce site and content management system built for a local cold-pressed juice company using the MEAN stack.
              <ul className={css(styles.linkList)}>
                <li><a className={css(styles.link)} href="https://portamento.herokuapp.com/#!/">live site</a></li>
                <li><a className={css(styles.link)} href="">repo for server</a></li>
                <li><a className={css(styles.link)} href="">repo for app</a></li>
              </ul>
            </p>
            <img className="project-image" src="http://res.cloudinary.com/lejipni8p/image/upload/c_crop,g_north,h_1310,w_2560/v1490814197/Screen_Shot_2017-03-24_at_5.05.17_PM_gunpnq.png" alt="#"/>
          </div>
          <div>
            <p className={css(styles.description)}>
              <span className={css(styles.title)}>React Juicer. </span>
              Make delicious juice recipices with my first full-stack React app!
              <ul className={css(styles.linkList)}>
                <li><a className={css(styles.link)} href="https://portamento.herokuapp.com/#!/">live site</a></li>
                <li><a className={css(styles.link)} href="">repo for server</a></li>
                <li><a className={css(styles.link)} href="">repo for app</a></li>
              </ul>
            </p>
            <img className="project-image" src="http://res.cloudinary.com/lejipni8p/image/upload/c_crop,g_north,h_1310,w_2560/v1499893316/Screen_Shot_2017-07-12_at_2.00.57_PM_x63cpk.png" alt="#"/>
          </div>
        </Slider>
        <DownButton text="Contact Me!" anchor="#Contact"/>
      </div>
    );
  }
}

const styles = StyleSheet.create({
  sliderPage: {
    width: '100%',
    height: '71vh',
    paddingTop: '29vh',
    position: 'relative',
    '@media (min-width: 360px)': {
      height: '74vh',
      paddingTop: '26vh'
    }
  },
  title: {
    display: 'inline',
    fontSize: '1.5em',
    fontWeight: 'bold',
    fontFamily: '"Montserrat", sans-serif'
  },
  description: {
    fontSize: '1em',
    textAlign: 'left',
    width: '85%',
    margin: '0 auto 10px auto',
    height: '22vh',
    overflow: 'scroll'
  },
  logoItem: {
    float: 'left',
    width: '20%'
  },
  logo: {
    width: '100%'
  },
  link: {
    color: 'rgb(255,150,150)',
    fontSize: '1em',
    marginBottom: '20px',
    textDecoration: 'underline',
    fontFamily: '"Montserrat", sans-serif'
  },
  linkList: {
    marginBottom: '70px',
  }
});

export default Projects;