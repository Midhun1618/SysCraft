"use client";

import Canvas from "@/components/canvas/Canvas";
import MetricsPanel from "@/components/dashboard/MetricsPanel";
import TrafficControl from "@/components/dashboard/TrafficControl";

export default function Home() {
  return (
    <main className="flex h-screen">
      <div className="w-2/3 border-r border-zinc-700">
        <Canvas />
      </div>
      <div className="w-1/3 p-4 space-y-4">
        <TrafficControl />
        <MetricsPanel />
      </div>
    </main>
  );
}