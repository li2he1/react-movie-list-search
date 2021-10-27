import "./styles.css";
import axios from "axios";
import { useState, useRef } from "react";
import MovieChar from "./MovieChar";

export default function App() {
  const [movie, setMovie] = useState("");
  const inputRef = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .get("moviedata.json")
      .then((response) => {
        const data = response.data.mylist.filter((item) =>
          item.title.includes(inputRef.current.value)
        );
        setMovie(data[0]);
      })
      .catch(() => {
        alert("Error: fetching data");
      });
  };
  const handleReturn = () => {
    setMovie("");
    console.log(inputRef);
  };
  return (
    <div className="App">
      <div>Let's search movie</div>

      {movie ? (
        <div className="MovieContainer">
          <button onClick={handleReturn}>return</button>
          <MovieChar title={movie.title} url={movie.img} />
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <input ref={inputRef} type="text" />
          <button>Search</button>
        </form>
      )}
    </div>
  );
}
