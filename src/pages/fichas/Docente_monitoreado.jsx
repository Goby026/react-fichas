/* eslint-disable react/prop-types */

export const Docente_monitoreado = ({ficha}) => {

  const monitor = {
    nombres: ficha.docente_monitoreado.nombres,
    apellidos: ficha.docente_monitoreado.apellidos,
    telefono: ficha.docente_monitoreado.telefono,
    dni: ficha.docente_monitoreado.dni,
    correo: ficha.docente_monitoreado.correo
  };

  const handleForm = (e)=> {
    console.log(e.target)
  }

  return (
    <>
      <h3 className="bg-slate-400 text-white rounded-md p-2">
        III. DATOS DEL DOCENTE MONITOREADO:
      </h3>
      <div className="flex items-center justify-center p-6">
        {/* Formulario de registro de institucion educativa */}
        <div className="mx-auto w-full max-w-[850px]">
          <form>
            <div className="-mx-3 flex flex-wrap">
              {/* Nombres */}
              <div className="w-1/2 px-3">
                <div className="mb-2">
                  <label
                    htmlFor="txtNombres"
                    className="mb-1 block text-base font-medium text-[#07074D]"
                  >
                    Nombres
                  </label>
                  <input
                    type="text"
                    name="txtNombres"
                    placeholder="nombres"
                    value={monitor.nombres}
                    onChange={handleForm}
                    className="w-full rounded-md border border-[#e0e0e0] py-2 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                </div>
              </div>

              {/* Apellidos */}
              <div className="w-1/2 px-3">
                <div className="mb-2">
                  <label
                    htmlFor="txtApellidos"
                    className="mb-1 block text-base font-medium text-[#07074D]"
                  >
                    Apellidos
                  </label>
                  <input
                    type="text"
                    name="txtApellidos"
                    placeholder="apellidos"
                    value={monitor.apellidos}
                    onChange={handleForm}
                    className="w-full rounded-md border border-[#e0e0e0] py-2 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                </div>
              </div>

              {/* Dni */}
              <div className="w-1/2 px-3">
                <div className="mb-2">
                  <label
                    htmlFor="txtDni"
                    className="mb-1 block text-base font-medium text-[#07074D]"
                  >
                    Dni
                  </label>
                  <input
                    type="text"
                    name="txtDni"
                    placeholder="dni"
                    value={monitor.dni}
                    onChange={handleForm}
                    className="w-full rounded-md border border-[#e0e0e0] py-2 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                </div>
              </div>

              {/* Teléfono */}
              <div className="w-1/2 px-3">
                <div className="mb-2">
                  <label
                    htmlFor="txtTelefono"
                    className="mb-1 block text-base font-medium text-[#07074D]"
                  >
                    Teléfono
                  </label>
                  <input
                    type="text"
                    name="txtDni"
                    placeholder="teléfono"
                    value={monitor.telefono}
                    onChange={handleForm}
                    className="w-full rounded-md border border-[#e0e0e0] py-2 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                </div>
              </div>

            </div>

            
            <div className="mb-2">
              <label
                htmlFor="guest"
                className="mb-1 block text-base font-medium text-[#07074D]"
              >
                Correo electrónico
              </label>
              <input
                type="text"
                name="guest"
                id="guest"
                placeholder="indicar correo"
                value={monitor.correo}
                onChange={handleForm}
                className="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-2 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>

          </form>
        </div>
      </div>
    </>
  )
}
