import { useState } from "react";
import { Button } from "./components/button/Button";

function App() {
  const [count, setCount] = useState(0);

  return <Button skeleton>Hello</Button>;
}

export default App;
