import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css} from 'aphrodite';

const Project = props => {
  return (
    <div className={css(styles.container)}>
      <p className={css(styles.description)}>
        <a href={props.links[0].url}><span className={css(styles.title)}>{props.name}. </span></a>
        {props.description} 
      </p> 
      <div className={css(styles.imgContainer)}>
        <img className={css(styles.img)} src={props.imgUrl} alt="#"/>
        <div className={css(styles.linkContainer)}>
          <ul className={css(styles.linkList)}>
            {props.links.map((link, index) => (
              <li key={ index } className={css(styles.link)}>
                <a className={css(styles.red)} href={link.url}>{ link.text }</a>
              </li>
              ))}
          </ul>
        </div>
      </div>
  </div>
  );
};

Project.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
  links: PropTypes.array.isRequired
};

const styles = StyleSheet.create({
  container: {
    width: '90%',
    ':hover img': {
      opacity: .5
    },
    '@media (min-width: 700px)': {
      width: '75%',
    },
    '@media (min-width: 950px)': {
      width: '70%',
    },
    '@media (min-width: 1160px)': {
      width: '65%',
    },
    margin: '0 auto',
  },
  imgContainer: {
    width: '100%',
    position: 'relative',
    outline: '1px solid white',
    marginBottom: '2px'
  },
  img: {
    width: '100%',
    display: 'block',
    transition: 'all .5s ease',
  },
  title: {
    display: 'inline',
    fontSize: '1.4em',
    fontFamily: '"Montserrat", sans-serif',
    transition: 'all .5s ease',
    ':hover': {
      color: 'rgb(255,40,0)' 
    }
  },
  description: {
    fontSize: '1em',
    textAlign: 'left',
    margin: '0 0 25px 0'
  },
  red: {
    color: 'rgb(34,34,34)',
    ':hover': {
      color: 'rgb(40,0,255)'
    }
  },
  link: {
    fontSize: '1em',
    '@media (min-width: 600px)': {
      fontSize: '1.3em'
    },
    margin: '0 20px',
    display: 'inline-block',
    transition: 'all .5s ease',
    fontFamily: '"Raleway", sans-serif'
  },
  linkList: {
    margin: 0,
    textAlign: 'center',
    position: 'relative',
    top: '40%',
    width: '100%',
    transition: 'all .5s ease'
  },
  linkContainer: {
    position: 'absolute',
    width: '100%',
    top: 0,
    height: '100%',
    zIndex: 10,
    backgroundColor: 'rgba(255,255,255,.6)',
    opacity: 0,
    transition: 'all .5s ease',
    ':hover': {
      opacity: 1
    }
  }
});

export default Project;