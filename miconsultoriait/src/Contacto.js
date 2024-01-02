import React, { useState } from 'react';
import axios from 'axios';
const Contacto = () => {
  const [formulario, setFormulario] = useState({
    nombre: '',
    correo: '',
    telf: '',
    mensaje: '',
    opcion: ''
  });

  const handleChange = (e) => {
    setFormulario({
      ...formulario,
      [e.target.name]: e.target.value
    });
  };
  const [mensaje, setMensaje] = useState(null);
  const [mostrarModal, setMostrarModal] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Enviar el formulario utilizando axios
      const response = await axios.post('https://formspree.io/f/xeqbyqjv', formulario);
      if (response.data.ok) {
        setMensaje('Formulario enviado con exito')
      } else {
        setMensaje('Error al enviar el formulario.')
      }

      // Manejar la respuesta según tus necesidades
      // console.log('Respuesta del servidor:', response.data);

      // Puedes agregar lógica adicional aquí, por ejemplo, mostrar un mensaje de éxito al usuario

    } catch (error) {
      // Manejar errores
      console.error('Error al enviar el formulario:', error.message);
    } finally {
      setMostrarModal(true);
    }
  };

  const cerrarModal = () => {
    setMostrarModal(false);
    setMensaje(null);
  }


  return (
    <section id="contacto">
      <h2>Contacto</h2>
      <div className="formulario">
        <form action='https://formspree.io/f/xeqbyqjv' method='POST' onSubmit={handleSubmit} >
          <label htmlFor="nombre">Nombre:</label>
          <input type="text" id="nombre" name="nombre" value={formulario.nombre} onChange={handleChange} />

          <label htmlFor="correo">Correo Electrónico:</label>
          <input type="email" id="correo" name="correo" value={formulario.correo} onChange={handleChange} />

         

          <label htmlFor="mensaje">Mensaje y número de teléfono:</label>
          <textarea id="mensaje" name="mensaje" rows="4" value={formulario.mensaje} onChange={handleChange}></textarea>

       
          <br></br>

          <button type="submit">Enviar Mensaje</button>
          {/* Modal */}
          {mostrarModal && (
            <div className="modal">
              <div className="modal-contenido">
              <p className={`mensaje ${mensaje.includes('exito') ? 'exito' : 'error'}`}>{mensaje}</p>
                <button onClick={cerrarModal}>Cerrar</button>
              </div>
            </div>
          )}
          
        </form>
      </div>
    </section>
  );
};

export default Contacto;
