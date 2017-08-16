import React, { Component } from 'react';
import Slider from 'react-slick';
import DownButton from './DownButton';
import Project from './Project';
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

    const projects = [
      {
        name: 'react-rain-animation',
        description: 'A stateful rain animation component for your react project(no additional dependencies and availible on npm).',
        imgUrl: 'http://res.cloudinary.com/lejipni8p/image/upload/c_crop,g_north,h_1310,w_2560/v1502837965/Screen_Shot_2017-08-15_at_3.58.23_PM_visdgs.png',
        links: [
          { text: 'demo', url: 'https://willnickerson.github.io/react-rain-demo/' },
          { text: 'npm', url: 'https://www.npmjs.com/package/react-rain-animation'}, 
          {text: 'github', url: 'https://github.com/willnickerson/react-rain-animation'}
        ]
      },
      {
        name: 'Portamento',
        description: 'Social media meets the synthesizer. Share and discover sounds the you make on this MEAN stack and Tone.js application.',
        imgUrl: 'http://res.cloudinary.com/lejipni8p/image/upload/c_crop,g_north,h_1310,w_2560/v1490814219/Screen_Shot_2017-03-24_at_5.03.32_PM_gsp3re.png',
        links: [
          { text: 'live-site', url: 'https://portamento.herokuapp.com' },
          { text: 'repo(app)', url: 'https://github.com/willnickerson/portamento-app'}, 
          {text: 'repo(server)', url: 'https://github.com/willnickerson/portamento-server'}
        ] 
      },
      {
        name: 'Earth House',
        description: 'An ecommerce and content management solution built for a local cold-pressed juice company using the MEAN stack.',
        imgUrl: 'http://res.cloudinary.com/lejipni8p/image/upload/c_crop,g_north,h_1310,w_2560/v1490814197/Screen_Shot_2017-03-24_at_5.05.17_PM_gunpnq.png',
        links: [
          { text: 'live-site', url: 'https://earth-house.herokuapp.com' },
          { text: 'repo(app)', url: 'https://github.com/willnickerson/earth-house-app'}, 
          {text: 'repo(server)', url: 'https://github.com/willnickerson/earth-house-server'}
        ] 
      },
      {
        name: 'React Juicer',
        description: 'Make delicious juice recipices with my first full-stack React applicaiton!',
        imgUrl: 'http://res.cloudinary.com/lejipni8p/image/upload/c_crop,g_north,h_1310,w_2560/v1499893316/Screen_Shot_2017-07-12_at_2.00.57_PM_x63cpk.png',
        links: [
          { text: 'repo(app)', url: 'https://github.com/willnickerson/react-juicer'}, 
          {text: 'repo(server)', url: 'https://github.com/willnickerson/react-juicer-server'}
        ]
      }
    ];

    return (
      <div id="Projects" className={css(styles.sliderPage)}>
        <Slider {...settings}>
          { projects.map((project, index) => (
            <div key={index} data-index={index}>
              <Project
                name={project.name}
                description={project.description}
                imgUrl={project.imgUrl}
                links={project.links}
              />
            </div>
          ))}
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
    },
  }
});

export default Projects;