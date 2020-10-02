import React from "react";

import {
    DropzonePreview,
    ImageContainer,
    ImageWrapper,
    Img
} from "./Dropzone.styles";
import cuid from "cuid";

// Rendering individual images

// ImageList Component
const ImageList = ({ images }) => {
    // render each image by calling Image component
    console.log("images", images)
    // Return the list of files
    return (
        <DropzonePreview className="file-list">
            <h3>{images[0] ? "Uploaded Files" : ""} </h3>

            {images.map((images, index) => {
                return (
                    <>
                        <ImageWrapper className="file-item" key={images.id}>
                            <span>{images.filename}</span>
                        </ImageWrapper>
                        <ImageContainer key={cuid()}> 
                            <Img src={images.src}  />
                        </ImageContainer>
                    </>
                );
            })}
        </DropzonePreview>
    );
};

export default ImageList;