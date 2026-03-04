"use client";

import Canvas from "@/components/canvas/Canvas";
import MetricsPanel from "@/components/dashboard/MetricsPanel";
import TrafficControl from "@/components/dashboard/TrafficControl";

export default function Home() {
  return (
    <main className="grid grid-cols-3 h-screen">

      {/* Architecture Canvas */}
      <div className="col-span-2 border-r border-zinc-700 overflow-auto">
        <Canvas />
      </div>

      {/* Dashboard */}
      <div className="p-6 space-y-6 bg-zinc-900 overflow-auto">
        <TrafficControl />
        <MetricsPanel />
      </div>

    </main>
  );
}