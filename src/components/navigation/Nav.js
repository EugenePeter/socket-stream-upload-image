import React from 'react';
import { NavContainer, LinkWrapper } from './styles';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <NavContainer>
            <LinkWrapper>
                <Link to="/">upload</Link>
                <Link to="/image-viewer">view image</Link>
            </LinkWrapper>
        </NavContainer>
    )
}

export default Navigation