/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { useState } from "react";

export const Monitor = ({ ficha }) => {

  const {monitor} = ficha;

  // {
  //   nombres: ficha.monitor.nombres,
  //   apellidos: ficha.monitor.apellidos,
  //   telefono: ficha.monitor.telefono,
  //   dni: ficha.monitor.dni,
  //   cargo: ficha.monitor.cargo,
  //   correo: ficha.monitor.correo,
  //   num_visita: ficha.monitor.num_visitas,
  //   fecha_aplicacion: ficha.monitor.fecha_aplicacion,
  //   hora_inicio: ficha.monitor.hora_inicio,
  //   hora_fin: ficha.monitor.hora_fin,
  //   canal: ficha.monitor.canal_comunicacion,
  // }

  const [mon, setMonitor] = useState({
    ...monitor,
    fecha_aplicacion: new Date().toLocaleDateString('en-GB')
  });

  const handleMonitorForm = (e) => {
    e.preventDefault();
    console.log(mon)
    // setMonitor({});
  };

  return (
    <>
      <h3 className="bg-slate-400 text-white rounded-md p-2">
        II. DATOS DEL MONITOR:
      </h3>
      <div className="flex items-center justify-center p-6">
        {/* Formulario de registro de institucion educativa */}
        <div className="mx-auto w-full max-w-[850px]">
          <form>
            <div className="-mx-3 flex flex-wrap">
              {/* monitor */}
              <div className="w-full px-3">
                <div className="mb-2">
                  <label
                    htmlFor="txtMonitor"
                    className="mb-1 block text-base font-medium text-[#07074D]"
                  >
                    Monitor
                  </label>
                  <input
                    type="text"
                    name="txtMonitor"
                    value={mon.nombres + ' ' + mon.apellidos}
                    onChange={(e) => handleMonitorForm(e)}
                    className="w-full rounded-md border border-[#e0e0e0] bg-gray-200 py-2 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                </div>
              </div>

              {/* data */}
              <div className="w-full px-3">
                <div className="mb-2">
                  <ul className="w-full flex flex-col rounded-md border border-[#e0e0e0] font-light text-[#6B7280] justify-around p-4 my-2 gap-2">
                    <li className="flex flex-row justify-between">
                      <span className="font-bold">TELÉFONO:</span> {mon.telefono}
                    </li>
                    <li className="flex flex-row justify-between">
                      <span className="font-bold">DNI:</span> {mon.dni}
                    </li>
                    <li className="flex flex-row justify-between">
                      <span className="font-bold">CARGO:</span> {mon.cargo}
                    </li>
                    <li className="flex flex-row justify-between">
                      <span className="font-bold">CORREO:</span>
                      {mon.correo}
                    </li>
                    <li className="flex flex-row justify-between">
                      <span className="font-bold">NUM-VISITA:</span>
                      <input
                        type="number"
                        name="txtNumVisita"
                        value={mon.num_visitas}
                        onChange={handleMonitorForm}
                        className="w-auto rounded-md border border-[#e0e0e0] py-1 px-2 text-end font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                      />
                    </li>
                    <li className="flex flex-row justify-between">
                      <span className="font-bold">Fecha de aplicación:</span>
                      <input
                        type="date"
                        name="txtFechaApli"
                        // value={mon.fecha_aplicacion}
                        defaultValue={mon.fecha_aplicacion}
                        onChange={handleMonitorForm}
                        className="w-auto rounded-md border border-[#e0e0e0] py-1 px-2 text-end font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                      />
                    </li>
                    <li className="flex flex-row justify-between">
                      <span className="font-bold">Hora inicio:</span>
                      {mon.hora_inicio}
                    </li>
                    <li className="flex flex-row justify-between">
                      <span className="font-bold">Hora fin:</span>
                      {mon.hora_fin}
                    </li>
                    <li className="flex flex-row justify-between">
                      <span className="font-bold">
                        Canal de comunicación para el monitoreo:
                      </span>
                      <textarea
                        defaultValue={mon.canal_comunicacion}
                        className="w-1/2 rounded-md border border-[#e0e0e0] py-1 px-2"
                        name=""
                        id=""
                        rows="5"
                      ></textarea>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
