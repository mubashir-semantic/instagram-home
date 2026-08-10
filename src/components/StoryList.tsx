import Story from "./Story";

interface StoryListProps {
  data: {
    id: number;
    image: string;
    username: string;
  }[];
}

function StoryList({data}: StoryListProps) {
  return (
    <div className="story-list">
      {data?.map((story) => (
        <Story key={story.id} image={story.image} username={story.username} />
      ))}
    </div>
  );
}

export default StoryList;
