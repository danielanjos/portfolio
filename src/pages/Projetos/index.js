import React, {Component} from 'react';
import ImageGallery from 'react-image-gallery';
import Modal from '@material-ui/core/Modal';

import './index.css';
import './projetos.css';
import '../../../node_modules/react-image-gallery/styles/css/image-gallery.css';

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

export default class Projetos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openModal: false,
      listaImages: []
    }
  }

  modal() {
    return (
      // <div className="fundo-galeria">
        <div className="conteudo-galeria">
          <ImageGallery
            items={lowcostImages}
            showFullscreenButton={false}
            showPlayButton={false}
            showBullets={true}
          />
        </div>
      // </div>
    )
  };

  handleOpenModal = () => {
    console.log("ABRINDO MODAL");
    this.setState({
      openModal: true,
      listaImages: []
    });
    console.log("SETOU STATUS");
  };

  handleCloseModal = () => {
    this.setState({
      openModal: false,
      listaImages: []
    });
  };

  render() {
    return (
      <>
      <Modal
      open={this.state.openModal}
      // onClose={this.handleCloseModal}
      >
        {this.modal()}
      </Modal>
      <section className="conteudo dvProjetos">
        <h2>Projetos</h2>
        <ul>
          <li><img src={ProjetoLcCapaImg} onClick={() => this.handleOpenModal()} alt="Sistema de faturamento da Lowcost" /></li>
          <li className="logo-safishare"><img src={ProjetoSafishareCapaImg} onClick={() => this.handleOpenModal()} alt="Sistema de faturamento da Lowcost" /></li>
        </ul>
      </section>
      </>
    );
  }
}