import React from "react";
import { Typography } from "antd";
import { YoutubePlayer } from "reactjs-media";

import { home__video } from "../data";

const ComponentVideo = () => {
  const { Title } = Typography;
  const showVideo = (
    <YoutubePlayer
      className="content-video"
      src="https://youtu.be/lWZrs0ccTUw"
      width={`100%`}
      height={`100%`}
    />
  );
  return (
    <div className="section-wrapper home-video">
      <div className="section-top">
        <Title className="top-title" level={1}>
          {home__video.title}
        </Title>
        <i className="top-border" />
      </div>
      <div className="section-content">{showVideo}</div>
    </div>
  );
};

export default ComponentVideo;
