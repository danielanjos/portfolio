import React, { Component } from 'react';
import {
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaPhp,
  FaBootstrap,
  FaCss3,
  FaGitAlt,
  FaHtml5
} from 'react-icons/fa';
import { DiDotnet, DiJavascript1, DiJqueryLogo, DiMysql, DiDatabase, DiVisualstudio } from 'react-icons/di'

import { Fade, Zoom } from 'react-reveal';

import Projetos from '../Projetos';

import './index.css';
import './menu.css';
import './sobre.css';

import perfilImg from '../../assets/perfil.jpg';


export default class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstLoad: true,
      showTxtOla: false,
      showMenuLateral: false,
      showTxtSobre: false,
      showDvProjetos: false,
      showModal: false,
    };
  }

  componentDidMount() {
    window.onscroll = () => this.handleScroll();
    // window.ontouchmove = () => this.handleScroll();
  }

  componentWillMount() {
    setInterval(() => {
      if (this.state.firstLoad)
        this.setState({ firstLoad: false, showTxtOla: true, showMenuLateral: false, showTxtSobre: false, showDvProjetos: false })
    }, 200);
  }

  handleScroll(e) {
    let paginaInicial = document.querySelector('.pagina-inicial');
    let paginaInicialRect = paginaInicial.getBoundingClientRect();
    let sobreMim = document.querySelector('.sobre-mim');
    let sobreMimRect = sobreMim.getBoundingClientRect();

    if (paginaInicialRect.top > -200) {
      this.setState({ showTxtOla: true, showMenuLateral: false, showTxtSobre: false, showDvProjetos: false });
    } else if (paginaInicialRect.top < -201 && sobreMimRect.top > -50) {
      this.setState({ showTxtOla: false, showMenuLateral: true, showTxtSobre: true, showDvProjetos: false });
    } else if (sobreMimRect.top < -51) {
      this.setState({ showTxtSobre: false, showDvProjetos: true });
    }
  }

  render() {
    return (

      <div className="container">
        <div className="menu">
          <section className="menu-lateral">
            <Fade left cascade when={this.state.showMenuLateral}>
              <div className="imgPerfil">
                <img src={perfilImg} alt="Daniel Anjos" />
              </div>
            </Fade>
            <div className="titulo-perfil" >
              <Zoom delay={250} when={this.state.showMenuLateral}>
                <span className="fonte-roxa nome">Daniel</span>
              </Zoom>
              <Zoom delay={250} when={this.state.showMenuLateral}>
                <span className="profissao">Desenvolvedor</span>
              </Zoom>
            </div>


            <div className="icones">
              <Fade left cascade when={this.state.showMenuLateral}>
                <ul>
                  <li>
                    <FaHtml5 size={32} className="icon" color="#FFF" title="Html5" />
                  </li>
                  <li>
                    <FaCss3 size={32} className="icon" color="#FFF" title="Css3" />
                  </li>
                  <li>
                    <FaPhp size={32} className="icon" color="#FFF" title="PHP" />
                  </li>
                  <li>
                    <FaBootstrap size={32} className="icon" color="#FFF" title="Bootstrap" />
                  </li>
                  <li>
                    <FaGitAlt size={32} className="icon" color="#FFF" title="Git" />
                  </li>
                  <li>
                    <DiDotnet size={32} className="icon" color="#FFF" title=".NET" />
                  </li>
                  <li>
                    <DiJavascript1 size={32} className="icon" color="#FFF" title="JavaScript" />
                  </li>
                  <li>
                    <DiJqueryLogo size={32} className="icon" color="#FFF" title="JQuery" />
                  </li>
                  <li>
                    <DiMysql size={32} className="icon" color="#FFF" title="MySQL" />
                  </li>
                  <li>
                    <DiDatabase size={32} className="icon" color="#FFF" title="SQL" />
                  </li>
                  <li>
                    <DiVisualstudio size={32} className="icon" color="#FFF" title="Visual Studio" />
                  </li>
                </ul>
              </Fade>
            </div>


            <nav>
              <Fade left cascade when={this.state.showMenuLateral}>
                <ul>
                  <li><a href="https://www.linkedin.com/in/dmartins-anj/"> <span>LinkedIn</span> <FaLinkedin size={24} className="icon" color="#FFF" /></a></li>
                  <li><a href="https://github.com/danielanjos/"><span>Github</span> <FaGithub size={24} className="icon" color="#FFF" /></a></li>
                  <li><a href="https://www.facebook.com/dmartins.anj"><span>Facebook</span> <FaFacebook size={24} className="icon" color="#FFF" /></a></li>
                </ul>
              </Fade>
            </nav>
          </section>
        </div>

        <div className="paginas">
          <div className="pagina-inicial">
            <Zoom>
              <div className="barra-lateral"></div>
            </Zoom>
            <section className="conteudo txt-ola">
              <Fade right cascade when={this.state.showTxtOla}>
                <div>
                  <p>Olá!!</p>
                  <p>Meu nome é </p>
                </div>
              </Fade>
              <Zoom delay={250} duration={500} when={this.state.showTxtOla}>
                <span className="fonte-roxa" >Daniel</span>
              </Zoom>

              <Fade right cascade when={this.state.showTxtOla}>
                <div>
                  <p>e eu sou um <br /></p>
                </div>
              </Fade>
              <Zoom delay={250} duration={500} when={this.state.showTxtOla}>
                <p>desenvolvedor web.</p>
              </Zoom>
            </section>
          </div>
          <div className="sobre-mim">
            <section className="conteudo txt-sobre">
              <Fade right when={this.state.showTxtSobre}>
                <h2>Sobre Mim</h2>
                <div>
                  <p>Desenvolvedor há pouco mais de 3 anos, graduado em Ciências da Computação pela UNINOVE. Experiência com aplicações em PHP e C# com ASP.NET. No tempo livre gosto de aprender novas tecnologias e brincar de Game Design com o Unity. Às vezes eu toco piano.</p>
                </div>
              </Fade>
            </section>
          </div>

          <Fade right when={this.state.showDvProjetos}>
            <div className="projetos">
              <Projetos />
            </div>
          </Fade>
        </div>
      </div >
    )
  }
}