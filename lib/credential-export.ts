import { toBlob } from "html-to-image";
import type { CredentialExportSpec } from "@/types/builder-credential";

export const CREDENTIAL_EXPORT_SPEC: CredentialExportSpec = {
  width: 1080,
  height: 1350,
  aspectRatio: "4:5"
};

export function sanitizeFilename(name: string): string {
  const cleanName = name
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

  const slug = cleanName || "builder";
  return `hh-goa-2026-${slug}-credential.png`;
}

export function buildShareCaption(builderTitle?: string): string {
  const titlePart = builderTitle ? `${builderTitle} // ` : "";
  return `${titlePart}Built my HH Goa 2026 Builder Credential.

LESS NOISE. MORE SIGNAL.

#FrameInGoa`;
}

export async function renderCredentialToBlob(node: HTMLElement): Promise<Blob> {
  if (typeof document !== "undefined" && document.fonts) {
    await document.fonts.ready;
  }

  // Generate 1080x1350 PNG blob using html-to-image
  const blob = await toBlob(node, {
    width: 540,
    height: 675,
    canvasWidth: CREDENTIAL_EXPORT_SPEC.width,
    canvasHeight: CREDENTIAL_EXPORT_SPEC.height,
    style: {
      transform: "none",
      transition: "none",
      animation: "none",
      margin: "0",
    },
    quality: 0.95,
    cacheBust: true,
    filter: (domNode) => {
      // Exclude script or external non-rendered artifacts if any
      return domNode.tagName !== "SCRIPT";
    }
  });

  if (!blob) {
    throw new Error("Failed to render credential image blob.");
  }

  return blob;
}

export function downloadBlob(blob: Blob, filename: string): void {
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  setTimeout(() => {
    URL.revokeObjectURL(url);
  }, 2000);
}

export function openXShareIntent(builderTitle?: string): void {
  const caption = buildShareCaption(builderTitle);
  const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(caption)}`;
  window.open(url, "_blank", "noopener,noreferrer");
}

export function canNativeShareFile(): boolean {
  if (
    typeof navigator === "undefined" ||
    typeof File === "undefined" ||
    !navigator.share ||
    !navigator.canShare
  ) {
    return false;
  }

  try {
    const dummyFile = new File(["test"], "test.png", { type: "image/png" });
    return navigator.canShare({ files: [dummyFile] });
  } catch {
    return false;
  }
}

export async function shareCredentialNative(
  blob: Blob,
  filename: string,
  builderTitle?: string
): Promise<boolean> {
  const caption = buildShareCaption(builderTitle);
  const file = new File([blob], filename, { type: "image/png" });

  if (typeof navigator !== "undefined" && navigator.canShare && navigator.canShare({ files: [file] })) {
    try {
      await navigator.share({
        title: "HH Goa 2026 Builder Credential",
        text: caption,
        files: [file]
      });
      return true;
    } catch (error) {
      if ((error as DOMException)?.name === "AbortError") {
        return false;
      }
      throw error;
    }
  }

  return false;
}
