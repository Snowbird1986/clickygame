import React from "react";
import "./Wrapper.css";

const Wrapper = props => <div className="wrapper col-md-10 offset-md-1">{props.children}</div>;

export default Wrapper;
