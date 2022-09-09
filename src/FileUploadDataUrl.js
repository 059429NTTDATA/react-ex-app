import axios from "axios";
import React, { Component } from "react";

class FileUploadDataUrl extends Component {
  state = {
    // Initially, no file is selected
    selectedFile: [],
  };

  // On file select (from the pop up)
  onFileChange = (event) => {
    let imagesDataUrl = [];
    // Update the state
    let files = event.target.files;
    Object.keys(files).forEach((i) => {
      const file = files[i];
      const reader = new FileReader();
      reader.onload = (e) => {
        imagesDataUrl.push(e.target.result);
      };
      reader.readAsDataURL(file);
    });
    this.setState({ selectedFile: imagesDataUrl });
  };

  // On file upload (click the upload button)
  onFileUpload = () => {
    // console.log(this.state.selectedFile)
    const payload = {
      fileImages: this.state.selectedFile,
      auctionId: "1",
    };
    axios.post("http://localhost:8083/api/v1/updateAuctionImagesBase64", payload);
  };

  render() {
    return (
      <div>
        <h3>File Upload using DataUrl Json</h3>
        <div>
          <input type="file" onChange={this.onFileChange} multiple />
          <button onClick={this.onFileUpload}>Upload!</button>
        </div>
      </div>
    );
  }
}

export default FileUploadDataUrl;
