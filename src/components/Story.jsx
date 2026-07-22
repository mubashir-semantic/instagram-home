function Story({ image, username }) {
    return (
        <div className="story">
            <img src={image} className="story-image" alt={username} />
            <span className="story-username">{username}</span>
        </div>
    );
}

export default Story;