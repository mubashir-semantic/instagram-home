import Story from "./Story";

function StoryList({data}) {
  return (
    <div className="story-list">
      {data?.map((story) => (
        <Story key={story.id} image={story.image} username={story.username} />
      ))}
    </div>
  );
}

export default StoryList;
