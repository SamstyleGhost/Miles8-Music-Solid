import { createSignal } from "solid-js";
import { isServer } from "solid-js/web";
import { noop } from "@solid-primitives/utils";
import { transformFiles, createInputComponent } from "./helpers.js";

/**
 * Primitive to make uploading files easier.
 *
 * @returns `files`
 * @returns `selectFiles` - Open file picker, set files and run user callback
 * @returns `removeFile`
 * @returns `clearFiles`
 *
 * @example
 * ```ts
 * // multiple files
 * const {files, selectFiles} = createFileUploader({ multiple: true, accept: "image/*" });
 * selectFiles(files => files.forEach(file => console.log(file)));
 *
 * // single file
 * const {file, selectFile} = createFileUploader();
 * selectFiles(([{ source, name, size, file }]) => console.log({ source, name, size, file }));
 * ```
 */
function createFileUploader(options){
  if (isServer) {
    return {
      files: () => [],
      selectFiles: noop,
      removeFile: noop,
      clearFiles: noop,
    };
  }
  const [files, setFiles] = createSignal([]);

  let userCallback = () => {};

  const onChange = async event => {
    event.preventDefault();
    event.stopPropagation();

    const target = event.currentTarget;

    let parsedFiles= [];
    if (target.files) {
      parsedFiles = transformFiles(target.files);
    }

    target.removeEventListener("change", onChange);
    target.remove();

    setFiles(parsedFiles);

    try {
      await userCallback(parsedFiles);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error);
    }
    return;
  };

  const selectFiles = (callback) => {
    if (callback) {
      userCallback = callback;
    }

    const inputElement = createInputComponent(options || {});

    inputElement.addEventListener("change", onChange);
    inputElement.click();
  };

  const removeFile = (fileName) => {
    setFiles(prev => prev.filter(f => f.name !== fileName));
  };

  const clearFiles = () => {
    setFiles([]);
  };

  return {
    files,
    selectFiles,
    removeFile,
    clearFiles,
  };
}

export { createFileUploader };