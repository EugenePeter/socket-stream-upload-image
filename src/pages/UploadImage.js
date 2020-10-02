import React, { useContext, useState, useCallback } from "react";
import cuid from "cuid";


import Dropzone from "../components/dropzone-component/Dropzone";
import ImageList from "../components/dropzone-component/UploadPreview";

import { Container, ContainerNarrower, TitleContainer } from './UploadImage.styles';
import {LoaderCircle, Loader} from '../components/loader/loader'



const UploadImage = (props) => {
    const { socket, ss } = props;
    const [images, setImages] = useState([]);
    const [ isLoading, setIsLoading] = useState(false)
    
    
    const onDrop = useCallback((acceptedFiles) => {
        const stream = ss.createStream();

        // Loop through accepted files
        acceptedFiles.map((file, index) => {

            // Initialize FileReader browser API
            const reader = new FileReader();

            // onload callback gets called after the reader reads the file data
            reader.onload = function (e) {

                // add the image into the state. 
                setImages((prevState) => [...prevState, { id: cuid(), src: e.target.result, filename: file.name }]);
            };

            // Read the file as Data URL
            reader.readAsDataURL(file);

            setIsLoading(true)
            return file;
        });

        ss(socket).emit("upload_stream", stream, {
            user: "pedro",
            name: acceptedFiles[0].name,
            size: acceptedFiles[0].size
        });


        const upload = ss.createBlobReadStream(acceptedFiles[0]).pipe(stream);

        upload.on('end', () => {
            setIsLoading(true)
            console.log("done reading")
        })

        upload.on('close' , () => {
            
        })

        socket.on("loader", (data) => {
            console.log("loading:", data)
        })

        console.log("from upload image component", acceptedFiles);
    }, []);

    console.log(images)

    return (
        <Container>
            <ContainerNarrower>
                <TitleContainer>
                    <h2>Upload</h2> {""}
                    <small>Upload any files here</small>
                </TitleContainer>
                <Dropzone onDrop={onDrop} accept={"image/*,video/*"} />
                {isLoading ? <LoaderCircle /> : '' }
                <ImageList images={images} />
            </ContainerNarrower>
        </Container>
    );
}

export default UploadImage