import React from "react";
import { useEffect, useState } from 'react';
import {Modal} from 'react-bootstrap'

const UploadPhotoComponant = () => {
    const [file, setFile] = useState("")
    const [imagePreviewUrl, setImagePreviewUrl] = useState('')
    
      const _handleSubmit = (e) => {
        e.preventDefault();
        // TODO: do something with -> this.state.file
        console.log('handle uploading-', file);
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
          <Modal>
            <div className="previewComponent">
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
            </Modal>
          );
      };

export default UploadPhotoComponant;