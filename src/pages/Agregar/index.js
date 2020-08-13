import React from 'react';
import Footer from '../../components/Footer';
import { Link } from 'react-router-dom';
import './styles.scss';

class Agregar extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      name: "",
      logo: "",
      email: "",
      desc: "",
      web: "",
      tw: "",
      ig: "",
      estaOk: "",
      shoeMessage: false
    }
  }

  handleChange(e) {
    const { name, value } = e.target;

    this.setState({
      [name]: value
    })
  }

  handleClick(){
    const { name, email, logo, desc } = this.state;
    const isValid = name && logo && desc ? true : false;

    if (isValid) {
      const oldStartups = localStorage.getItem("startups");

      if(oldStartups) {
        const parsedOldStartups = JSON.parse(oldStartups)
        parsedOldStartups.push({
          name,
          email,
          logo,
          desc
        })

        const newStartups = JSON.stringify(parsedOldStartups)
          localStorage.setItem("startups", newStartups)
        } else {
          const startups = []
          startups.push({
            name,
            email, 
            logo, 
            desc
          })
          const startupsToString = JSON.stringify(startups);
          localStorage.setItem("startups", startupsToString)
        } 
      }
   
    if(name && email && logo && desc) {
      this.setState({
        estaOk: true,
        showMessage: true
      });
    }else {
      this.setState({
        estaOk: false,
        showMessage: true
      })
    }
  }
  render() {
    const { estaOk, showMessage, desc, color } = this.state;
    return(
      <div className='wrapper-agregar'>
        {showMessage &&  <p className='aviso'>{estaOk ? 'Startup creada correactamente. En breve será aprobada' : 'Por favor completa todos los datos requeridos'} </p>}
        <div className='formulario'>
          <p className='title-agregar'>Nombre</p>
          <input className='input-agregar' name='name' onChange={(e) => this.handleChange(e)} type='text' placeholder='Nombre' />
          <p className='title-agregar'>Logo</p>
          <input className='input-agregar' name='logo' onChange={(e) => this.handleChange(e)} type='text' placeholder='Link a Imagen' />
          <p className='title-agregar'>Mail</p>
          <input className='input-agregar' name='email' onChange={(e) => this.handleChange(e)} type='text' placeholder='Mail'/>
          <p className='title-agregar'>Descripcion</p>
          <textarea className='input-agregar' name='desc' onChange={(e) => this.handleChange(e)}  value={desc}></textarea>
          <p className='title-agregar'>Web</p>
          <input className='input-agregar' name='web' onChange={(e) => this.handleChange(e)} type='text' placeholder='Web (opcional)'/>
          <p className='title-agregar'>Twitter</p>
          <input className='input-agregar' name='tw' onChange={(e) => this.handleChange(e)} type='text' placeholder='Twitter (opcional)'/>
          <p className='title-agregar'>Instagram</p>
          <input className='input-agregar' name='g' onChange={(e) => this.handleChange(e)} type='text' placeholder='Instagram (opcional)'/>
          <button className='boton-agregar' onClick={(e) => this.handleClick(e)}>Enviar</button>
        </div>
        <Footer />
        <Link to='/'>
          <p className='back-agregar'>Volver a home</p>
        </Link>
      </div>
    )
  }
}

export default Agregar;