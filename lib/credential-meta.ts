export type CredentialMeta = {
  builderId: string;
  signalId: string;
};

export function createCredentialMeta(name: string, stack: string): CredentialMeta {
  const seed = `${name.trim().toLowerCase()}|${stack.trim().toLowerCase()}`;
  const hash = getHash(seed || "hh-goa-builder");

  return {
    builderId: `BLD-${(hash % 900) + 100}`,
    signalId: `SIG-${((hash >>> 4) % 9000) + 1000}`
  };
}

function getHash(value: string): number {
  return Array.from(value).reduce(
    (accumulator, character) =>
      (accumulator * 33 + character.charCodeAt(0)) >>> 0,
    5381
  );
}
