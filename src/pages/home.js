import React from 'react'
import styles from './home.module.css'
import picProfile from '../img/img-profile.png'
import girlCoding from '../img/girl-coding.png'
import calculatorImg from '../img/calculator.png'
import recepieBook from '../img/recepie-book.png'
import spotifyProj from '../img/spotify.png'
import checkList from '../img/check-list.png'
import construcIcon from '../img/constucao.png'
import outlookIcon from '../img/outlook-icon.png'
import gmailIcon from '../img/gmail-img.jpeg'
import githubIcon from '../img/github-img.png'
import downloadIcon from '../img/download-icon.png'
import linkedinIcon from '../img/linkedin-img.png'
import myCV from '../cv/Gousilin-Silva-CV.pdf'

import { Link } from 'react-scroll';
import { TypeAnimation } from 'react-type-animation';

<a href="https://www.flaticon.com/free-icons/file" title="file icons">File icons created by Freepik - Flaticon</a>

const recipientEmail = 'gousilinleandra@gmail.com';

const openGmail = () => {
    const gmailUrl = `https://mail.google.com/mail/u/0/?view=cm&fs=1&to=${encodeURIComponent(recipientEmail)}`;
    window.open(gmailUrl, '_blank');
};

const handleDownload = () => {
    const downloadUrl = myCV; 

    const link = document.createElement('a');
    link.href = downloadUrl;
    link.download = 'Gousilin-Silva-CV.pdf';

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};


