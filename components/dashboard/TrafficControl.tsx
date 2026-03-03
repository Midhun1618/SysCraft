"use client";

import { useSystemStore } from "@/store/useSystemStore";

export default function TrafficControl() {
  const { traffic, setTraffic } = useSystemStore();

  return (
    <div>
      <h2 className="text-lg font-semibold mb-2">Traffic</h2>
      <input
        type="range"
        min="100"
        max="2000"
        step="100"
        value={traffic}
        onChange={(e) => setTraffic(Number(e.target.value))}
        className="w-full"
      />
      <p>{traffic} req/sec</p>
    </div>
  );
}