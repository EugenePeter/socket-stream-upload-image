import React, { useContext, useState, useCallback } from "react";
import cuid from "cuid";
import chunk from "chunk";

import Dropzone from "../components/dropzone-component/Dropzone";
import ImageList from "../components/dropzone-component/UploadPreview";

import {
    Container,
    ContainerNarrower,
    TitleContainer,
} from "../global-styles/styles";
import { LoaderCircle, Loader } from "../components/loader/loader";

const UploadImage = (props) => {
    const { socket, ss } = props;
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const onDrop = useCallback((acceptedFiles) => {
        const stream = ss.createStream();

        // Loop through accepted files
        acceptedFiles.forEach((file) => {
            // Initialize FileReader browser API
            const reader = new FileReader();

            // onload callback gets called after the reader reads the file data
            reader.onload = function (e) {
                // add the image into the state.
                setImages((prevState) => [
                    ...prevState,
                    { id: cuid(), src: e.target.result, filename: file.name },
                ]);

                let start = Date.now();
                socket.emit("check_time", start);
                // const test = chunk(new Buffer(reader.result), 10000000);
                const chunk_files = chunk(new Buffer(reader.result), 10000000);
                // const chunk_files = chunk(reader.result, 10000000);

                console.log("from reader", reader.result);

                // socket.emit('file_upload' , chunk(new Buffer(reader.result) , 10000000))

                chunk_files.forEach((value, index) => {
                    console.log(value, index);
                    socket.emit("file_upload", {
                        value,
                        length: chunk_files.length,
                        file,
                    });
                });
            };

            // Read the file as Data URL
            reader.readAsDataURL(file);

            setIsLoading(true);
            return file;
        });

        // ss(socket).emit("upload_stream", stream, {
        //     user: "pedro",
        //     name: acceptedFiles[0].name,
        //     size: acceptedFiles[0].size
        // });

        // const upload = ss.createBlobReadStream(acceptedFiles[0]).pipe(stream);

        // upload.on("end", () => {
        //     setIsLoading(false);
        //     console.log("done reading");
        // });

        // upload.on("close", () => {});

        socket.on("loader", (data) => {
            console.log("loading:", data);
        });

        console.log("from upload image component", acceptedFiles);
    }, []);

    console.log(images);
    console.log("is loading", isLoading);

    return (
        <Container>
            <ContainerNarrower>
                <TitleContainer>
                    <h2>Upload</h2> {""}
                    <small>Upload any files here</small>
                </TitleContainer>
                <Dropzone onDrop={onDrop} acceptedFiles={"image/*,video/*"} />
                {isLoading ? <LoaderCircle /> : ""}
                <ImageList images={images} />
            </ContainerNarrower>
        </Container>
    );
};

export default UploadImage;
