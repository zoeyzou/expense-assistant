import React from 'react';
import ReactDropzone from 'react-dropzone';

import styles from './FileUploader.css';
import { ExpenseContext } from '../../../../Contexts/ExpenseContext';


const FileUploader = (props) => {

  // onDrop = (files) => {
  //   files.forEach(file => console.log(file));
  // }

  const onDrop = (files) => {
    console.log(files[0]);
    this.setState({
      files: this.state.files.concat(files),
     });
  }

  const previewImg = (files) => {
    console.log(files);
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

  return (
    <ExpenseContext.Consumer>
      {
        context => (
          <React.Fragment>
            <span>{props.title} </span>
            <ReactDropzone
              className={styles.drop}
              accept="image/*"
              onDrop={(files) => context.onFileDrop(files)}
            >
              <span><i className="fas fa-upload"></i> Upload receipts</span>
            </ReactDropzone>
            {/* <input type="file" name="uploadedFile" onClick={(files) => context.onFileDrop(files)} /> */}
            {context.files.length ?
              previewImg(context.addedFiles.concat(context.addedFiles)) :
              previewImg(context.addedFiles)
            }
          </React.Fragment>
        )
      }
      
    </ExpenseContext.Consumer>
  )

};

export default FileUploader;
