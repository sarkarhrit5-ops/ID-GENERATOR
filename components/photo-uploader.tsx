"use client";

import { useId, useRef, useState } from "react";
import type { ChangeEvent, DragEvent } from "react";
import type { BuilderPhoto } from "@/types/builder-credential";

type PhotoUploaderProps = {
  error?: string;
  photo?: BuilderPhoto;
  onChange: (photo: BuilderPhoto | undefined) => void;
};

const ACCEPTED_IMAGE_TYPES = "image/jpeg,image/png,image/heic,image/heif";
const ALLOWED_MIME_TYPES = new Set([
  "image/jpeg",
  "image/png",
  "image/heic",
  "image/heif"
]);
const ALLOWED_EXTENSIONS = new Set(["jpg", "jpeg", "png", "heic", "heif"]);
const MAX_IMAGE_SIZE_BYTES = 8 * 1024 * 1024;

export function PhotoUploader({ error, photo, onChange }: PhotoUploaderProps) {
  const inputId = useId();
  const cameraId = useId();
  const inputRef = useRef<HTMLInputElement>(null);
  const cameraRef = useRef<HTMLInputElement>(null);
  const [localError, setLocalError] = useState<string>();
  const [isDragging, setIsDragging] = useState(false);

  const displayedError = localError ?? error;

  function handleFiles(files: FileList | File[]) {
    const file = files[0];

    if (!file) {
      return;
    }

    const validationError = validateImageFile(file);

    if (validationError) {
      setLocalError(validationError);
      onChange(undefined);
      resetInput();
      return;
    }

    setLocalError(undefined);

    const reader = new FileReader();
    reader.onload = (event) => {
      const dataUrl = event.target?.result;
      if (typeof dataUrl === "string") {
        onChange({
          url: dataUrl,
          name: file.name,
          type: file.type || getFileExtension(file.name).toUpperCase(),
          size: file.size
        });
      }
    };
    reader.onerror = () => {
      setLocalError("Failed to read image file.");
    };
    reader.readAsDataURL(file);
  }

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    handleFiles(event.target.files ?? []);
  }

  function handleDrop(event: DragEvent<HTMLDivElement>) {
    event.preventDefault();
    setIsDragging(false);
    handleFiles(Array.from(event.dataTransfer.files));
  }

  function clearPhoto() {
    setLocalError(undefined);
    onChange(undefined);
    resetInput();
  }

  function resetInput() {
    if (inputRef.current) {
      inputRef.current.value = "";
    }
    if (cameraRef.current) {
      cameraRef.current.value = "";
    }
  }

  return (
    <div className="field">
      <label htmlFor={inputId}>Photo</label>
      <div
        className={`photo-dropzone${isDragging ? " photo-dropzone--active" : ""}${
          displayedError ? " photo-dropzone--error" : ""
        }`}
        onDragEnter={(event) => {
          event.preventDefault();
          setIsDragging(true);
        }}
        onDragLeave={() => setIsDragging(false)}
        onDragOver={(event) => event.preventDefault()}
        onDrop={handleDrop}
      >
        {photo ? (
          <div className="photo-dropzone__preview">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img alt="Selected builder credential photo preview" src={photo.url} />
          </div>
        ) : (
          <div className="photo-dropzone__empty">
            <span>Drop your photo here</span>
            <small>or choose from your device</small>
            <small>JPG · PNG · HEIC · up to 8MB</small>
          </div>
        )}

        <div className="photo-dropzone__actions">
          <input
            accept={ACCEPTED_IMAGE_TYPES}
            className="photo-dropzone__input"
            id={inputId}
            name="builder-photo"
            onChange={handleInputChange}
            ref={inputRef}
            type="file"
          />
          <input
            accept="image/*"
            capture
            className="photo-dropzone__input"
            id={cameraId}
            name="builder-photo-camera"
            onChange={handleInputChange}
            ref={cameraRef}
            type="file"
          />
          <label className="button button--primary" htmlFor={inputId}>
            {photo ? "CHANGE PHOTO" : "CHOOSE PHOTO"}
          </label>
          <label className="button button--primary" htmlFor={cameraId} title="Take a photo with your camera">
            📷 CAMERA
          </label>
          {photo ? (
            <button className="button button--ghost" onClick={clearPhoto} type="button">
              REMOVE
            </button>
          ) : null}
        </div>
      </div>
      {displayedError ? <p className="field-error">{displayedError}</p> : null}
    </div>
  );
}

function validateImageFile(file: File): string | undefined {
  const extension = getFileExtension(file.name);
  const hasAllowedMime = ALLOWED_MIME_TYPES.has(file.type);
  const hasAllowedExtension = ALLOWED_EXTENSIONS.has(extension);

  if (!hasAllowedMime && !hasAllowedExtension) {
    return "Use a JPG, PNG, or HEIC image.";
  }

  if (file.size > MAX_IMAGE_SIZE_BYTES) {
    return "Choose an image under 8MB.";
  }

  return undefined;
}

function getFileExtension(fileName: string): string {
  return fileName.split(".").pop()?.toLowerCase() ?? "";
}
