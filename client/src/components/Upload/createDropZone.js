import { createSignal, onCleanup, onMount } from "solid-js";
import { isServer } from "solid-js/web";
import { noop } from "@solid-primitives/utils";
import { transformFiles } from "./helpers.js";

/**
 * Primitive to make working with dropzones easier.
 *
 * @returns `setRef`
 * @returns `files`
 * @returns `isDragging`
 * @returns `removeFile`
 * @returns `clearFiles`
 *
 * @example
 * ```ts
 * // run async user callback
 * const { setRef: dropzoneRef1, files: droppedFiles1 } = createDropzone({
 *   onDrop: async files => {
 *     await doStuff(2);
 *     files.forEach(f => console.log(f));
 *   },
 *   onDragStart: files => console.log("drag start")
 *   onDragStart: files => files.forEach(f => console.log(f)),
 *   onDragOver: files => console.log("drag over")
 * });
 * ```
 */
function createDropzone(
  options,
) {
  if (isServer) {
    return {
      setRef: noop,
      files: () => [],
      isDragging: () => false,
      removeFile: noop,
      clearFiles: noop,
    };
  }
  const [files, setFiles] = createSignal([]);
  const [isDragging, setIsDragging] = createSignal(false);

  let ref = undefined;

  const setRef = (r) => {
    ref = r;
  };

  const onDragStart = event => {
    setIsDragging(true);
    Promise.resolve(options?.onDragStart?.(transformFiles(event.dataTransfer?.files || null)));
  };
  const onDragEnd = event => {
    setIsDragging(false);
    Promise.resolve(options?.onDragEnd?.(transformFiles(event.dataTransfer?.files || null)));
  };

  const onDragEnter = event => {
    Promise.resolve(options?.onDragEnter?.(transformFiles(event.dataTransfer?.files || null)));
  };
  const onDragLeave = event => {
    Promise.resolve(options?.onDragLeave?.(transformFiles(event.dataTransfer?.files || null)));
  };
  const onDragOver = event => {
    event.preventDefault();
    Promise.resolve(options?.onDragOver?.(transformFiles(event.dataTransfer?.files || null)));
  };
  const onDrag = event => {
    Promise.resolve(options?.onDrag?.(transformFiles(event.dataTransfer?.files || null)));
  };

  const onDrop = event => {
    event.preventDefault();

    const parsedFiles = transformFiles(event.dataTransfer?.files || null);
    setFiles(parsedFiles);

    Promise.resolve(options?.onDrop?.(parsedFiles));
  };

  onMount(() => {
    if (!ref) return;

    // TODO: Should event.stopPropagation() or event.preventDefault() in handlers below?
    ref.addEventListener("dragstart", onDragStart);
    ref.addEventListener("dragenter", onDragEnter);
    ref.addEventListener("dragend", onDragEnd);
    ref.addEventListener("dragleave", onDragLeave);
    ref.addEventListener("dragover", onDragOver);
    ref.addEventListener("drag", onDrag);
    ref.addEventListener("drop", onDrop);

    onCleanup(() => {
      ref?.removeEventListener("dragstart", onDragStart);
      ref?.removeEventListener("dragenter", onDragEnter);
      ref?.removeEventListener("dragend", onDragEnd);
      ref?.removeEventListener("dragleave", onDragLeave);
      ref?.removeEventListener("dragover", onDragOver);
      ref?.removeEventListener("drag", onDrag);
      ref?.removeEventListener("drop", onDrop);
    });
  });

  const removeFile = (fileName) => {
    setFiles(prev => prev.filter(f => f.name !== fileName));
  };

  const clearFiles = () => {
    setFiles([]);
  };

  return {
    setRef,
    files,
    isDragging,
    removeFile,
    clearFiles,
  };
}

export { createDropzone };