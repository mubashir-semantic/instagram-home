import Navbar from "./components/Navbar";
import StoryList from "./components/StoryList";
import './App.css';

function App() {
  return (
    <div className="app">
      <Navbar />

      <main className="main-content">
        <StoryList />
      </main>
    </div>
  );
}

export default App;
