import React from 'react';
import { Container } from './styles';
import { FaUser, FaGraduationCap, FaFire } from 'react-icons/fa'

const Inicio = () => {
    return (
        <Container>
            <div className="content">
                <div className="mobile">
                    <div className="wrapper">
                        <div className="title">
                            <h1>Olá, me chamo <strong>Douglas Welber</strong></h1>
                        </div>
                        <div className="text">
                            <span>Desenvolvedor Front-end | React Js</span>
                        </div>
                    </div>

                    <div className="border"></div>

                    <div className="infos">
                        <div className="card about-me">
                            <div className="title">
                                <FaUser id='icon' />
                            </div>

                            <div className="text">
                                <p>Sou um desenvolvedor Front-end com experiência em aplicações em produção utilizando React Js e Next Js. Sou bolsista em análise e desenvolvimento de sistemas na FIAP, me apaixonei por tecnologia quando entrei no curso e no momento, estou buscando aprimorar meus conhecimentos no desenvolvimento web.</p>
                            </div>
                        </div>

                        <div className="card education">
                            <div className="title">
                                <FaGraduationCap id='icon' />
                            </div>

                            <div className="text">
                                <p>Participei de um processo seletivo para concorrer a uma bolsa integral para cursar Análise e Desenvolvimento de Sistemas em uma das melhores faculdades de tecnologia e fui contemplado durante dois anos (duração da graduação em tecnólogo).</p>
                            </div>
                        </div>

                        <div className="card skills">
                            <div className="title">
                                <FaFire id='icon' />
                            </div>

                            <div className="text">
                                <p>React Js | Next Js | JavaScript | Styled-Components | Node Js | GIT | GitHub | HTML | CSS | Mobile-First | Typescript | Atomic Design | HTTP | RESTFUL API</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default Inicio;