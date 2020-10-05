import React from "react";

import { Container, ContainerNarrower, TitleContainer } from '../global-styles/styles';

const ImageViewer = (props) => {

    console.log(props.loading)

    return (
        <Container>
            <ContainerNarrower>
                <TitleContainer>
                    <h1>{props.loader} loading</h1>
                    <h2>image viewer</h2> {""}
                    <small>looking isn't it?</small>
                </TitleContainer>
            </ContainerNarrower>
        </Container>
    );
}

export default ImageViewer