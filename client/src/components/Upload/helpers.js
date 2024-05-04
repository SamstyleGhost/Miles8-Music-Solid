export const doStuff = (s) => {
  return new Promise(res => setTimeout(res, s * 1000));
};

export function createInputComponent({ multiple = false, accept = "" }) {
  const element = document.createElement("input");
  element.type = "file";
  element.accept = accept;
  element.multiple = multiple;

  return element;
}

export function transformFiles(files) {
  const parsedFiles = [];

  if (!files) return parsedFiles;

  for (const index in files) {
    const fileIndex = +index;
    if (isNaN(+fileIndex)) {
      continue;
    }

    const file = files[fileIndex];
    if (!file) {
      continue;
    }

    const parsedFile = {
      source: URL.createObjectURL(file),
      name: file.name,
      size: file.size,
      file,
    };
    parsedFiles.push(parsedFile);
  }

  return parsedFiles;
}