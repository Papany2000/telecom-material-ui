
import React, { useState } from 'react';
import { Button, Input } from '@mui/material';
import {axiosClient} from '../../utils/axiosClient';
import {useNavigate} from 'react-router-dom';

function FileExselForm() {
  const [file, setFile] = useState(null);
  const navigate = useNavigate()
  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };
  const Submit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('file', file);
    try {
      const response = await axiosClient.post('/parse-excel-company', formData, {
  headers: {
    "Content-Type": "multipart/form-data",
  }}); 
      if (response.data) {
        navigate('/')
     }
   
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div style={{marginTop: '100px', textAlign: 'center'}}>
      <Input
        type="file"
        onChange={handleFileChange}
      />
      <Button onClick={Submit} variant="contained" color="primary">
        Загрузить файл
      </Button>
    </div>
  );
}

export default FileExselForm; 