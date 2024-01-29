import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import './style.css';

const ImageUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [fileName, setFileName] = useState('No file selected');
  const fileInputRef = useRef(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
    setImageUrl(URL.createObjectURL(file));
    setFileName(file ? file.name : 'No file selected');
  };

  const handleButtonClick = async () => {
    if (!selectedFile) {
      console.error('File is undefined');
      return;
    }

    let formData = new FormData();
    formData.append('file', selectedFile);

    try {
      setIsLoading(true);
      let response = await axios({
        method: 'post',
        url: process.env.REACT_APP_API_URL,
        data: formData,
      });

      if (response.status === 200) {
        setData(response.data);
      }
    } catch (error) {
      console.error('Error uploading file:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const clearData = () => {
    setData(null);
    setSelectedFile(null);
    setImageUrl(null);
    setFileName('No file selected');

    // Clear the file input value using the ref
    if (fileInputRef.current) {
      fileInputRef.current.value = null;
    }
  };

  return (
    <div className="mainContainer">
      <h1 className="Title">Medicinal Plant Species Identification</h1>
      <div className="formContainer">
        <label className="customFileInput">
          <input type="file" accept="image/*" onChange={handleFileChange} ref={fileInputRef} style={{ display: 'none' }} />
          <span>Choose File</span>
        </label>
        <span style={{color: "#fff"}}>{fileName}</span>
        <button onClick={handleButtonClick} className="uploadButton">
          Upload and Process
        </button>
        <p className="Description">
  Please upload an image containing a single leaf from a medicinal plant for identification. Our model is currently capable of identifying 47 plant species, including but not limited to:

<ul className="PlantList">
  <li>Aloevera</li>
  <li>Amla</li>
  <li>Amruthaballi</li>
  <li>Arali</li>
  <li>Astma_weed</li>
  <li>Badipala</li>
  <li>Balloon_Vine</li>
  <li>Bamboo</li>
  <li>Beans</li>
  <li>Betel</li>
  <li>Bhrami</li>
  <li>Bringaraja</li>
  <li>Caricature</li>
  <li>Castor</li>
  <li>Catharanthus</li>
  <li>Chakte</li>
  <li>Chilly</li>
  <li>Citron lime (herelikai)</li>
  <li>Coffee</li>
  <li>Common rue (naagdalli)</li>
  <li>Coriander</li>
  <li>Curry</li>
  <li>Doddpathre</li>
  <li>Ekka</li>
  <li>Eucalyptus</li>
  <li>Ganigale</li>
  <li>Ganike</li>
  <li>Gasagase</li>
  <li>Ginger</li>
  <li>Globe Amarnath</li>
  <li>Guava</li>
  <li>Henna</li>
  <li>Hibiscus</li>
  <li>Honge</li>
  <li>Insulin</li>
  <li>Jackfruit</li>
  <li>Jasmine</li>
  <li>Kambajala</li>
  <li>Kasambruga</li>
  <li>Lemon</li>
  <li>Malabar Nut</li>
  <li>Malabar Spinach</li>
  <li>Mango</li>
  <li>Marigold</li>
  <li>Ashoka</li>
  <li>Camphor</li>
  <li>Kamakasturi</li>
</ul>

<p>
  Feel free to provide the image, and we'll assist you in identifying the plant species.
</p>
</p>
        {data && (
          <div className="resultContainer">
            {imageUrl && <img src={imageUrl} alt="Uploaded" className="uploadedImage" />}
            <p className="resultValue">{data}</p>
          </div>
        )}
        {isLoading && <p className="loading">Processing...</p>}
      </div>
      <div className="buttonGrid">
        {data && (
          <button onClick={clearData} className="clearButton">
            Clear
          </button>
        )}
      </div>
    </div>
  );
};

export default ImageUpload;
