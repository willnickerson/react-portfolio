import React from 'react';

export default function Contact(props) {
  return (
    <div>
      <p>Want to reach out?</p>
      <a href="mailto:willnickersonpdx@gmail.com" className="EmailButton">
        Send me an Email
        <span> &#8594;</span>
      </a>
    </div>
  );
}

