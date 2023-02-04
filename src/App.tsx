import { useState } from "react";
import useKonamiCode from "./hooks/useKonamiCode";
import SecretAudio from "./assets/sounds/secret.mp3";

function App() {
  const triggerAction = () => {
    const audio = new Audio(SecretAudio);
    audio.play();
    document.documentElement.style.setProperty("background-color", "#3e6e9e");
  };
  useKonamiCode(triggerAction);

  return <div className="App"></div>;
}

export default App;
