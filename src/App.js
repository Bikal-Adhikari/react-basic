import "./App.css";
import HeadLine, { News } from "./Headline";
import User from "./User";

const App = () => {
  const info = "ABC News Paper";
  const t1 = "World Cup";
  const t2 = "Concert";
  const t3 = "local sports event";
  return (
    <>
      <div className="">
        <h1>{info}</h1>
        {/* <HeadLine /> */}
        <News title={t1} />
        <News title={t2} />
        <News title={t3} />
        {/* <User /> */}
      </div>
      <div>sfds</div>
    </>
  );
};

export default App;
