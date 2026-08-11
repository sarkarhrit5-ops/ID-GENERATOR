"use client";

import { useState } from "react";
import {
  canNativeShareFile,
  downloadBlob,
  openXShareIntent,
  renderCredentialToBlob,
  sanitizeFilename,
  shareCredentialNative
} from "@/lib/credential-export";

type CredentialActionsProps = {
  getCredentialElement: () => HTMLElement | null;
  name: string;
  builderTitle: string;
  isReady: boolean;
};

export function CredentialActions({
  getCredentialElement,
  name,
  builderTitle,
  isReady
}: CredentialActionsProps) {
  const [isExporting, setIsExporting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string>();
  const [supportsNativeShare] = useState(() => canNativeShareFile());

  async function handleDownload() {
    if (!isReady || isExporting) return;

    const element = getCredentialElement();
    if (!element) {
      setErrorMessage("Credential target not ready.");
      return;
    }

    try {
      setIsExporting(true);
      setErrorMessage(undefined);

      const blob = await renderCredentialToBlob(element);
      const filename = sanitizeFilename(name);
      downloadBlob(blob, filename);
    } catch (error) {
      console.error("[Credential Export Error]:", error);
      setErrorMessage("Couldn't export the credential. Please try again.");
    } finally {
      setIsExporting(false);
    }
  }

  async function handleNativeShare() {
    if (!isReady || isExporting) return;

    const element = getCredentialElement();
    if (!element) return;

    try {
      setIsExporting(true);
      setErrorMessage(undefined);

      const blob = await renderCredentialToBlob(element);
      const filename = sanitizeFilename(name);
      const shared = await shareCredentialNative(blob, filename, builderTitle);

      if (!shared) {
        // Fallback to X Intent if native share was cancelled or unavailable
        openXShareIntent(builderTitle);
      }
    } catch (error) {
      console.error("[Credential Share Error]:", error);
      // Fallback cleanly to X Intent on error
      openXShareIntent(builderTitle);
    } finally {
      setIsExporting(false);
    }
  }

  function handleXShare() {
    if (!isReady) return;
    openXShareIntent(builderTitle);
  }

  if (!isReady) {
    return null;
  }

  return (
    <div className="credential-actions" aria-label="Credential actions">
      <div className="credential-actions__buttons">
        <button
          className="button button--primary credential-action-btn"
          disabled={isExporting}
          onClick={handleDownload}
          type="button"
        >
          {isExporting ? "EXPORTING SIGNAL..." : "DOWNLOAD CREDENTIAL"}
        </button>

        <button
          className="button button--yellow credential-action-btn"
          disabled={isExporting}
          onClick={handleXShare}
          type="button"
        >
          SHARE TO X
        </button>

        {supportsNativeShare ? (
          <button
            className="button button--ghost credential-action-btn"
            disabled={isExporting}
            onClick={handleNativeShare}
            type="button"
          >
            SHARE CREDENTIAL
          </button>
        ) : null}
      </div>

      {errorMessage ? (
        <p className="credential-actions__error" role="alert">
          {errorMessage}
        </p>
      ) : null}
    </div>
  );
}
