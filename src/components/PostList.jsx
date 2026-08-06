import { useCallback, useState, useMemo } from "react";
import Post from "./Post";

function PostList({ posts }) {
    const [searchTerm, setSearchTerm] = useState('');
    const [likedPosts, setLikedPosts] = useState([]);

    const handleLike = useCallback((postId) => {
        setLikedPosts((currentLikedPosts) =>
            currentLikedPosts.includes(postId)
                ? currentLikedPosts.filter((id) => id !== postId)
                : [...currentLikedPosts, postId]
        );
    }, []);


    const filteredPosts = useMemo(() => {
        return posts.filter((post) =>
            post.username.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }
        , [posts, searchTerm]);

    return (
        <div className="post-list">
            <input
                type="text"
                placeholder="Search posts by username"
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
            />
            {filteredPosts?.length > 0 &&
                filteredPosts.map((post) => (
                    <Post
                        key={post.id}
                        id={post.id}
                        username={post.username}
                        profileImage={post.profileImage}
                        postImage={post.postImage}
                        caption={post.caption}
                        posttime={post.posttime}
                        isLiked={likedPosts.includes(post.id)}
                        onLike={handleLike}
                    />
                ))}
        </div>
    );
}

export default PostList;