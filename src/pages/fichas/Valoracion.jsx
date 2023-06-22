/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { Link } from "react-router-dom";
import { useState } from "react";
import { fichas } from "../../data/data";
import { useEffect } from "react";

export const Valoracion = () => {

  const { categorias } = fichas[0];

  const [cats, setCats] = useState(categorias);

  const handleValoraciones = (e)=> {
    console.log(e.target.value)
  }

  useEffect(() => {
    console.log(cats);
  }, []);

  return (
    <>
      <div className="container flex flex-col mx-auto mb-8 justify-center mt-10">
        <h3 className="bg-slate-400 text-white rounded-md p-2">
          VI. ACOMPAÑAMIENTO DE LA SESIÓN O ACTIVIDAD DE APRENDIZAJE:
        </h3>
        <div className="flex items-center justify-center p-6">
          {/* Formulario de registro de institucion educativa */}
          <div className="mx-auto w-full max-w-[850px]">
            <blockquote>
              <p className="w-full p-4 border rounded-md shadow-md text-justify">
                Estimado monitor, la ficha de monitoreo contiene 20 ítems, los
                primeros 17 ítems son para docentes de EBR/EBA que no cuentan
                con estudiantes con necesidades educativas especiales (NEE)
                asociadas a discapacidad. <br /> <br />
                Los 18 items, en general, son para docentes y directivos
                (EBR/EBA) que atienden a estudiantes con necesidades educativas
                especiales (NEE) asociadas a discapacidad. <br /> <br />
                El objetivo es recoger información de la práctica pedagógica
                para identificar los avances y dificultades y brindar la
                asesoría pedagógica para la mejora de los aprendizajes de los
                estudiantes. Esta ficha será aplicada por el monitor (directivo
                de la IE o especialista de educación) durante el monitoreo y
                seguimiento al docente, para lo cual se debe revisar lo
                descriptores establecidos en el protocolo de aplicación de este
                instrumento. Asimismo, se ha considerado la columna de
                evidencias para valorar la ejecución del ítem y la columna de
                observaciones para ampliar la información que se recoge.
                Considerar la valoración de 30 puntos que corresponde al 100% y
                36 puntos para IIEE que atienden a estudiantes con necesidades
                educativas especiales (NEE) asociadas a discapacidad.
              </p>
            </blockquote>
            <div className="mt-6">
              <div className="relative overflow-x-auto">
                <table className="w-1/2 border text-sm text-left text-gray-500 dark:text-gray-400">
                  <thead className="text-xs text-gray-700 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                      <th scope="col" className="px-6 py-3">
                        NO
                      </th>
                      <th scope="col" className="px-6 py-3">
                        PROCESO
                      </th>
                      <th scope="col" className="px-6 py-3">
                        SI
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        0
                      </th>
                      <td className="px-6 py-4">1</td>
                      <td className="px-6 py-4">2</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        {/* tabla de items */}
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="w-1 px-6 py-3">
                  N
                </th>
                <th scope="col" className="w-2/5 px-6 py-3">
                  Items
                </th>
                <th scope="col" className="w-1/5 px-6 py-3">
                  Valoración
                </th>
                <th scope="col" className="w-1/5 px-6 py-3">
                  Evidencias
                </th>
                <th scope="col" className="w-1/5 px-6 py-3">
                  Observaciones
                </th>
                {/* <th scope="col" className="px-6 py-3">
                  <span className="sr-only">Edit</span>
                </th> */}
              </tr>
            </thead>
            <tbody>
              {cats.map((cat) => (
                <tr
                  key={cat.id}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                >
                  <td colSpan={5} className="w-full px-6 py-4">
                    {cat.nombre}
                    {cat.items.map((item, i) => (
                      <tr
                        key={item.id}
                        className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                      >
                        <th
                          scope="row"
                          className="w-1 px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                          {i + 1}
                        </th>
                        <td className="w-2/5 px-6 py-4 text-justify">
                          {item.descripcion}
                        </td>
                        <td className="w-1/5 px-6 py-4 text-center">
                          <input
                            className="w-1/2 mx-auto text-center"
                            type="text"
                            value={item.valoracion}
                            onChange={handleValoraciones}
                          />
                        </td>
                        <td className="w-1/5 px-6 py-4">
                          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            Subir archivo
                          </button>
                        </td>
                        <td className="w-1/5 px-6 py-4">
                          <textarea
                            className="w-full rounded-md border border-[#e0e0e0] py-2 px-6"
                            name=""
                            id=""
                            rows="2"
                            defaultValue={item.obervaciones}
                          ></textarea>
                        </td>
                      </tr>
                    ))}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex flex-row m-10 text-center justify-center gap-4">
          <Link
            className="bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            to="/dashboard"
          >
            Cancelar
          </Link>
          <Link
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            to="/consolidado"
          >
            Registrar consolidado
          </Link>
        </div>
      </div>
    </>
  );
};
