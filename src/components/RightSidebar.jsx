import Suggestion from "./Suggestion";

function RightSidebar() {
  const suggestions = [
    {
      id: 1,
      image: "/user-1.png",
      username: "john_doe",
      mutualFriends: 5,
    },
    {
      id: 2,
      image: "/user-2.png",
      username: "jane_smith",
    },
    {
      id: 3,
      image: "/user-3.png",
      username: "alex_jones",
      mutualFriends: 3,
    },
    {
      id: 4,
      image: "/user-4.webp",
      username: "sarah_williams",
      mutualFriends: 2,
    },
    {
      id: 5,
      image: "/user-4.webp",
      username: "michael_brown",
    },
  ];
  return (
    <aside className="right-sidebar">
      <h3>Suggestions for you</h3>
      {suggestions.map((suggestion) => (
        <Suggestion
          key={suggestion.id}
          image={suggestion.image}
          username={suggestion.username}
          mutualFriends={suggestion.mutualFriends}
        />
      ))}
    </aside>
  );
}

export default RightSidebar;
