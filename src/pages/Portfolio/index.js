import React, { Component } from 'react';
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';
import ImageGallery from 'react-image-gallery';
import Modal from '@material-ui/core/Modal';

import { Fade, Zoom } from 'react-reveal';

// import Projetos from '../Projetos';

import './index.css';
import './menu.css';
import './sobre.css';

import '../Projetos/index.css'
import '../Projetos/projetos.css';
import '../../../node_modules/react-image-gallery/styles/css/image-gallery.css';

import perfilImg from '../../assets/perfil.jpg';


import ProjetoLcCapaImg from '../../assets/lowcost-logo.png';
import LowcostMenu from '../../assets/lowcost/menu.png';
import LowcostCadastraEquipamento from '../../assets/lowcost/cadastraEquipamento.png';
import LowcostListaEquipamentos from '../../assets/lowcost/listaEquipamentos.png';
import LowcostListaPedidos from '../../assets/lowcost/listaPedidos.png';
import LowcostListaNumeradores from '../../assets/lowcost/listaNumeradores.png';
import LowcostUsuarios from '../../assets/lowcost/usuarios.png';
import LowcostConferencia from '../../assets/lowcost/conferencia.png';
import LowcostConferenciaExcel from '../../assets/lowcost/conferenciaExcel.png';


import ProjetoSafishareCapaImg from '../../assets/logo_safishare.png';
import SafishareCadastraPermissaoImg from '../../assets/safishare/cadastrapermissao.png';
import SafishareChecklistImg from '../../assets/safishare/checklist.png';
import SafishareEnvioArquivosImg from '../../assets/safishare/envioarquivos.png';
import SafishareMenuImg from '../../assets/safishare/menu.png';
import SafisharePerguntas1Img from '../../assets/safishare/perguntas1.png';
import SafisharePerguntas2Img from '../../assets/safishare/perguntas2.png';

const lowcostImages =
  [
    {
      original: LowcostMenu,
      thumbnail: LowcostMenu,
    },
    {
      original: LowcostCadastraEquipamento,
      thumbnail: LowcostCadastraEquipamento,
    },
    {
      original: LowcostListaEquipamentos,
      thumbnail: LowcostListaEquipamentos,
    },
    {
      original: LowcostListaPedidos,
      thumbnail: LowcostListaPedidos,
    },
    {
      original: LowcostListaNumeradores,
      thumbnail: LowcostListaNumeradores,
    },
    {
      original: LowcostUsuarios,
      thumbnail: LowcostUsuarios,
    },
    {
      original: LowcostConferencia,
      thumbnail: LowcostConferencia,
    },
    {
      original: LowcostConferenciaExcel,
      thumbnail: LowcostConferenciaExcel,
    },
  ];

const safishareImages =
  [
    {
      original: SafishareCadastraPermissaoImg,
      thumbnail: SafishareCadastraPermissaoImg,
    },
    {
      original: SafishareChecklistImg,
      thumbnail: SafishareChecklistImg,
    },
    {
      original: SafishareEnvioArquivosImg,
      thumbnail: SafishareEnvioArquivosImg,
    },
    {
      original: SafishareMenuImg,
      thumbnail: SafishareMenuImg,
    },
    {
      original: SafisharePerguntas1Img,
      thumbnail: SafisharePerguntas1Img,
    },
    {
      original: SafisharePerguntas2Img,
      thumbnail: SafisharePerguntas2Img,
    },
  ];


export default class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstLoad: true,
      showTxtOla: false,
      showMenuLateral: false,
      showTxtSobre: false,
      showDvProjetos: false,
      openModal: false,
    };
  }

  modal() {
    return (
      // <div className="fundo-galeria">
      <div className="conteudo-galeria">
        <ImageGallery
          items={this.state.listaImagens}
          showFullscreenButton={false}
          showPlayButton={false}
          showBullets={true}
        />
      </div>
      // </div>
    )
  };

  handleOpenModal = (listaImagens) => {
    console.log('ClickProjeto');
    this.setState({
      openModal: true,
      listaImagens: listaImagens
    });
  };

  handleCloseModal = () => {
    this.setState({
      openModal: false
    });
  };

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
        <div className="projetos">
          <Modal
            open={this.state.openModal}
            onClose={this.handleCloseModal}
          >
            {this.modal()}
          </Modal>
          <section className="conteudo dvProjetos">
            <h2>Projetos</h2>
            <ul>
              <li><img src={ProjetoLcCapaImg} onClick={() => this.handleOpenModal(lowcostImages)} alt="Sistema de faturamento da Lowcost" /></li>
              <li className="logo-safishare"><img src={ProjetoSafishareCapaImg} onClick={() => this.handleOpenModal(safishareImages)} alt="Sistema de faturamento da Lowcost" /></li>
            </ul>
          </section>
        </div>
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

            <nav>
              <Fade left cascade when={this.state.showMenuLateral}>
                <ul>
                  <li><a href="/">LinkedIn <FaLinkedin size={24} className="icon" color="#FFF" /></a></li>
                  <li><a href="/">Github <FaGithub size={24} className="icon" color="#FFF" /></a></li>
                  <li><a href="/">Facebook <FaFacebook size={24} className="icon" color="#FFF" /></a></li>
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
                  <p>Olaaaaaaaaaaaaaaaaá!</p>
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

          </Fade>
        </div>
      </div >
    )
  }
}