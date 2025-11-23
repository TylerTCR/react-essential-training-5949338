import { useEffect, useReducer } from "react";
import './App.css';
import turkey from "./images/thanksgiving-turkey.png";

function Header({ name, year }) {
  return (
    <header>
      <h1>{name}'s Application</h1>
      <p>Copyright {year}</p>
    </header>
  );
}

// A simple array of items
const items = [
  "React",
  "JavaScript",
  "Web Development"
];

/** When creating a dynamic list:
 * It is best practice to create a list of objects with unique IDs for each item
 * and use these IDs as keys, as shown below...
*/
const stackObjects = items.map((stack, i) => ({
  id: i,
  title: stack
}));

function Main({ stack, openStatus, onStatus }) {
  return (
    // The <> is called a fragment, it helps remove clutter in DOM.
    <>
      <div>
        <h2>Welcome to my new Site!</h2>
        <h3>This site is currently {openStatus ? "live" : "offline"}</h3>
        <button onClick={() => onStatus(true)}>Open the site</button>
      </div>
      <main>
        <img src={turkey} height={200} alt="A cartoon photo of a thanksgiving turkey" />

        <ul>
          {stack.map((item) => (
            <li key={item.id} style={{ listStyleType: "none" }}>{item.title} </li>
          ))}
        </ul>
      </main>
    </>
  );
}

function App() {
  /* useReducer can be used to manage a state of something, like React's useState function
      but without worrying about the logic. In other words, it allows us to specify how the
      state of something should change in response to actions, making it useful for 
      multiple state values.
  */
  const [status, toggle] = useReducer((status) => !status, true);

  /* useEffect is used to track things and can be used to perform side effects
      in functional components, suchs as fetching data, changeing something on screen,
      and other things... Here, it simply tracks and logs when the status value changes.

      * Using an empty array as the second arg means it only does it on the first render 
  */
  useEffect(() => {
    console.log(`The site is ${status ? "live" : "offline"}`);
  }, [status]);

  return (
    <div>
      <h1>This app is currently {status ? "opened" : "closed"}.</h1>
      <button onClick={toggle}>
        {status ? "Close" : "Open"} the app
      </button>
      <Header name="Tyler" year={2025} />
      <Main stack={stackObjects} openStatus={status} onStatus={toggle} />
    </div>
  );
}

export default App
