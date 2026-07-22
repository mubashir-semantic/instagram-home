import Story from "./Story";

function StoryList() {
  const stories = [
    {
      id: 1,
      image: "/user-1.png",
      username: "USER 1",
    },
    {
      id: 2,
      image: "/user-2.png",
      username: "USER 2",
    },
    {
      id: 3,
      image: "/user-3.png",
      username: "USER 3",
    },
    {
      id: 4,
      image: "/user-1.png",
      username: "USER 4",
    },
    {
      id: 5,
      image: "/user-2.png",
      username: "USER 5",
    },
    {
      id: 6,
      image: "/user-3.png",
      username: "USER 6",
    },
    {
      id: 7,
      image: "/user-1.png",
      username: "USER 7",
    },
    {
      id: 8,
      image: "/user-2.png",
      username: "USER 8",
    },
    {
      id: 9,
      image: "/user-3.png",
      username: "USER 9",
    },
  ];

  return (
    <div className="story-list">
      {stories.map((story) => (
        <Story key={story.id} image={story.image} username={story.username} />
      ))}
    </div>
  );
}

export default StoryList;
