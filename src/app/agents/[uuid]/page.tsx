"use client";

import { useEffect, useState, use } from "react";
import Image from "next/image";

export default function AgentPage({
  params,
}: {
  params: Promise<{ uuid: string }>;
}) {
  const { uuid } = use(params);
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        `https://valorant-api.com/v1/agents/${uuid}?language=ja-JP`
      );
      const data = await res.json();
      setData(data.data);
    };
    fetchData();
  }, [uuid]);

  // dataが取得できるまではLoading...を表示
  if (!data) return <div>Loading...</div>;

  return (
    <div>
      <h1 className="text-4xl font-bold">{data?.displayName}</h1>
      <Image
        src={data?.fullPortrait}
        alt={data?.displayName}
        width={1000}
        height={1000}
      />
    </div>
  );
}
