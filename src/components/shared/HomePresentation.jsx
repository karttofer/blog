import React, { useState } from "react";
import Marquee from "react-fast-marquee";

const HomePresentation = () => {
  const [showCode, setShowCode] = useState(true);
  return (
    <div className="home-presentation">
      {showCode ? (
        <p
          className="home-presentation-description"
          onClick={() => setShowCode(!showCode)}
        >
          <span className="home-presentation-tag">&lt;h1&gt;</span>
          <Marquee pauseOnHover={true} direction="left">
            hello!&lt;span&gt;{"{name}"}&lt;/span&gt;, a frontend developer who
          </Marquee>
          <Marquee pauseOnHover={true} direction="right">
            &lt;span&gt;loves&lt;/span&gt; design and &lt;b&gt;Pixel
            Art&lt;/b&gt;.
          </Marquee>
          <Marquee pauseOnHover={true} direction="left">
            Oh, I almost forgot, I also write blogs.
            Anyway,&lt;span&gt;welcome!&lt;/span&gt;
          </Marquee>
          <span className="home-presentation-tag">&lt;/h1&gt;</span>
        </p>
      ) : (
        <>
          <p
            className="home-presentation-description"
            onClick={() => setShowCode(!showCode)}
          >
            hello! <b>I'm Jhornan Colina</b>, a frontend developer who loves
            design and <b>Pixel Art</b>. Oh, I almost forgot, I also write
            blogs. Anyway, <b>welcome!</b>
          </p>
        </>
      )}
      <div className="home-presentation-icon"></div>
    </div>
  );
};

export default HomePresentation;

/**

 */
