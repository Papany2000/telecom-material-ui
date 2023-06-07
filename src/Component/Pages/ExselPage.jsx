import React, { useState } from 'react';
import {axiosClient} from '../../utils/axiosClient';

function FileUploadForm() {
  const [file, setFile] = useState(null);
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('file', file);
    console.log(formData)
    try {
      const response = await axiosClient.post('parse-excel-order', formData, {
         headers: {
           "Content-Type": "multipart/form-data",
         },
       });
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  return (
    <>
      <form  onSubmit={handleSubmit} style={{width: '500px', height: '100px', paddingTop: '50px', textAlign: 'center',marginLeft: '300px', marginTop: '30px', border: '2px solid green'}} >
      <label htmlFor="file">Select an Excel file:</label>
      <input type="file" id="file" onChange={handleFileChange} style={{color:'red', paddingLeft: '50px' }}/>
      <button type="submit">Upload</button>
    </form>
    </>
  

  );
}

export default FileUploadForm;

/*import React, { useState } from "react";
import { axiosClient } from "../../utils/axiosClient";
const SingleFileUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      alert("Please first select a file");
      return;
    }

    const formData = new FormData();
    formData.append("file", selectedFile);

    try {
      // Replace this URL with your server-side endpoint for handling file uploads
      const response = await axiosClient.post("parse-excel-order", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log(response.data);

      if (response.ok) {
        alert("File upload is successfully");
      } else {
        alert("Failed to upload the file due to errors");
      }
    } catch (error) {
      console.error("Error while uploading the file:", error);
      alert("Error occurred while uploading the file");
    }
  };

  return (
    <div>
      <h2>Single File Upload</h2>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
};
export default SingleFileUpload;*/
