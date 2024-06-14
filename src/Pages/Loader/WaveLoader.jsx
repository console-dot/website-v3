import React from "react";

export default function WaveLoader() {
  return (
    <div className="flex items-center justify-center h-screen bg-black">
      {[...Array(10)].map((_, i) => (
        <div
          key={i}
          className={`w-1 h-24 bg-gradient-to-br from-cyan-500 to-white m-2 rounded-full animate-wave`}
          style={{ animationDelay: `${i * 0.1}s` }}
        ></div>
      ))}
    </div>
  );
}
