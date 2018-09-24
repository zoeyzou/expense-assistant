import React, {Component} from 'react';

import styles from './FileUploader.css';
import ReactDropzone from 'react-dropzone';

class FileUploader extends Component {
  state = {
    files: []
  }

  onDrop = (files) => {
    files.forEach(file => console.log(file));
  }

  onPreviewDrop = (files) => {
    console.log(files[0]);
    this.setState({
      files: this.state.files.concat(files),
     });
  }

  previewImg = (files) => {
    if (files.length > 0) {
      return (
        <div>
          {files.map((file) => (
            <img
              alt="Preview"
              key={file.preview}
              src={file.preview}
              className={styles.imgPreview}
            />
        ))}
        </div>
      )
    }
  }

  render () {

    return (
    <React.Fragment>
      <span>{this.props.title} </span>
      <ReactDropzone
        className={styles.drop}
        accept="image/*"
        onDrop={this.onPreviewDrop}
      >
        <span><i class="fas fa-upload"></i> Upload receipts</span>
      </ReactDropzone>
      {this.previewImg(this.state.files)}
    </React.Fragment>

    
  )
    }
};

export default FileUploader;
