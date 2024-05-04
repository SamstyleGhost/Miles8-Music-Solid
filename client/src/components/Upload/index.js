import { onCleanup, onMount } from "solid-js";
import { isServer } from "solid-js/web";
import { transformFiles } from "./helpers.js";

export const fileUploader = (element, options) => {
  if (isServer) {
    return;
  }
  const { userCallback, setFiles } = options();

  onMount(() => {
    const onChange = async (event) => {
      const parsedFiles = transformFiles(event.currentTarget.files);

      setFiles(parsedFiles);

      try {
        await userCallback(parsedFiles);
      } catch (error) {
        console.error(error);
      }
    };

    onCleanup(() => element.removeEventListener("change", onChange));

    element.addEventListener("change", onChange);
  });
};

export { createFileUploader } from "./createFileUploader.js";
export { createDropzone } from "./createDropZone.js";
