/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { useState } from "react";

export const Institucion = ({ ficha }) => {
  const datos_ie = ficha.datos_ie;

  const [instituciones, setInstituciones] = useState(datos_ie);

  const [institucion, setInstitucion] = useState({
    id: "",
    nombre: "",
    lugar: "",
    dre: "",
    ugel: "",
    nivel_modalidad: "",
  });

  const handleSelectInstitucion = ({ target }) => {
    const { name, value } = target;
    let inst = instituciones.filter((item) => {
      return item.id === String(target.value);
    });
    setInstitucion(inst[0]);
    console.log(inst);
  };

  return (
    <>
      <h3 className="bg-slate-400 text-white rounded-md p-2">
        I. DATOS DE LA IE:
      </h3>
      <div className="flex w-full items-center justify-center p-6">
        {/* Formulario de registro de institucion educativa */}
        <div className="mx-auto w-full max-w-[850px]">
          <form>
            <div className="-mx-3 flex flex-wrap">
              <div className="w-full px-3">
                <div className="mb-2">
                  <label
                    htmlFor="fName"
                    className="mb-1 block text-base font-medium text-[#07074D]"
                  >
                    Institución educativa
                  </label>
                  <select
                    onChange={handleSelectInstitucion}
                    name="institucion"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  >
                    <option value="0">SELECCIONAR</option>
                    {instituciones.map((item) => (
                      <option key={item.id} value={item.id}>
                        {item.nombre}
                      </option>
                    ))}
                  </select>
                  <ul className="flex flex-row rounded-md border border-[#e0e0e0] font-light text-[#6B7280] justify-around p-2 my-2">
                    <li>
                      <span className="font-bold">LUGAR:</span>{" "}
                      {institucion.lugar}
                    </li>
                    <li>
                      <span className="font-bold">DRE:</span> {institucion.dre}
                    </li>
                    <li>
                      <span className="font-bold">UGEL:</span>{" "}
                      {institucion.ugel}
                    </li>
                  </ul>
                </div>
              </div>
              <div className="w-full px-3">
                <div className="mb-2">
                  <label
                    htmlFor="fName"
                    className="mb-1 block text-base font-medium text-[#07074D]"
                  >
                    Nivel
                  </label>
                  <select
                    name=""
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  >
                    <option value="">PRIMARIA</option>
                    <option value="">SECUNDARIA</option>
                    <option value="">AMBOS</option>
                  </select>
                </div>
              </div>
            </div>

            {/* <div>
              <button className="hover:shadow-form rounded-md bg-[#6A64F1] py-2 px-8 text-center text-base font-semibold text-white outline-none">
                Registrar
              </button>
            </div> */}
          </form>
        </div>
      </div>
    </>
  );
};
