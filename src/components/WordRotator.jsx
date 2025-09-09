
import React, { useState, useEffect } from "react";
import "./WordRotator.css";



export default function WordRotator({ words, interval = 2000 }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, interval);
    return () => clearInterval(id);
  }, [words, interval]);

  return (
    <span className="rotator">{words[index]}</span>
  );
}
