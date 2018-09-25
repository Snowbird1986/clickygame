import React from "react";
import "./Wrapper.css";

const Wrapper = props => <div className="wrapper col-md-8 offset-md-2">{props.children}</div>;

export default Wrapper;
