import React, { useState } from 'react';
import {axiosClient} from '../../utils/axiosClient';

function FileUploadForm() {
  const [file, setFile] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('file', file);
    try {
      const response = await axiosClient.post('/parse-excel', formData);
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
      <form onSubmit={handleSubmit} style={{width: '500px', height: '100px', paddingTop: '50px', textAlign: 'center',marginLeft: '300px', marginTop: '30px', border: '2px solid green'}} >
      <label htmlFor="file">Select an Excel file:</label>
      <input type="file" id="file" onChange={handleFileChange} style={{color:'red', paddingLeft: '50px' }}/>
      <button type="submit">Upload</button>
    </form>
    </>
  

  );
}

export default FileUploadForm;