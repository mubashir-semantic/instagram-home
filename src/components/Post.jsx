import {
  FiHeart,
  FiMessageCircle,
  FiSend,
  FiBookmark,
  FiMenu,
} from "react-icons/fi";

function Post({username, profileImage, postImage, caption, posttime}) {
  return (
    <article className="post">
      <div className="post-header">
        <div className="post-user-info">
          <img
            src={profileImage}
            className="post-profile-image"
            alt={username}
          />
          <span className="post-username">{username}</span>
        </div>

        <button className="post-Menu-button">
          <FiMenu />
        </button>
      </div>
      <img src={postImage} className="post-image" alt="Post" />
      <div className="post-reactions">
        <button className="post-button">
          <FiHeart />
        </button>
        <button className="post-button">
          <FiMessageCircle />
        </button>
        <button className="post-button">
          <FiSend />
        </button>
        <button className="post-button">
          <FiBookmark />
        </button>
      </div>
      <p className="post-caption">
        <strong>{username}</strong> {caption}
      </p>
      <p className="post-time">{posttime}</p>
    </article>
  );
}

export default Post;
