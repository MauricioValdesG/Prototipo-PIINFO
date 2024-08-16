const courses = [
  {
    title: "Unidad 1: Introducción a la ciberseguridad",
    content: (
      <>
        <h6>Fundamentos de la ciberseguridad</h6>
        <ul className="list-unstyled">
          <li>- Concepto de ciberseguridad</li>
          <li>- Principales objetivos de la ciberseguridad</li>
          <li>- Importancia de la ciberseguridad en la actualidad</li>
          <li>- Brechas de seguridad y sus consecuencias</li>
        </ul>
        <h6>Elementos clave de la ciberseguridad</h6>
        <ul className="list-unstyled">
          <li>- Glosario cibernético</li>
          <li>
            - Confidencialidad, integridad y disponibilidad de la información
          </li>
          <li>- Principales amenazas y riesgos en el ciberespacio</li>
        </ul>
        <button className="btn btn-primary">
          Realizar prueba de la unidad
        </button>
      </>
    ),
  },
  {
    title: "Unidad 2: Seguridad de los datos",
    content: (
      <>
        <h6>Conceptos básicos de criptografía</h6>
        <ul className="list-unstyled">
          <li>- Encriptación/desencriptación</li>
          <li>- Autenticación del remitente</li>
          <li>- No repudio</li>
          <li>- Clasificación de ataques:</li>
          <ul>
            <li> Ataque de texto cifrado</li>
            <li> Texto plano conocido</li>
            <li> Texto plano elegido</li>
            <li> Texto cifrado elegido</li>
          </ul>
          <li>- Clave secreta (simétrica) y clave pública (asimétrica)</li>
        </ul>
        <h6>Integridad y autenticación de datos</h6>
        <ul className="list-unstyled">
          <li>- Fuerza de autenticación</li>
          <li>- Técnicas de ataque a contraseñas</li>
          <li>- Técnicas de almacenamiento de contraseñas</li>
          <li>- Integridad de los datos</li>
        </ul>
        <button className="btn btn-primary">
          Realizar prueba de la unidad
        </button>
      </>
    ),
  },
  {
    title: "Unidad 3: Seguridad del software",
    content: (
      <>
        <h6>Análisis y Testing</h6>
        <ul className="list-unstyled">
          <li>- Análisis estático y dinámico</li>
          <li>- Pruebas unitarias</li>
          <li>- Pruebas de integración</li>
          <li>- Pruebas de software</li>
        </ul>
        <h6>Ética</h6>
        <ul className="list-unstyled">
          <li>- Asuntos éticos en el desarrollo de software</li>
          <li>- Aspectos sociales en el desarrollo de software</li>
          <li>- Aspectos legales en el desarrollo de software</li>
          <li>- Divulgación de vulnerabilidades</li>
        </ul>
        <button className="btn btn-primary">
          Realizar prueba de la unidad
        </button>
      </>
    ),
  },
  {
    title: "Unidad 4: Seguridad de los sistemas",
    content: (
      <>
        <h6>Acceso al sistema</h6>
        <ul className="list-unstyled">
          <li>- Métodos de autenticación</li>
          <li>- Identidad</li>
        </ul>
        <h6>Control de sistemas</h6>
        <ul className="list-unstyled">
          <li>- Ataques (modelos de ataques)</li>
          <li>- Defensa (modelos de defensa)</li>
          <li>- Malware (virus, gusanos, ransomware)</li>
          <li>- Pruebas de penetración (ISSAF, OSSTMM, GISTA, PTES, etc.)</li>
        </ul>
        <button className="btn btn-primary">
          Realizar prueba de la unidad
        </button>
      </>
    ),
  },
  {
    title: "Unidad 5: Seguridad Humana",
    content: (
      <>
        <h6>Ingeniería social</h6>
        <ul className="list-unstyled">
          <li>- Tipos de ataques de ingeniería social</li>
          <ul>
            <li> Phishing</li>
            <li> Spear phishing</li>
            <li> Suplantación</li>
            <li> Vishing</li>
            <li> Email baiting</li>
          </ul>
          <li>- Psicología de los ataques de ingeniería social</li>
          <li>- Usuarios engañosos:</li>
          <ul>
            <li> Suplantación de remitentes de mensajes</li>
            <li> URL engañosas</li>
            <li>
              Cómo los usuarios juzgan y confían en las páginas web y los
              correos electrónicos
            </li>
          </ul>
          <li>- Detección y mitigación de los ataques de ingeniería social</li>
        </ul>
        <h6>Conciencia y comprensión</h6>
        <ul className="list-unstyled">
          <li>- Higiene cibernética:</li>
          <ul>
            <li> Buenas prácticas</li>
            <li> Creación de password</li>
            <li> Almacenamiento de password</li>
            <li> Herramientas de mitigación (software antivirus)</li>
            <li> Cómo identificar sitios web seguros</li>
          </ul>
          <li>
            - Concientización sobre vulnerabilidades y amenazas cibernéticas:
          </li>
          <ul>
            <li>
              Señales de advertencia de vulnerabilidades y amenazas internas de
              los empleados
            </li>
            <li> Conciencia sobre robo de identidad</li>
            <li> Compromiso del correo electrónico empresarial</li>
            <li> Amenaza de redes Wi-Fi abiertas/libres</li>
            <li> Malware, software espía y ransomware</li>
          </ul>
        </ul>
        <button className="btn btn-primary">
          Realizar prueba de la unidad
        </button>
      </>
    ),
  },
  {
    title: "Unidad 6: Seguridad organizacional",
    content: (
      <>
        <h6>Gestión de riesgos</h6>
        <ul className="list-unstyled">
          <li>- Identificación de riesgos</li>
          <li>- Amenazas internas:</li>
          <ul>
            <li> Factores de comportamiento humano maliciosos</li>
            <li>
              Indicadores para identificar posibles riesgos de amenazas internas
            </li>
          </ul>
        </ul>
        <button className="btn btn-primary">
          Realizar prueba de la unidad
        </button>
      </>
    ),
  },
  {
    title: "Unidad 7: Seguridad social",
    content: (
      <>
        <h6>Cibercrimen</h6>
        <ul className="list-unstyled">
          <li>- Comportamiento cibercriminal</li>
          <li>- Terrorismo cibernético</li>
        </ul>
        <h6>Ley cibernética</h6>
        <ul className="list-unstyled">
          <li>- Fundamentos constitucionales de la ley cibernética:</li>
          <ul>
            <li> Poder ejecutivo</li>
            <li> Poder legislativo</li>
            <li> Primera enmienda</li>
            <li> Cuarta enmienda</li>
            <li> Décima enmienda</li>
          </ul>
        </ul>
        <h6>Ética cibernética</h6>
        <ul className="list-unstyled">
          <li>- Hackeo ético:</li>
          <ul>
            <li> Tipos de hackers</li>
            <li> Pruebas de penetración éticas vs hackeo poco ético</li>
            <li> Principios y condiciones del hacking ético</li>
          </ul>
        </ul>
        <button className="btn btn-primary">
          Realizar prueba de la unidad
        </button>
      </>
    ),
  },
];

export default courses;
