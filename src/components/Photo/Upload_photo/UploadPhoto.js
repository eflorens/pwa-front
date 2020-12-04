import React from "react";
import { useEffect, useState } from 'react';
import axios from 'axios'

const API_URL = "https://pwa-back.herokuapp.com";

const UploadPhotoComponant = () => {
    const [file, setFile] = useState("")
    const [imagePreviewUrl, setImagePreviewUrl] = useState('')
    
      const _handleSubmit = async (e) => {
        e.preventDefault();
        // TODO: do something with -> this.state.file
        console.log('handle uploading-', file);
        const token = localStorage.getItem('token')
        var formData = new FormData();
        formData.append("image", file);
        const config = {
          headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'multipart/form-data' }
      };
        const data = await axios.post(`${API_URL}/img`, formData, config)
        console.log(data)
      }
    
      const _handleImageChange = (e) => {
        e.preventDefault();
    
        let reader = new FileReader();
        let file = e.target.files[0];
    
        reader.onloadend = () => {
            setFile(file)
            setImagePreviewUrl(reader.result)
        }
    
        reader.readAsDataURL(file)
      }
    
      
        let $imagePreview = null;
        if (imagePreviewUrl) {
          $imagePreview = (<img src={imagePreviewUrl} />);
        } else {
          $imagePreview = (<div className="previewText">Please select an Image for Preview</div>);
        }
    
        return (
          
            <div style={{'margin': '0 auto', width: '50%'}}>
              <form onSubmit={(e)=>_handleSubmit(e)}>
                <input className="fileInput" 
                  type="file" 
                  onChange={(e)=>_handleImageChange(e)} />
                <button className="submitButton" 
                  type="submit" 
                  onClick={(e)=>_handleSubmit(e)}>Upload Image</button>
              </form>
              <div className="imgPreview">
                {$imagePreview}
              </div>
            </div>
          );
      };

export default UploadPhotoComponant;