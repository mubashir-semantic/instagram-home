import { useCallback, useState, useMemo } from "react";
import Post from "./Post";

interface Postprops {
    id: string;
    username: string;
    profileImage: string;
    postImage: string;
    caption: string;
    posttime: string;
}

interface PostListProps {
    posts: Postprops[];
}

function PostList({ posts }: PostListProps) {
    const [searchTerm, setSearchTerm] = useState("");
    const [likedPosts, setLikedPosts] = useState<string[]>([]);

    const handleLike = useCallback((postId: string) => {
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