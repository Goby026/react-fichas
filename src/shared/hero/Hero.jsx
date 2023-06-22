// import Logo1 from "../../assets/img/Logo1.jpg";
import Logo1SF from "../../assets/img/Logo1SF.png";

export const Hero = () => {

  return (
    <section id="hero">
      {/* flex-container */}
      <div className="container flex flex-col-reverse md:flex-row items-center px-6 mx-auto mt-10 space-y-0 md:space-y-0">
        {/* left item */}
        <div className="flex flex-col mb-32 space-y-12 md:w-1/2">
          <h1 className="max-w-md text-4xl font-bold text-center md:text-5xl md:text-left">
            Juntos vamos a crear mejores proyectos, ¿que esperas?
          </h1>
          <p className="max-w-sm text-center text-darkGrayishBlue md:text-left">
            Grover facilita que los equipos de software planifiquen las tareas
            diarias mientras mantienen a la vista los objetivos más grandes del
            equipo.
          </p>
          <p className="flex justify-center md:justify-start">
            <a
              href=""
              className="p-3 px-6 pt-2 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight"
            >
              Empecemos
            </a>
          </p>
        </div>

        {/* image */}
        <div className="md:w-1/2">
            <img className="rounded-md" src={Logo1SF} alt="" />
        </div>
      </div>
    </section>
  );
};
