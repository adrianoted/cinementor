import React from 'react';
import Wrapper from 'styles/ui/ToggleSwitchButton';
import { Link } from 'react-scroll';

const ToggleSwitchButton = (props) => {

  const sliderClasses = ["slider", (props.isOn) ? "slider_is-on" : "slider_is-off"].join(" ");
  const circleClasses = ["circle", (props.isOn) ? "circle_position-right" : "circle_position-left"].join(" ");

  return (
    <Link className="hide-768" to={props.genre} smooth={true} offset={-150} delay={500} duration={500} onClick={props.handleToggle}>
      <Wrapper>
        <div className="label">{props.isOn ? "unlock" : "scroll"}</div>

        <div className="toggle-switch">
          <div className={sliderClasses}></div>
          <div className={circleClasses}></div>
        </div>
      </Wrapper>
    </ Link>
  );

}

export default ToggleSwitchButton