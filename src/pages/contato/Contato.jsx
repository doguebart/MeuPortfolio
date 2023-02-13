import React from 'react';
import { Container } from './styles';

import { FaLinkedin, FaGithub, FaEnvelope, FaPhone, FaYoutube } from 'react-icons/fa'

const Contato = () => {
    return (
        <Container>
            <div className="content">
                <div className="mobile">
                    <div className="main-title">
                        <h1>Contato</h1>
                    </div>

                    <div className="card linkedin">
                        <div className="title">
                            <FaLinkedin id='icon' />
                        </div>

                        <div className="text">
                            <a href="https://www.linkedin.com/in/douglaswelber/" target='_blank'>Douglas Welber</a>
                        </div>

                    </div>

                    <div className="card github">
                        <div className="title">
                            <FaGithub id='icon' />
                        </div>

                        <div className="text">
                            <a href="https://github.com/doguebart" target='_blank'>Doguebart</a>
                        </div>

                    </div>

                    <div className="card email">
                        <div className="title">
                            <FaEnvelope id='icon' />
                        </div>

                        <div className="text">
                            <span>douglas.welber@outlook.com</span>
                        </div>

                    </div>

                    <div className="card phone">
                        <div className="title">
                            <FaPhone id='icon' />
                        </div>

                        <div className="text">
                            <span>+55 11 93398-6562</span>
                        </div>

                    </div>

                    <div className="card youtube">
                        <div className="title">
                            <FaYoutube id='icon' />
                        </div>

                        <div className="text">
                            <a href="" target='_blank'>Doguebart</a>
                        </div>

                    </div>
                </div>
            </div>
        </Container>
    )
}

export default Contato;