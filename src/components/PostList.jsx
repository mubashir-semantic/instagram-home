import Post from "./Post";

function PostList({posts}) {

return (
    <div className="post-list">
        {posts?.length > 0 && posts.map((post) => (
            <Post
                key={post.id}
                username={post.username}
                profileImage={post.profileImage}
                postImage={post.postImage}
                caption={post.caption}
                posttime={post.posttime}
            />
        ))}
    </div>
);
}

export default PostList;