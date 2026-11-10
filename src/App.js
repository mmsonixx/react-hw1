import "./App.css";
import { Colours } from "./components/Colours";
function App() {
  const name = "Соня";
  const link =
    "https://i.pinimg.com/736x/fa/ff/48/faff4874ec72b7528baef2a0e1800fa3.jpg";
  const data = {
    websiteTitle: "Twitch",
    url: "https://www.twitch.tv/?lang=uk",
  };
  const num1 = 10;
  const num2 = 8;
  const array = ["Green", "Red", "Blue"];
  return (
    <div className="App">
      <h1>Ласкаво просимо до нашого сайту!</h1>
      <p>Мене звати {name}</p>
      <img src={link} alt="{ happy cat}" />
      <a href={data.url} target="_blank">
        {data.websiteTitle}
      </a>
      <p>{num1 - num2}</p>
      <Colours data={array} />
    </div>
  );
}

export default App;
