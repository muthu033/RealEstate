import React, { Fragment, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'boxicons/css/boxicons.min.css';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';


import './input.css';


const FileUploader = () => {
  const [files, setFiles] = useState([]);
  const [completedFiles, setCompletedFiles] = useState(0);

  const handleSelectedFiles = (fileList) => {
    const newFiles = Array.from(fileList).map((file, index) => ({
      id: `${Date.now()}-${index}`,
      file,
      progress: 0,
      status: 'Uploading...',
      color: '#5145BA',
    }));
    setFiles((prevFiles) => [...newFiles, ...prevFiles]);
    newFiles.forEach((fileItem) => uploadFile(fileItem));
  };

  const uploadFile = (fileItem) => {
    const xhr = new XMLHttpRequest();
    const formData = new FormData();
    formData.append("file", fileItem.file);

    xhr.upload.addEventListener("progress", (e) => {
      const progress = Math.round((e.loaded / e.total) * 100);
      setFiles((prevFiles) =>
        prevFiles.map((f) => (f.id === fileItem.id ? { ...f, progress } : f))
      );
    });

    xhr.addEventListener("load", () => {
      setFiles((prevFiles) =>
        prevFiles.map((f) =>
          f.id === fileItem.id
            ? { ...f, status: 'Completed', color: '#00B125' }
            : f
        )
      );
      setCompletedFiles((prev) => prev + 1);
    });

    xhr.addEventListener("error", () => {
      setFiles((prevFiles) =>
        prevFiles.map((f) =>
          f.id === fileItem.id ? { ...f, status: 'Error', color: '#E3413F' } : f
        )
      );
    });

    xhr.open("POST", "api.php", true);
    xhr.send(formData);
  };

  const cancelUpload = (fileId) => {
    setFiles((prevFiles) =>
      prevFiles.map((f) =>
        f.id === fileId ? { ...f, status: 'Cancelled', color: '#E3413F' } : f
      )
    );
  };

  const deleteFile = (fileId) => {
    setFiles((prevFiles) => prevFiles.filter((f) => f.id !== fileId));
    setCompletedFiles((prev) => prev - 1); // Adjust completed file count if necessary
  };

  const onFileDrop = (e) => {
    e.preventDefault();
    handleSelectedFiles(e.dataTransfer.files);
  };

  return (
    <Fragment>
      
      
    <div className="file-uploader card shadow p-4">
      <div className="card-header d-flex justify-content-between align-items-center">
        <h2 className="card-title">File Uploader</h2>
        <h4 className="text-muted">{completedFiles} / {files.length} files completed</h4>
      </div>
      <ul className="list-group file-list">
        {files.map((file) => (
          <li className="list-group-item file-item" key={file.id}>
            <div className="file-details">
              <div className="file-extension badge bg-primary text-white">
                {file.file.name.split('.').pop().toUpperCase()}
              </div>
              <div className="file-content-wrapper ms-3">
                <div className="d-flex justify-content-between align-items-center">
                  <h5 className="file-name">{file.file.name}</h5>
                  <div>
                  <button className="cancel-button" onClick={() => cancelUpload(file.id)}>
  <i className="bx bx-x"></i> Cancel
</button>
<button className="delete-button ms-2" onClick={() => deleteFile(file.id)}>
  <i className="bx bx-trash"></i> Delete
</button>
                  </div>
                </div>
                <div className="file-info">
                  <small className="text-muted">{file.progress}% completed</small>
                  <small className="ms-2 text-muted" style={{ color: file.color }}>
                    {file.status}
                  </small>
                </div>
                <div className="progress mt-2">
                  <div className="progress-bar" role="progressbar" style={{ width: `${file.progress}%`, backgroundColor: file.color }}></div>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <div
        className="file-upload-box border-dashed p-5 mt-3 text-center"
        onDrop={onFileDrop}
        onDragOver={(e) => e.preventDefault()}
      >
        <p className="mb-1">Drag files here or <span className="text-primary" role="button" onClick={() => document.getElementById('fileInput').click()}>browse</span></p>
        <input id="fileInput" type="file" className="d-none" multiple onChange={(e) => handleSelectedFiles(e.target.files)} />
      </div>
    </div>
    {/* <div>
       <button id='butons'  className='btn4'> <Link className="text-decoration-none text-white" to="/">Submit</Link></button>
    </div> */}

    
    </Fragment>
  );
};

export default FileUploader;
