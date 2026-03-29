import "./../App.css";
import FadeIn from "./../components/FadeIn";

function Home() {
  return (
    <>
      <article className="principal">
        <FadeIn delay={0}>
          <div className="container">
            <section className="comunitario">
              <h2 className="comunitario__titulo">Proyecto Comunitario</h2>
              <img
                className="img comunitario__img"
                src="src/assets/proyecto-comunitario.png"
                alt="Proyecto Comunitario"
              />
            </section>

            <div className="linea"></div>

            <section className="vida">
              <h2 className="vida__titulo">Proyecto Vida</h2>
              <img
                className="img vida__img"
                src="src/assets/proyecto-vida.png"
                alt="Proyecto De Vida"
              />
            </section>
          </div>
        </FadeIn>

        <div className="line-right"></div>

        <FadeIn delay={0.5}>
          <div className="texto-contenedor">
            <p className="texto">
              “Cuando construimos un proyecto comunitario, también fortalecemos
              nuestro proyecto de vida, porque crecer junto a otros nos ayuda a
              encontrar propósito, valores y un camino con sentido”
            </p>
            <p className="texto-grupo">Grupo: 2</p>
          </div>
        </FadeIn>

        <FadeIn delay={0.3}>
          <section className="referencias">
            <h3 className="referencias__titulo">Referencias</h3>
            <ul className="referencias__lista">
              <li className="referencia__item">
                García-Yepes, K. (2018). El Papel De La Escuela en El
                Fortalecimiento De Los Proyectos De Vida Alternativos: Su Aporte
                en Procesos De Posconflicto Y Al Desarrollo Comunitario en
                Colombia . Revista de Pedagogía, 39(104), 31–57.
                https://research-ebsco-com.bibliotecavirtual.unad.edu.co/c/qcagk4/viewer/pdf/yese24vbjf?auth-callid=c34c79e6-330a-44dd-96f6-188d6021ad7
              </li>

              <li className="referencia__item">
                Monje Carvajal, J. J. (2014). Lo que queremos y pensamos hacer
                en nuestro territorio “El plan de vida de los pueblos indígenas
                de Colombia, una línea básica en la construcción de
                etnoecodesarrollo” . El caso del pueblo Wounaan en el Bajo
                Baudó, departamento del Chocó’.
                https://helvia.uco.es/xmlui/handle/10396/12489
              </li>
            </ul>
          </section>
        </FadeIn>
      </article>
    </>
  );
}

export default Home;
