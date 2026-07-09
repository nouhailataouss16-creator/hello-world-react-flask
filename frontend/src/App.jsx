import { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("http://37.60.246.169:5002/")
      .then((response) => response.text())
      .then((data) => setMessage(data));
  }, []);

  return (
    <h1>{message}</h1>
  );
}

export default App;