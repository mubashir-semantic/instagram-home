function Suggestion({ image, username, mutualFriends }) {
  return (
    <div className="suggestion">
      <div className="suggestion-user">
        <img src={image} className="suggestion-image" alt={username} />
        <div className="suggestion-info">
          <span className="suggestion-username">{username}</span>
          {mutualFriends && (
            <span className="suggestion-mutual-friends">
              {mutualFriends} mutual friends
            </span>
          )}
        </div>
      </div>
      <button className="suggestion-follow-btn">Follow</button>
    </div>
  );
}

export default Suggestion;
