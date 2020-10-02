import React from "react";

import { LoaderWrapper } from "./loading.styles";

export const Loader = () => {
    return (
        <LoaderWrapper>
            <div className="lds-ellipsis">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </LoaderWrapper>
    );
};

export const LoaderCircle = () => {
    return (
        <LoaderWrapper>
            <div className="lds-roller">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </LoaderWrapper>
    );
};
