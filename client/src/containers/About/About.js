import React from 'react';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';

function ConnectedAbout(props) {
    return (
      <div>
        <h1>About</h1>
      </div>
    );
}

const About = connect(null, { push })(ConnectedAbout);

export default About;