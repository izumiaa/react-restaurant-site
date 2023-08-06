import React from 'react';
import './Button.css';
import { Link as ScrollLink } from 'react-scroll';

const STYLES = ['btn--primary', 'btn--outline', 'btn--test'];
const SIZES = ['btn--medium', 'btn--large'];

export const Button = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize,
  scrollToSection
}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  return (
    <ScrollLink
      to={scrollToSection}
      className='btn-mobile'
      smooth={true}
      duration={500}
      offset={-70} // Scroll to the top of the container
    >
      <button
        className={`btn ${checkButtonStyle} ${checkButtonSize}`}
        onClick={onClick}
        type={type}
      >
        {children}
      </button>
    </ScrollLink>
  );
};
