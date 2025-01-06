import Navbar from "./components/navbar/navbar";
import FeedNavbar from "./components/navbar/feedNavbar.jsx";
import Trend from "./components/cards/cards.jsx";
import Feed from "./components/feeds/feeds.jsx";

function App() {
  return (
    <div className="w-full h-full dark:bg-gray-900 dark:text-white flex flex-col font-primaryRegular">
      <div className="relative container w-full mx-auto h-screen max-h-screen overflow-hidden flex justify-evenly flex-1">
        <Navbar />
        {/* Feed Principal */}
        <main className="flex flex-col gap-2 max-w-full max-h-screen p-4 flex-1">
          <div className="absolute bottom-3 right-0 left-0">
            <FeedNavbar />
          </div>
          <div className="flex flex-col gap-4 overflow-y-scroll scrollbar-hide">
            <Feed />
            <Feed />
            <Feed />
            <Feed />
          </div>
        </main>

        {/* Sidebar Derecho */}
        <aside className="max-h-screen w-1/4 m-2 overflow-y-scroll scrollbar-hide">
          <div className="flex flex-col gap-2">
            <h2 className="text-md font-semibold m-4">Tendencia</h2>
            <ul className="flex flex-col gap-4">
              <li>
                <Trend />
              </li>
              <li>
                <Trend />
              </li>
              <li>
                <Trend />
              </li>
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
}

export default App;
