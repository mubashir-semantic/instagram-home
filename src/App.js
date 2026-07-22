import Navbar from "./components/Navbar";
import StoryList from "./components/StoryList";
import PostList from "./components/PostList";
import RightSidebar from "./components/RightSidebar";
import './App.css';
import {stories} from "./utils/constents";
import {posts} from "./utils/constents";
import {menuItems} from "./utils/constents";

function App() {
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

export default App;
