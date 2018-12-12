import * as React from "react";

function HomePage() {
  return (
    <div>
      <div>Home Component</div>
      <button onClick={() => console.log("Hi there!")}>Press Me</button>
    </div>
  );
}

export default {
  component: HomePage
};
