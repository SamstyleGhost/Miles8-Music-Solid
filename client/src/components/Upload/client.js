import axios from 'axios';

const file = 'LOCAL_FILENAME_THAT_YOU_WANT_TO_UPLOAD';
const apiUrl = 'YOUR_API_GATEWAY_URL/upload';


// Send a POST request to the API Gateway endpoint to get the pre-signed URL and file key
axios.post(apiUrl, { "filename" : file }, {
  headers: {
    'Content-Type': 'application/json'
  }
})
  .then(response => {
    // Get the pre-signed URL and file key from the response
    const { uploadUrl, fileKey } = response.data;

    // Send a PUT request to the pre-signed URL with the form data
    axios.put(uploadUrl, fileContent, {
      headers: {
        'Content-Type': contentType
      }
    })
      .then(() => {
        console.log(`File uploaded successfully to S3: ${fileKey}`);
      })
      .catch(error => {
        console.error('Error uploading file to S3:', error);
      });
  })
  .catch(error => {
    console.error('Error getting pre-signed URL:', error);
  });