import { createSignal, For } from "solid-js";
import axios from "axios";
import { createFileUploader, fileUploader } from "./index.js";
import lamejs from 'lamejs';

fileUploader;

const SingleFileUpload = () => {
  const { files, selectFiles } = createFileUploader();


    const uploadToS3 = (sourceFile, fileName) => {
  
      fetch(`https://gtylan5d86.execute-api.ap-south-1.amazonaws.com/Testing/milesmusicsongsbucket/${fileName}.mp3`, {
        method: "PUT",
        body: sourceFile
      })
      .then((res) => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res; // assuming the response is JSON
      })
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });

    }

    https://ap-south-1.console.aws.amazon.com/s3/object/milesmusicsongsbucket?region=ap-south-1&bucketType=general&prefix=20c24162-2adc-4d9c-8bfc-686aefce3d77.mp3

  return (
    <div>
      <div>
        <h5>Select a single file</h5>
        <button
          onClick={() => {
            selectFiles(([{ source, name, size, file }]) => {
              console.log({ source, name, size, file });
              
              const changedName = source.split('/');

              const newName = changedName[changedName.indexOf('localhost:3000') + 1];

              console.log(newName);

              uploadToS3(source, newName);

            });
          }}
        >
          Select
        </button>
        <For each={files()}>{file => <p>{file.name}</p>}</For>
      </div>

      {/* <div>
        <h5>Select a single file with async callback</h5>
        <button
          onClick={() => {
            selectFilesAsync(async ([{ source, name, size, file }]) => {
              await doStuff(2);
              console.log({ source, name, size, file });
            });
          }}
        >
          Select
        </button>
        <For each={filesAsync()}>{file => <p>{file.name}</p>}</For>
      </div> */}
    </div>
  );
};


const UploadComponent= () => {
  return (
    <div>
      <SingleFileUpload />
    </div>
  );
};

export default UploadComponent;