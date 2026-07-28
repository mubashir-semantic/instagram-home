import Navbar from "../components/Navbar";
import StoryList from "../components/StoryList";
import PostList from "../components/PostList";
import RightSidebar from "../components/RightSidebar";
import { stories, posts, menuItems } from "../utils/constants";
import { useAuth } from "../context/AuthContext";

function Home() {
  const { user } = useAuth();
  console.log(user);
  return (
    <div className="app">
      <Navbar menuItems={menuItems} />

      <main className="main-content">
        <StoryList data={stories} />
        <PostList posts={posts} />
      </main>
      <RightSidebar />
    </div>
  );
}

export default Home;
