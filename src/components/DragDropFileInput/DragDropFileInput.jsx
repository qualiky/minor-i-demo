import React, { useState } from "react";
import styles from "./DragDropFileInput.module.css";

const DragDropFileInput = ({ name, onFileSelect, currentFile }) => {
  const [isDragging, setIsDragging] = useState(false);

  const handleDragEnter = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    // Only set dragging to false if the mouse is leaving the component entirely
    // Check relatedTarget to see if it's moving to a child element
    if (!e.currentTarget.contains(e.relatedTarget)) {
      setIsDragging(false);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
    // Add a visual cue when dragging over the correct drop zone
    if (!isDragging) {
      setIsDragging(true);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);

    const files = e.dataTransfer.files;
    if (files && files.length > 0) {
      // Simulate processing the first file
      console.log("Dropped file:", files[0]);
      onFileSelect(files[0]); // Pass the file object to the parent
    }
  };

  const handleFileInputChange = (e) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      console.log("Selected file:", files[0]);
      onFileSelect(files[0]); // Pass the file object to the parent
    }
  };

  const handleRemoveFile = () => {
    onFileSelect(null); // Clear the selected file in parent state
  };

  return (
    <div
      className={`${styles.dragDropArea} ${isDragging ? styles.dragging : ""}`}
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
      onClick={() => {
        // Trigger the hidden file input when the area is clicked
        document.getElementById(`file-input-${name}`).click();
      }}
    >
      <input
        type="file"
        id={`file-input-${name}`}
        name={name}
        className={styles.fileInput}
        onChange={handleFileInputChange}
        // The `required` attribute would go here if the file upload was mandatory
        // required={true}
      />
      {currentFile ? (
        <div className={styles.filePreview}>
          <p>
            Selected file: <strong>{currentFile.name}</strong>
          </p>
          {/* Optional: Display image preview if it's an image */}
          {currentFile.type.startsWith("image/") && (
            <img
              src={URL.createObjectURL(currentFile)}
              alt="Selected file preview"
              className={styles.imagePreview}
              onLoad={() => URL.revokeObjectURL(currentFile)} // Clean up object URL
            />
          )}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              handleRemoveFile();
            }}
            className={styles.removeButton}
          >
            Remove
          </button>
        </div>
      ) : (
        <div className={styles.placeholder}>
          <p>Drag & drop a file here, or click to select</p>
          <p className={styles.hint}>(Simulated Upload)</p>
        </div>
      )}
    </div>
  );
};

export default DragDropFileInput;
