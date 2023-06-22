/* eslint-disable react/prop-types */
import { useState } from "react";

export const Actividad = ({ ficha }) => {

  const {actividad_sesion} = ficha;

  // const [actividad, setActividad] = useState({
  //   id: ficha.actividad_sesion.id,
  //   ciclo: ficha.actividad_sesion.cliclociclo,
  //   grado_seccion: ficha.actividad_sesion.grado_seccion,
  //   cant_est_aec: ficha.actividad_sesion.cant_est_aec,
  //   num_semana: ficha.actividad_sesion.num_semana,
  //   num_sesion_act: ficha.actividad_sesion.num_sesion_act,
  //   dir_ppff: ficha.actividad_sesion.dir_ppff,
  //   area: ficha.actividad_sesion.area,
  //   dir_estudiantes: ficha.actividad_sesion.dir_estudiantes,
  //   competencias: ficha.actividad_sesion.competencias,
  //   nom_sesion_act: ficha.actividad_sesion.nom_sesion_act,
  // });

  const [actividad, setActividad] =  useState(actividad_sesion);

  const handleForm = (e) => {
    console.log(e);
    setActividad({});
  };

  // const handleInputChange = ({ target }) => {
  //   const { name, value } = target;
  //   setInstitucion({
  //     ...institucion,
  //     [name]: value,
  //   });
  // };

  return (
    <>
      <h3 className="bg-slate-400 text-white rounded-md p-2">
        IV. INFORMACIÓN DE LA PROGRAMACIÓN DE LA ACTIVIDAD O SESIÓN:
      </h3>
      <div className="flex items-center justify-center p-6">
        {/* Formulario de registro de institucion educativa */}
        <div className="mx-auto w-full max-w-[850px]">
          <form>
            <div className="-mx-3 flex flex-wrap">
              {/* Ciclo */}
              <div className="w-1/2 px-3">
                <div className="mb-2">
                  <label
                    htmlFor="txtCiclo"
                    className="mb-1 block text-base font-medium text-[#07074D]"
                  >
                    Ciclo
                  </label>
                  <input
                    type="text"
                    name="txtCiclo"
                    placeholder="ciclo"
                    value={actividad.ciclo}
                    onChange={handleForm}
                    className="w-full rounded-md border border-[#e0e0e0] py-2 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                </div>
              </div>

              {/* Grado y seccion */}
              <div className="w-1/2 px-3">
                <div className="mb-2">
                  <label
                    htmlFor="txtGradoSec"
                    className="mb-1 block text-base font-medium text-[#07074D]"
                  >
                    Grado y sección
                  </label>
                  <input
                    type="text"
                    name="txtGradoSec"
                    placeholder="grado/seccion"
                    value={actividad.grado_seccion}
                    onChange={handleForm}
                    className="w-full rounded-md border border-[#e0e0e0] py-2 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                </div>
              </div>

              {/* Cantidad de estudiantes */}
              <div className="w-full px-3">
                <div className="flex flex-row mb-2">
                  <label
                    htmlFor="txtCantidad"
                    className="w-10/12 mb-1 block text-base font-medium text-[#07074D]"
                  >
                    Cantidad de estudiantes que participan AeC
                  </label>
                  <input
                    type="text"
                    name="txtCantidad"
                    placeholder="cantidad alumnos"
                    value={actividad.cant_est_aec}
                    onChange={handleForm}
                    className="w-2/12 rounded-md border border-[#e0e0e0] py-2 px-6 text-base text-center font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                </div>
              </div>

              {/* Numero de semana */}
              <div className="w-1/2 px-3">
                <div className="mb-2">
                  <label
                    htmlFor="txtNumSemana"
                    className="mb-1 block text-base font-medium text-[#07074D]"
                  >
                    N° semana
                  </label>
                  <input
                    type="text"
                    name="txtNumSemana"
                    placeholder="n° semana"
                    value={actividad.num_semana}
                    onChange={handleForm}
                    className="w-full rounded-md border border-[#e0e0e0] py-2 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                </div>
              </div>

              {/* N° de sesion */}
              <div className="w-1/2 px-3">
                <div className="mb-2">
                  <label
                    htmlFor="txtNumSesion"
                    className="mb-1 block text-base font-medium text-[#07074D]"
                  >
                    N° de sesión y/o Actividad
                  </label>
                  <input
                    type="text"
                    name="txtNumSesion"
                    id="txtNumSesion"
                    placeholder="número sesión"
                    value={actividad.num_sesion_act}
                    onChange={handleForm}
                    className="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-2 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                </div>
              </div>

              {/* Directorio de padres de familia */}
              <div className="w-full px-3">
                <div className="flex flex-row justify-between mb-2">
                  <label
                    htmlFor="cbDirectorioPadres"
                    className="w-11/12 mb-1 block text-base font-medium text-[#07074D]"
                  >
                    Cuenta con el directorio de los PP.FF. (EBR, EBA menos de
                    edad)
                  </label>
                  <input
                    type="checkbox"
                    name="cbDirectorioPadres"
                    id="cbDirectorioPadres"
                    value={actividad.cant_est_aec}
                    onChange={handleForm}
                    className="w-1/12 rounded-md py-2 px-6 text-base font-medium text-[#6B7280] outline-none"
                  />
                </div>
              </div>

              {/* Directorio de estudiantes */}
              <div className="w-full px-3">
                <div className="flex flex-row justify-between mb-2">
                  <label
                    htmlFor="cbDirectorioEstudiantes"
                    className="w-11/12 mb-1 block text-base font-medium text-[#07074D]"
                  >
                    Cuenta con el directorio de los estudiantes
                  </label>
                  <input
                    type="checkbox"
                    name="cbDirectorioEstudiantes"
                    id="cbDirectorioEstudiantes"
                    value={actividad.cant_est_aec}
                    onChange={handleForm}
                    className="w-1/12 rounded-md py-2 px-6 text-base font-medium text-[#6B7280] outline-none"
                  />
                </div>
              </div>

              {/* Area */}
              <div className="w-1/2 px-3">
                <div className="mb-2">
                  <label
                    htmlFor="txtArea"
                    className="mb-1 block text-base font-medium text-[#07074D]"
                  >
                    Área
                  </label>
                  <input
                    type="text"
                    name="txtArea"
                    id="txtArea"
                    placeholder="área"
                    value={actividad.area}
                    onChange={handleForm}
                    className="w-full rounded-md border border-[#e0e0e0] py-2 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                </div>
              </div>

              {/* Competencias */}
              <div className="w-1/2 px-3">
                <div className="mb-2">
                  <label
                    htmlFor="txtCompetencias"
                    className="mb-1 block text-base font-medium text-[#07074D]"
                  >
                    Competencia(s)
                  </label>
                  <textarea 
                    className="w-full rounded-md border border-[#e0e0e0] py-2 px-6"
                    defaultValue={actividad.competencias} 
                    name="txtCompetencias" 
                    id="txtCompetencias" 
                    rows="3">

                  </textarea>
                </div>
              </div>

              {/* Nombre de sesión */}
              <div className="w-full px-3">
                <div className="mb-2">
                  <label
                    htmlFor="txtNomSesion"
                    className="mb-1 block text-base font-medium text-[#07074D]"
                  >
                    Nombre de la sesión o Actividad
                  </label>
                  <input
                    type="text"
                    name="txtNomSesion"
                    id="txtNomSesion"
                    placeholder="nombre de sesión"
                    value={actividad.nom_sesion_act}
                    onChange={handleForm}
                    className="w-full rounded-md border border-[#e0e0e0] py-2 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                </div>
              </div>

              

            </div>
          </form>
        </div>
      </div>
    </>
  );
};
