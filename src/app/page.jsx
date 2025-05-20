"use client";

import { useEffect, useState } from "react";
import AgentContainer from "./(components)/AgentContainer";

export default function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        "https://valorant-api.com/v1/agents?isPlayableCharacter=true&language=ja-JP"
      );
      const data = await res.json();
      setData(data.data);
    };
    fetchData();
  }, []);

  return (
    <div className="flex flex-wrap gap-4">
      {data.map((character) => (
        <AgentContainer key={character.uuid} character={character} />
      ))}
    </div>
  );
}
