import React from "react";
import one from "../assets/images/logos/one.svg";
import "./_loading.css";

const Loading: React.FC = () => {
  return (
    <div className="global-loading-css">
      <img width="80" height="80" src={one} alt="Loading" />
    </div>
  );
}

export default Loading;
