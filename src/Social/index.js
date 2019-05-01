import { FaGithub } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import React from "react";

export const Social = () => {
  return (
    <div className="icon-box">
      <IconContext.Provider
        value={{
          color: "#ECEFF1",
          size: "2.5em",
          className: "github-icon"
        }}
      >
        <FaGithub
          onClick={() => {
            window.open("https://www.github.com/seth-wat", "_blank");
          }}
        />
      </IconContext.Provider>
    </div>
  );
};
