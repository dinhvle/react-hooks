import Accordion from "./compnents/Accordion";
import Search from "./compnents/Search";

const items = [
  {
    title: "What is React?",
    content: "React is a front end javascript library",
  },
  {
    title: "Why use React?",
    content: "React is a favorite JS library among engineers",
  },
  {
    title: "How do you use React?",
    content: "You use react by creating component",
  },
];

const App = () => {
  return (
    <div>
      {/* <Accordion items={items} /> */}
      <Search />
    </div>
  );
};

export default App;