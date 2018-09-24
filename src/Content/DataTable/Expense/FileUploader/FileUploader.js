import React from 'react';

import styles from './FileUploader.css';

const FileUploader = (props) => {
  return (
    <React.Fragment>
      <span>{props.title}</span>
      <input type="file" name="file" id="file" className={styles.input} />
      <label htmlFor="file" className={styles.FileUploader}>Choose a file AND upload</label>
      <label></label>
    </React.Fragment>
    
  )
};

export default FileUploader;
