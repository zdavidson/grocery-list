import React from "react";
import { connect } from "react-redux";
import { setVisibilityFilter } from "../store";

const Footer = (props) => {
  return (
    <div className="footer">
      <button type="button" onClick={() => props.visibilityFilter("SHOW_ALL")}>
        All
      </button>
      <button
        type="button"
        onClick={() => props.visibilityFilter("SHOW_ACTIVE")}
      >
        Active
      </button>
      <button
        type="button"
        onClick={() => props.visibilityFilter("SHOW_BOUGHT")}
      >
        Bought
      </button>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    visibilityFilter: (visibilityFilter) =>
      dispatch(setVisibilityFilter(visibilityFilter)),
  };
};

export default connect(null, mapDispatchToProps)(Footer);
