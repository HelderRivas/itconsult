import logo from './logo.svg';
import './App.css';
import Contacto from './Contacto';
import { SpeedInsights } from "@vercel/speed-insights/next"
function App() {
  return (
    <div className="App" >
      <header className="App-header">
        <h1  class="hit-the-floor">ITMinds Consult</h1>
        <nav>
          <ul>
            {/* <li><img src='itminds.png' width='60px' height='50px'></img></li> */}
            <li><a href="#inicio">Inicio</a></li>
            <li><a href="#servicios">Servicios</a></li>
            <li><a href="#sobre-Nosotros">Sobre Nosotros</a></li>
            {/* <li><a href="#blog">Blog</a></li> */}
            <li><a href="#contacto">Contacto</a></li>
          </ul>
        </nav>
      </header>

      <section id="inicio">
        <h2>Bienvenido a nuestra consultoría de IT</h2>
        <p>Brindamos soluciones de IT personalizadas para impulsar tu negocio o tu domicilio.</p>
      </section>

      <section id="servicios">
        <h2>Nuestros Servicios</h2>
        <ul>
          <li>Consultoría en Equipos Informaticos</li> 
          <li>Planificacion sobre diseños web</li>
          <li>Implementación de Soluciones en la Nube</li>
          <li>Consultoría en Infraestructura de Redes</li>
          <li>Auditoría y Optimización de Sistemas</li>
          <li>Consultoria en domótica</li>
        </ul>
      </section>

      <section id="sobre-Nosotros">
        <h2 id="sobre">Sobre Nosotros</h2>
        {<p id="sobre">
          ¡Saludos y gracias por confiar en nosotros! Soy un apasionado profesional de la informática, actualmente trabajando como técnico de IT. Mi objetivo es brindar ayuda a aquellas personas que puedan enfrentar desafíos relacionados con la informática, ya sea por falta de conocimiento o recursos financieros.

          En nuestra consultoría, ofrecemos:

         <h3>Orientación para Adquirir Equipos Informáticos:</h3> 
          <p>¿Estás buscando obtener un equipo informático adecuado, ya sea una computadora, portátil o servidor? Estoy aquí para brindarte la orientación necesaria.</p>

          <h3>Servicio Remoto:</h3>
          
          <p> Utilizando la potencia del servicio remoto, puedo abordar tus dudas informáticas en tiempo real. Esto significa una solución rápida y eficiente para los problemas que puedas estar experimentando.
          </p>

         <h3>Atención Personalizada:</h3> 
         <p>Creo en la comodidad del usuario. Ofrezco varias opciones de comunicación, incluyendo llamadas, correos electrónicos y WhatsApp. Quiero que te sientas cómodo y seguro al obtener la ayuda que necesitas.</p> 

         <h3>Servicio a Domicilio</h3>  (Según Disponibilidad):
         <p> En ciertas zonas, también proporciono servicios a domicilio. Si es necesario intervenir físicamente con tu equipo, estoy dispuesto a desplazarme para ofrecerte la asistencia que requieres.</p>

          Mi pasión por la informática se traduce en un compromiso genuino de ayudarte a resolver tus problemas de manera efectiva. ¡Espero poder colaborar contigo pronto!

        </p>}
      </section>

      <section id="blog">
       
      </section>

      <Contacto />

      <footer>
        <p>&copy; 2023 Consultoría de IT. Todos los derechos reservados.</p>
      </footer>
      <SpeedInsights />
    </div>
  );
}

export default App;
