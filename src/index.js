import React from "react";
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
  return responseBody;
}
loadGreeting();
function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
