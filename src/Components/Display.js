import React from "react";

const Display = (props) => {
  const { value } = props;
  return (
    <div id="display" className="flex">
      <input
        type="text"
        tabIndex="-1"
        value={value}
        onChange={(event) => this.setState(event.target.value)}
      />
    </div>
  );
};

export default Display;
