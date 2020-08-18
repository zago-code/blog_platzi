import React from 'react';
import '../../css/Fatal.css';

const fatal = props => (
  <div className='fondo'>
    <h1>404 Error Page</h1>
    <p className='zoom-area'>
      <b>FAIL!:</b> {' '}{props.mensaje.toUpperCase()}
    </p>
    <section className='error-container'>
      <span>4</span>
      <span>
        <span className='screen-reader-text'>0</span>
      </span>
      <span>4</span>
    </section>
    <div className='link-container'>
      <a href='https://www.silocreativo.com/en/creative-examples-404-error-css/' className='more-link'>
        Visit the original article
      </a>
    </div>
  </div>
);

export default fatal;
