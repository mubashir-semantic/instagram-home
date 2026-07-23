import Navbar from "../components/Navbar";
import StoryList from "../components/StoryList";
import PostList from "../components/PostList";
import RightSidebar from "../components/RightSidebar";
import { stories } from "../utils/constants";
import { posts } from "../utils/constants";
import { menuItems } from "../utils/constants";

function Home() {
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
