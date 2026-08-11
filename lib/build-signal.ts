const SIGNAL_BAR_COUNT = 22;

export function createBuildSignalPattern(seed: string): number[] {
  let state = getSeed(seed || "hh-goa-builder-signal");

  return Array.from({ length: SIGNAL_BAR_COUNT }, (_, index) => {
    state = (state * 1664525 + 1013904223) >>> 0;

    const wave = Math.sin((index / (SIGNAL_BAR_COUNT - 1)) * Math.PI * 1.4);
    const noise = state % 38;
    const height = 24 + Math.round(wave * 34) + noise;

    return clamp(height, 18, 94);
  });
}

function getSeed(value: string): number {
  return Array.from(value.trim().toLowerCase()).reduce(
    (accumulator, character) =>
      (accumulator * 31 + character.charCodeAt(0)) >>> 0,
    2166136261
  );
}

function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max);
}
