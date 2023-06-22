/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { fichas } from "../../data/data";

export const Consolidado = () => {
  const navigate = useNavigate();
  const { categorias } = fichas[0];

  const [cats, setCats] = useState(categorias);

  const handleRegister = () => {
    if (!confirm("¿Registrar ficha?")) {
      return;
    } else {
      alert("Ficha registrada correctamente");
      navigate("/dashboard");
    }
  };

  return (
    <>
      <div className="container flex flex-col mx-auto mb-8 justify-center mt-10">
        <h3 className="bg-slate-400 text-white rounded-md p-2">
          VII. CONSOLIDADO DE LOS NIVELES DE AVANCE:
        </h3>

        {/* tabla 1 */}
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <p className="w-full p-4 text-gray-950 font-bold">
            Docentes sin estudiantes con NEE
          </p>
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="w-auto px-6 py-3">
                  ASPECTOS MONITOREADOS
                </th>
                <th scope="col" className="w-auto px-6 py-3">
                  ITEMS
                </th>
                <th scope="col" className="w-auto px-6 py-3">
                  NO
                </th>
                <th scope="col" className="w-auto px-6 py-3">
                  PROCESO
                </th>
                <th scope="col" className="w-auto px-6 py-3">
                  SI
                </th>
                <th scope="col" className="w-auto px-6 py-3">
                  TOTAL
                </th>
                <th scope="col" className="w-auto px-6 py-3">
                  NIVEL DE AVANCE %
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
                <th
                  scope="row"
                  className="w-auto px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {cat.nombre}
                </th>
                <td className="w-auto px-6 py-4 text-justify">
                <div>
                    <input type="text" id="first_name" className="bg-gray-50 border text-center border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder=""/>
                </div>
                </td>
                <td className="w-auto px-6 py-4 text-justify">
                  <input
                    className="bg-gray-50 border text-center border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                    type="text"
                  />
                </td>
                <td className="w-auto px-6 py-4 text-justify">
                  <input
                    className="bg-gray-50 border text-center border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                    type="text"
                  />
                </td>
                <td className="w-auto px-6 py-4 text-justify">
                  <input
                    className="bg-gray-50 border text-center border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                    type="text"
                  />
                </td>
                <td className="w-auto px-6 py-4 text-justify">
                  <input
                    className="bg-gray-50 border text-center border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                    type="text"
                  />
                </td>
                <td className="w-auto px-6 py-4 text-justify">
                  <input
                    className="bg-gray-50 border text-center border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                    type="text"
                  />
                </td>
              </tr>
              ))}
            </tbody>
          </table>
        </div>
        <hr />
        {/* tabla 2 */}
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-5">
          <p className="w-full p-4 text-gray-950 font-bold">
            Docentes con estudiantes con NEE
          </p>
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="w-auto px-6 py-3">
                  ASPECTOS MONITOREADOS
                </th>
                <th scope="col" className="w-auto px-6 py-3">
                  ITEMS
                </th>
                <th scope="col" className="w-auto px-6 py-3">
                  NO
                </th>
                <th scope="col" className="w-auto px-6 py-3">
                  PROCESO
                </th>
                <th scope="col" className="w-auto px-6 py-3">
                  SI
                </th>
                <th scope="col" className="w-auto px-6 py-3">
                  TOTAL
                </th>
                <th scope="col" className="w-auto px-6 py-3">
                  NIVEL DE AVANCE %
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
                  <th
                    scope="row"
                    className="w-auto px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {cat.nombre}
                  </th>
                  <td className="w-auto px-6 py-4 text-justify">
                  <div>
                      <input type="text" id="first_name" className="bg-gray-50 border text-center border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder=""/>
                  </div>
                  </td>
                  <td className="w-auto px-6 py-4 text-justify">
                    <input
                      className="bg-gray-50 border text-center border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                      type="text"
                    />
                  </td>
                  <td className="w-auto px-6 py-4 text-justify">
                    <input
                      className="bg-gray-50 border text-center border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                      type="text"
                    />
                  </td>
                  <td className="w-auto px-6 py-4 text-justify">
                    <input
                      className="bg-gray-50 border text-center border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                      type="text"
                    />
                  </td>
                  <td className="w-auto px-6 py-4 text-justify">
                    <input
                      className="bg-gray-50 border text-center border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                      type="text"
                    />
                  </td>
                  <td className="w-auto px-6 py-4 text-justify">
                    <input
                      className="bg-gray-50 border text-center border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                      type="text"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="container flex flex-col mx-auto mb-8 justify-center mt-10">
          <h3 className="bg-slate-400 text-white rounded-md p-2">
            VIII. RECOMENDACIONES:
          </h3>
          <textarea
            id="message"
            rows="4"
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg mt-4 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Escriba las recomendaciones aquí..."
          ></textarea>
        </div>

        <div className="flex flex-row m-10 text-center justify-center gap-4">
          <Link
            className="bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            to="/dashboard"
          >
            Cancelar
          </Link>
          <button
            type="button"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            to="/valoracion"
            onClick={handleRegister}
          >
            Registrar Ficha de evaluación
          </button>
        </div>
      </div>
    </>
  );
};