const Home = () => {
  return (
    <div className= {styles['bd-home']}>
        <header className= {styles['header-home']}>
            <ul>
                <li><Link to="home" spy={true} smooth={true} offset={-80} duration={500} >Home</Link></li>
                <li><Link to="whoAmI" spy={true} smooth={true} offset={-80} duration={500} >Quem sou eu</Link></li>
                <li><Link to="projects-section" spy={true} smooth={true} offset={-80} duration={500}>Projetos</Link></li>
                <li><Link to="c-section" spy={true} smooth={true} offset={-80} duration={500}>Currículo</Link></li>
            </ul>
        </header>
        <main className= {styles['main-home']} >
            <div className={styles['home-section']} id='home'>
                <div className= {styles['rectangle-container']}>
                    <div className= {styles['rectangle1']}>
                        <div className= {styles['text-home']}>
                            <h1>Gousilin Silva</h1>
                            <h5>Front-end developer | <br/> Análise e Desenvolvimento de Sistemas</h5>
                            <div className={styles['button-home']}>
                                <span><a href='https://www.linkedin.com/in/gousilin-silva-94577b139/' target="_blank" >Linkedin</a></span>
                            </div>
                        </div>
                    </div>
                    <div className= {styles['rectangle2']}></div>
                    <img src={picProfile} alt="Profile Picture" className={styles['img-profile']}/>
                </div>
            </div>
            <div className={styles['pre-section']} id='whoAmI'>
                <div className={styles['pre-title']}>
                    <h1>Quem eu sou?</h1>
                </div>
                
                <div className={styles['container-pre']}>
                    <img src={girlCoding} alt="Girl Developer" className={styles['img-pre']}/>
                    <TypeAnimation
                        sequence={[
                            'Prazer! Me chamo Gousilin, tenho 23 anos e sou formada em Ciências Biomédicas com o título de Mestre pelo Programa de Pós-graduação em Biologia Geral e Aplicada. Estranho, não é? \n Durante a pandemia, no meio do meu programa de mestrado, tive a oportunidade de realizar cursos introdutórios à programação e assim me envolvi (e me apaixonei) com a área da tecnologia. \n Atualmente estou cursando Análise e Desenvolvimento de Sistemas enquanto desenvolvo minhas habilidades como programadora front-end para poder fazer a transição entre carreiras. \n Aprender é meu maior objetivo em vida, pois sei que assim posso evoluir. Sou uma pessoa resiliente e capaz de lidar com múltiplas tarefas em um mesmo período. Adoro trabalhar em equipe e acredito que esse tipo de ambiente favorece o aprendizado.',
                            1000
                          ]}
                          wrapper="span"
                          speed={150}
                          style={{ fontSize: '1em', whiteSpace: 'pre-line', display: 'block'}}
                          repeat={false}
                    
                    />
                    {/*<p className='typing-text' id='present'><span className={styles['span-pre']}>Prazer! Me chamo Gousilin, tenho 23 anos e sou formada em Ciências Biomédicas com o título de Mestre pelo Programa de Pós-graduação em Biologia Geral e Aplicada. Estranho, não é?</span>
                    <span className={styles['span-pre']}>Durante a pandemia, no meio do meu programa de mestrado, tive a oportunidade de realizar cursos introdutórios à programação e assim me envolvi (e me apaixonei) com a área da tecnologia.</span>
                    <span className={styles['span-pre']}>Atualmente estou cursando Análise e Desenvolvimento de Sistemas enquanto desenvolvo minhas habilidades como programadora front-end para poder fazer a transição entre carreiras.</span>
                        <span className={styles['span-pre']}>Aprender é meu maior objetivo em vida, pois sei que assim posso evoluir. Sou uma pessoa resiliente e capaz de lidar com múltiplas tarefas em um mesmo período. Adoro trabalhar em equipe e acredito que esse tipo de ambiente favorece o aprendizado.</span></p> */}
                </div>
                      
            </div>

            <div className={styles['projects-section']} id='projects-section'>
                <div className={styles['pre-title']}>
                    <h1>Projetos</h1>
                </div>
                <div className={styles['projects']}>
                    <div className={styles['projects-boxes']}>
                        <div className={styles['proj-box']}>
                        <a href="https://projeto-calculadora.bohr.io/" target="_blank"><img src={calculatorImg} alt="Calculator Icon" className={styles['img-proj']}/></a>
                        </div>
                        <a href="https://clone-spotify.bohr.io/" target="_blank"><div className={styles['proj-box']}>
                            <img src={spotifyProj} alt="Spotify Icon" className={styles['img-proj']}/>
                        </div></a>
                        <div className={styles['proj-box']}>
                            <img src={construcIcon} alt="Recepie Book Icon" className={styles['img-proj']}/>
                        </div>
                        <div className={styles['proj-box']}>
                            <img src={construcIcon} alt="Check-list Icon" className={styles['img-proj']}/>
                        </div>
                        {/*<div className={styles['proj-box1']}>
                            <img src={construcIcon} alt="Construction Icon" className={styles['img-proj']}/>
                        </div>
                        <div className={styles['proj-box2']}>
                            <img src={construcIcon} alt="Construction Icon" className={styles['img-proj']}/>
                        </div>*/}
                    </div>
                </div>
            </div>
            <div className={styles['curriculum-section']} id='c-section'>

                    <div className={styles['book-es']}>
                        <div className={styles['page1']}>
                            <div className={styles['tag-box1']}> 
                                <div className={styles['tag1']}></div> 
                                <span className={styles['tag-title1']}>Currículo</span>
                            </div>
                            <div className={styles['box-p']}>
                                <h4>Formação</h4>
                                <span>Análise e Desenvolvimento de Sistemas - FATEC (2022-atualmente)</span>
                                <span>Mestrado em Biologia Geral e Aplicada - UNESP (2021-2023)</span>
                                <span>Ciências Biomédicas - UNESP (2017-2022)</span>
                                <span>Técnico em Açúcar e Álcool - ETEC (2015-2016)</span>

                                <h4>Habilidades</h4>
                                        <h5>Informática</h5>
                                            <span className={styles['span1']}>Windows</span>
                                            <span className={styles['span1']}>Pacote Office Avançado</span>
                                        <h5>Desenvolvimento Web</h5>
                                            <span className={styles['span1']}>HTML, CSS, JS, Git, Github</span>
                                            <span className={styles['span1']}>React, SQL, C, NodeJS (Básico)</span>
                                        <h5>Design</h5>
                                            <span className={styles['span1']}>Canva, Figma, Ilustração digital</span>
                            </div>

                        </div>
                        <div className={styles['spiral']}>
                            <div className={styles['spiral-element']}></div>
                            <div className={styles['spiral-element']}></div>
                            <div className={styles['spiral-element']}></div>
                            <div className={styles['spiral-element']}></div>
                            <div className={styles['spiral-element']}></div>
                            <div className={styles['spiral-element']}></div> 
                            <div className={styles['spiral-element']}></div>
                            <div className={styles['spiral-element']}></div>
                            <div className={styles['spiral-element']}></div>
                            <div className={styles['spiral-element']}></div>
                            <div className={styles['spiral-element']}></div>
                            <div className={styles['spiral-element']}></div>
                            <div className={styles['spiral-element']}></div>
                            <div className={styles['spiral-element']}></div>
                            <div className={styles['spiral-element']}></div>
                            <div className={styles['spiral-element']}></div>
                            <div className={styles['spiral-element']}></div>
                            <div className={styles['spiral-element']}></div>
                            <div className={styles['spiral-element']}></div>
                            <div className={styles['spiral-element']}></div>
                            <div className={styles['spiral-element']}></div>
                            <div className={styles['spiral-element']}></div>
                            <div className={styles['spiral-element']}></div>
                            <div className={styles['spiral-element']}></div>
                        </div>
                        <div className={styles['page2']}>
                            <div className={styles['tag-box2']}> 
                                <div className={styles['tag2']}></div> 
                                <span className={styles['tag-title2']}></span>
                            </div>
                            <div className={styles['box-p']}>
                                <h5>Trabalho em equipe</h5>
                                <h5>Gestão de Tempo</h5>
                                <h5>Comunicação</h5>
                                <h5>Inglês Intermediário</h5>

                                <h4>Experiência Profissional</h4>
                                <span>Estagiária em Desenvolvimento - Empresa Quero-Quero (01/2023 - 04/2023)</span>

                                <h4>Informações Adicionais</h4>
                                <span>Trabalho Voluntário (Centro de Voluntariado Universitário de Botucatu) - Coordenadora do Departamento Administrativo & Financeiro (2020-2021)</span>
                                <span>Trabalho Voluntário (Centro de Voluntariado Universitário de Botucatu) - Diretora do Departamento Administrativo & Financeiro (2022)</span>
                            </div>
                            <div className={styles['img-container']}>
                                <img src={downloadIcon} alt="Download Icon" className={styles['img-down']} onClick={handleDownload}/> 
                            </div>

                        </div>
                    </div>
            </div>
        </main>
        <footer className={styles['footer-home']}>
            <div className={styles['footer-links']}>
                <a href='https://www.linkedin.com/in/gousilin-silva-94577b139/' target="_blank"><img src={linkedinIcon} alt="Linkedin Icon" className={styles['img-footer']}/></a> 
                <a href='https://github.com/gousilin' target="_blank"><img src={githubIcon} alt="GitHub Icon" className={styles['img-footer']}/></a> 
                <img src={gmailIcon} alt="Gmail Icon" className={styles['img-footer']} onClick={openGmail}/>  

            </div>
            <div className={styles['footer-by']}>
                <h5>
                    By Gousilin Silva - 2023
                </h5>
                <h5>
                    gousilin.silva@outlook.com
                </h5>
            </div>
        </footer>
    </div>
  )
}

export default Home