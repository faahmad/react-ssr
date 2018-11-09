import * as React from "react";

export function Home() {
  return (
    <div>
      <div>Home Component</div>
      <button onClick={() => console.log("Hi there!")}>Press Me</button>
    </div>
  );
}
