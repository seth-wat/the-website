import Typist from "react-typist";
import React from "react";

export const Intro = props => {
  return (
    <Typist
      onTypingDone={() => {
        setTimeout(() => {
          props.setTypingStatus(false);
        }, 200);
      }}
    >
      <p className="intro-paragraph">
        Being a developer is about more than being a coder.{" "}
        <Typist.Delay ms={500} /> It’s about being a unique problem solver,{" "}
        <Typist.Delay ms={500} /> an excellent communicator,{" "}
        <Typist.Delay ms={500} />
        and a translator between the complexities of software engineering and
        the user experience.
        <br />
        <br />
        <Typist.Delay ms={500} />
        Blending these traits into highly stable, <Typist.Delay ms={500} />
        deployable, <Typist.Delay ms={500} />
        and maintainable software is what it takes,
        <Typist.Delay ms={500} /> and what I enjoy.
      </p>
    </Typist>
  );
};
