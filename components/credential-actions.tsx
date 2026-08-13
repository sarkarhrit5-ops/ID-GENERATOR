"use client";

import { useState } from "react";
import {
  canNativeShareFile,
  copyBlobToClipboard,
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
  const [statusMessage, setStatusMessage] = useState<string>();
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
      setStatusMessage(undefined);

      const blob = await renderCredentialToBlob(element);
      const filename = sanitizeFilename(name);
      downloadBlob(blob, filename);
      setStatusMessage("Credential downloaded. Ready to post.");
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
      setStatusMessage(undefined);

      const blob = await renderCredentialToBlob(element);
      const filename = sanitizeFilename(name);
      const shared = await shareCredentialNative(blob, filename, builderTitle);

      if (!shared) {
        setStatusMessage("Share cancelled. You can download the credential or post it to X instead.");
      } else {
        setStatusMessage("Credential shared with image attached.");
      }
    } catch (error) {
      console.error("[Credential Share Error]:", error);
      setErrorMessage("Couldn't open the device share sheet. Please try again.");
    } finally {
      setIsExporting(false);
    }
  }

  async function handleXShare() {
    if (!isReady || isExporting) return;

    const element = getCredentialElement();
    if (!element) return;

    try {
      setIsExporting(true);
      setErrorMessage(undefined);
      setStatusMessage(undefined);

      const blobPromise = renderCredentialToBlob(element);

      if (supportsNativeShare) {
        const blob = await blobPromise;
        const filename = sanitizeFilename(name);
        const shared = await shareCredentialNative(blob, filename, builderTitle);
        if (shared) {
          setStatusMessage("Credential shared natively.");
        } else {
          setStatusMessage("Share cancelled.");
        }
        return;
      }

      const copiedPromise = copyBlobToClipboard(blobPromise);

      const blob = await blobPromise;
      downloadBlob(blob, sanitizeFilename(name));

      const copied = await copiedPromise;
      openXShareIntent(builderTitle);

      if (copied) {
        setStatusMessage(
          "Image downloaded & copied to clipboard! X opened—simply paste (Ctrl+V / Cmd+V) to attach your ID card!"
        );
      } else {
        setStatusMessage(
          "Image downloaded and X opened. Attach the downloaded image to your post."
        );
      }
    } catch (error) {
      console.error("[Credential X Share Error]:", error);
      setErrorMessage("Couldn't prepare the image for X. Please try again.");
    } finally {
      setIsExporting(false);
    }
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
          {isExporting ? "PREPARING YOUR ID..." : "DOWNLOAD MY ID"}
        </button>

        <button
          className="button button--yellow credential-action-btn"
          disabled={isExporting}
          onClick={handleXShare}
          type="button"
        >
          {isExporting ? "PREPARING X POST..." : "SHARE TO X"}
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

      {statusMessage ? (
        <p className="credential-actions__status" role="status">
          {statusMessage}
        </p>
      ) : null}
    </div>
  );
}
