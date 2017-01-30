import React from "react";


import cameraPhoto from "./img/cameraIcon.jpg"
import s from "./Camera.css"
import Dropzone from 'react-dropzone';
import request from 'superagent';



const CLOUDINARY_UPLOAD_PRESET = 'p4parhk9';
const CLOUDINARY_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/xinzheng/image/upload';


// Camera page component
class Camera extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      wait: false,
      uploadedFileCloudinaryUrl: ''
    };
    this.handleImageUpload = this.handleImageUpload.bind(this)
  };


  onImageDrop(files) {
    this.setState({
      uploadedFile: files[0],
      wait: true,
    });

    this.handleImageUpload(files[0]);
  }

  handleImageUpload(file) {
    let upload = request.post(CLOUDINARY_UPLOAD_URL)
      .field('upload_preset', CLOUDINARY_UPLOAD_PRESET)
      .field('file', file);

    let ocr = request
      .post("https://westus.api.cognitive.microsoft.com/vision/v1.0/ocr?language=unk&detectOrientation =true")
      .set("Content-Type", "application/json")
      .set("Ocp-Apim-Subscription-Key", "3d83736d23714e8b908d3257b0efa731")
      .send({url: this.state.uploadedFileCloudinaryUrl});


    upload.end((err, response) => {
      if (err) {
        console.error(err);
      }

      if (response.body.secure_url !== '') {
        this.setState({
          uploadedFileCloudinaryUrl: response.body.secure_url
        });


      let ocr = request
        .post("https://westus.api.cognitive.microsoft.com/vision/v1.0/ocr?language=unk&detectOrientation =true")
        .set("Content-Type", "application/json")
        .set("Ocp-Apim-Subscription-Key", "3d83736d23714e8b908d3257b0efa731")
        .send({url: this.state.uploadedFileCloudinaryUrl});

      ocr.end((err, response) => {
        if (err) {
          console.error(err);
        }

        this.props.receiveOCR(response.text);
        this.props.receiveURL(this.state.uploadedFileCloudinaryUrl)
        console.log(response);
        this.props.router.push('/calendar');
        });


      }
    });
  }


  render() {

    return (

      <div className={s.appWrap}>

        <div className={s.areaHeading}>

          <button className={s.buttonSignOut}><i className="fa fa-sign-out  fa-2.5x"/></button>
          <h1>Camera</h1>
          <div className={s.empty}></div>

        </div>

        <div className={s.areaContent}>

          <div className={s.instruction}>
            <h1>Click to shot or upload a poster</h1>
          </div>

          <Dropzone className = {s.camera}
            multiple={false}
            accept="image/*"
            onDrop={this.onImageDrop.bind(this)}>
            <i className="fa fa-camera"/>
            {this.state.wait ? <p className={s.blink}>waiting...</p> : null }
          </Dropzone>

        </div>

      </div>

    );
  }
}
export default Camera
