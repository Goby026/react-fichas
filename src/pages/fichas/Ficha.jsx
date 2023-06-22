import { Institucion } from "./Institucion";
import { fichas } from "../../data/data";
import { Monitor } from "./Monitor";
import { Docente_monitoreado } from "./Docente_monitoreado";
import { Actividad } from "./Actividad";
import { DesarrolloActividad } from "./DesarrolloActividad";
import { Link } from "react-router-dom";

export const Ficha = () => {
  const ficha = fichas[0];
  return (
    <>
      <div className="container flex flex-col mx-auto mb-8 justify-center mt-10">
        <h1 className="font-bold text-2xl text-center mx-auto">
          FICHA DE MONITOREO VIRTUAL A LA PRÁCTICA PEDAGÓGICA EN EL MARCO DE LA
          EDUCACIÓN A DISTANCIA EBR APRENDO EN CASA 2023
        </h1>
        <br />
        <Institucion ficha={ficha} />
        <br />
        <Monitor ficha={ficha} />
        <br />
        <Docente_monitoreado ficha={ficha} />
        <br />
        <Actividad ficha={ficha} />
        <br />
        <DesarrolloActividad ficha={ficha} />
      </div>
      {/* <div className="container m-10 text-center justify-center">
        <Link
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          to="/valoracion"
        >
          Siguiente
        </Link>
      </div> */}
      <div className="flex flex-row m-10 text-center justify-center gap-4">
          <Link
            className="bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            to="/dashboard"
          >
            Cancelar
          </Link>
          <Link
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            to="/valoracion"
          >
            Siguiente
          </Link>
        </div>
    </>
  );
};
