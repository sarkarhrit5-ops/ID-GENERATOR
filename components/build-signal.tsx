import type { CSSProperties } from "react";
import { createBuildSignalPattern } from "@/lib/build-signal";

type BuildSignalProps = {
  seed: string;
};

export function BuildSignal({ seed }: BuildSignalProps) {
  const signalBars = createBuildSignalPattern(seed);

  return (
    <div className="build-signal" aria-hidden="true">
      {signalBars.map((height, index) => (
        <span
          className="build-signal__bar"
          key={`${height}-${index}`}
          style={{ "--bar-height": `${height}%` } as CSSProperties}
        />
      ))}
    </div>
  );
}
