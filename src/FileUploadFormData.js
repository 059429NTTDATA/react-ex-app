import axios from "axios";
import React, { Component } from "react";

class FileUploadFormData extends Component {
  state = {
    // Initially, no file is selected
    selectedFile: null,
  };

  // On file select (from the pop up)
  onFileChange = (event) => {
    // Update the state
    this.setState({ selectedFile: event.target.files });
  };

  // On file upload (click the upload button)
  onFileUpload = () => {
    // console.log(this.state.selectedFile)
    // Create an object of formData
    const formData = new FormData();
    formData.append("auctionId", "1");
    Array.from(this.state.selectedFile).forEach((file) => {
      // Update the formData object
      formData.append("fileImage", file);
    });
    // Request made to the backend api
    // Send formData object
    axios.post("http://localhost:8083/api/v1/updateAuctionImages", formData);
  };

  render() {
    return (
      <div>
        <h3>File Upload using FormData Type</h3>
        <div>
          <input type="file" onChange={this.onFileChange} multiple />
          <button onClick={this.onFileUpload}>Upload!</button>
        </div>
      </div>
    );
  }
}

export default FileUploadFormData;
