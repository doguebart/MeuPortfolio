import React from 'react';
import { Container } from './styles';

import { FaEnvelope } from 'react-icons/fa'

const Footer = () => {
    return(
        <Container>
            <div className="content">
                <span>Created by <strong>Douglas Welber</strong></span>
                <span><FaEnvelope id='icon'/>douglas.welber@outlook.com</span>
            </div>
        </Container>
    )
}

export default Footer;