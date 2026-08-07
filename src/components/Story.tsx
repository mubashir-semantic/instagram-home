import { memo } from "react";

interface StoryProps {
  image: string;
  username: string;
}

function Story({ image, username }: StoryProps) {
  return (
    <div className="story">
      <img src={image} className="story-image" alt={username} />
      <span className="story-username">{username}</span>
    </div>
  );
}

export default memo(Story);