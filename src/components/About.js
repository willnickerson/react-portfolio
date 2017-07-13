import React from 'react';
import DownButton from './DownButton';

export default function About(props) {
  return (
    <div className="About Page" id="About">
      <p>Hi! My name is Will and I am a full-stack JavaScript developer living in Portland, OR.</p>
      <DownButton text="See some of my work" anchor="#Projects"/>
    </div>
  );
}