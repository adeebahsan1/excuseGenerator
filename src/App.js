import "./styles.css";
import { useState } from "react";

export default function App() {
  const [generatedExcuse, setGeneratedExcuse] = useState("");
  const fetchExcuse = (excuse) => {
    fetch(`https://excuser-three.vercel.app/v1/excuse/${excuse}/`)
      .then((res) => res.json())
      .then((data) => {
        setGeneratedExcuse(data[0].excuse);
      });
  };
  return (
    <div className="App">
      <h1> Generate An Excuse</h1>
      <button onClick={() => fetchExcuse("party")}> Party </button>&ensp;
      <button onClick={() => fetchExcuse("family")}> Family </button>&ensp;
      <button onClick={() => fetchExcuse("office")}> Office </button>
      <p> {generatedExcuse} </p>
    </div>
  );
}
