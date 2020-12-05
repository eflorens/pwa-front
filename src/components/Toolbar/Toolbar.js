import React, {useState, render} from 'react'
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../assets/logo.svg'
import {Nav, Modal, Button} from "react-bootstrap"
import {Route} from 'react-router'
import UploadPhotoComponant from '../Photo/Upload_photo/UploadPhoto'
import Login from '../Login/Login'
import axios from 'axios'

const API_URL = "https://pwa-back.herokuapp.com";

const Toolbar = (props) => {
    let [isShow, setIsShow] = useState(false);

    const [file, setFile] = useState("")
    const [imagePreviewUrl, setImagePreviewUrl] = useState('')
    
      const _handleSubmit = async (e) => {
        e.preventDefault();
        const token = localStorage.getItem('token')
        var formData = new FormData();
        formData.append("image", file);
        const config = {
          headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'multipart/form-data' }
      };
        const data = await axios.post(`${API_URL}/img`, formData, config)
        if (data) setIsShow(!isShow)
        window.location.reload();
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
          $imagePreview = (<img height='300' width='300' src={imagePreviewUrl} />);
        } else {
          $imagePreview = (<div className="previewText">Please select an Image for Preview</div>);
        }

    return (
    <div>
    <Route exact path="/upload" component={UploadPhotoComponant}/>
    <Route exact path='/login' component={Login}/>
    <Navbar bg="light">
        <Navbar.Brand>
            <img
                alt="Photobox logo"
                src={logo}
                width="30"
                height="30"
                className="d-inline-block align-top"
            /> {' '}
            Photobox
        </Navbar.Brand>
        <Nav className="mr-auto">
            <Nav.Link href="#home">Profile</Nav.Link>
            <Nav.Link onClick={() => {
            
                setIsShow(!isShow)
            }}>Add photo</Nav.Link>
        </Nav>
        <Nav className="mr-right">
            <Nav.Link to='/login' href='/login' onClick={() => {
                localStorage.removeItem("token");
            }}>Disonnect</Nav.Link>
        </Nav>
    </Navbar>
    <Modal show={isShow}>
        <Modal.Body>
        <div style={{'margin': '0 auto', width: '50%'}}>
              <form onSubmit={(e)=>_handleSubmit(e)}>
                <input className="fileInput" 
                  type="file" 
                  onChange={(e)=>_handleImageChange(e)} />
              </form>
              <div className="imgPreview">
                {$imagePreview}
              </div>
            </div>
        </Modal.Body>
        <Modal.Footer>
            <Button variant="secondary" onClick={() => {
                setIsShow(!isShow)
            }}>Close</Button>
            <Button className="submitButton" 
                    variant="primary"
                  type="submit" 
                  onClick={(e)=>_handleSubmit(e)}>Upload Image</Button>
        </Modal.Footer>
    </Modal>
    </div>
    )
}


export default Toolbar;