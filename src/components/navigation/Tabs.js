import React from 'react';
import { NavContainer, LinkWrapper, TabsWrapper, StyledLink } from './styles';
import { Link } from 'react-router-dom';

const Tabs = () => {
    return (
            <TabsWrapper>
                <StyledLink exact to="/">upload</StyledLink>
                <StyledLink to="/image-viewer">view image</StyledLink>
            </TabsWrapper>
    )
}

export default Tabs