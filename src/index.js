import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";
const url = "https://83ww3.sse.codesandbox.io/";
async function loadGreeting() {
  const res = await fetch(url, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ query: "{greeting}" })
  });
  const responseBody = await res.json();
  console.log(responseBody);
  return responseBody.data.greeting;
}

function App() {
  const [count, setCount] = useState("");
  loadGreeting().then(g => setCount(g));
  return (
    <div className="App">
      <h1>{count}</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
