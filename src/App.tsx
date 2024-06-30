import { Card } from "./components/Card";
import spacejoy from "./assets/spacejoy.jpg";
import { useId } from "react";

function App() {
  return (
    <main className="bg-gradient-to-t from-gradfrom to-gradto w-screen min-h-screen p-8 flex items-center justify-center">
      <Card
        actions={[
          <button
            key={useId()}
            className="group fill-indigo-700 flex flex-row w-[114px] rounded items-center gap-1.5 text-indigo-700 text-base disabled:text-disabledbtn focus:outline focus:outline-2 focus:outline-indigo-200"
          >
            Read More
            <svg
              width="14"
              height="14"
              className="fill-indigo-700 group-disabled:fill-disabledbtn"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10.4763 6.16658L6.00633 1.69657L7.18483 0.518066L13.6667 6.99992L7.18483 13.4817L6.00633 12.3032L10.4763 7.83325H0.333328V6.16658H10.4763Z" />
            </svg>
          </button>,
        ]}
        coverImgSrc={spacejoy}
        category="Interior"
        title="Top 5 Living Room Inspirations"
      >
        Curated vibrants colors for your living, make it pop & calm in the same
        time.
      </Card>
    </main>
  );
}

export default App;
