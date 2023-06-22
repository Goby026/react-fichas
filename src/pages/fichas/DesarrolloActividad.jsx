/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from "react";

export const DesarrolloActividad = ({ficha}) => {

    const {desarrollo_sa} = ficha;

    const [desarrollo, setDesarrollo] = useState(desarrollo_sa);

  return (
    <>
        <h3 className="bg-slate-400 text-white rounded-md p-2">
        V. DESARROLLO DE LA ACTIVIDAD O SESIÓN DE APRENDIZAJE:
      </h3>
        {/* recursos */}
        <table className="w-full my-4 border">
            <thead>
                <tr className="bg-lime-200 border">
                    <th colSpan={8}>Recursos y/o medios utilizados para el desarrollo de las actividades de aprendizaje en la estrategia Aprendo en Casa.</th>
                </tr>
                <tr className="border">
                    <th className="w-1/4 border" colSpan={2}>PLATAFORMA WEB TABLETA-MED</th>
                    <th className="w-1/4 border" colSpan={2}>TV</th>
                    <th className="w-1/4 border" colSpan={2}>RADIO</th>
                    <th className="w-1/4 border" colSpan={2}>Otro medio</th>
                </tr>
                <tr>
                    <th>Cantidad</th>
                    <th>%</th>
                    <th>Cantidad</th>
                    <th>%</th>
                    <th>Cantidad</th>
                    <th>%</th>
                    <th>Cantidad</th>
                    <th>%</th>
                </tr>
            </thead>
            <tbody>
                <tr className="border text-center">
                    <td>{desarrollo.rm_aprendizaje.plat_web_tableta.cantidad}</td>
                    <td>{desarrollo.rm_aprendizaje.plat_web_tableta.porcentaje}</td>
                    <td>{desarrollo.rm_aprendizaje.tv.cantidad}</td>
                    <td>{desarrollo.rm_aprendizaje.tv.porcentaje}</td>
                    <td>{desarrollo.rm_aprendizaje.radio.cantidad}</td>
                    <td>{desarrollo.rm_aprendizaje.radio.porcentaje}</td>
                    <td>{desarrollo.rm_aprendizaje.otro_medio.cantidad}</td>
                    <td>{desarrollo.rm_aprendizaje.otro_medio.porcentaje}</td>
                </tr>
            </tbody>
        </table>
        {/* medios */}
        <table className="w-full my-4 border">
            <thead>
                <tr className="bg-lime-200 border">
                    <th colSpan={10}>Medios de comunicación y/o canales de acceso por el cual participan los estudiantes y brinda la retroalimentación.</th>
                </tr>
                <tr className="border">
                    <th className="w-1/5 border" colSpan={2}>WhatsApp TABLET-MED</th>
                    <th className="w-1/5 border" colSpan={2}>Mensaje de texto</th>
                    <th className="w-1/5 border" colSpan={2}>Llamada telefónica</th>
                    <th className="w-1/5 border" colSpan={2}>Aliado copias</th>
                    <th className="w-1/5 border" colSpan={2}>Otro CANAL</th>
                </tr>
                <tr>
                    <th>Cantidad</th>
                    <th>%</th>
                    <th>Cantidad</th>
                    <th>%</th>
                    <th>Cantidad</th>
                    <th>%</th>
                    <th>Cantidad</th>
                    <th>%</th>
                    <th>Cantidad</th>
                    <th>%</th>
                </tr>
            </thead>
            <tbody>
                <tr className="border text-center">
                    <td>{desarrollo.rm_retroalimentacion.whatsapp_web_tableta.cantidad}</td>
                    <td>{desarrollo.rm_retroalimentacion.whatsapp_web_tableta.porcentaje}</td>
                    <td>{desarrollo.rm_retroalimentacion.msg_texto.cantidad}</td>
                    <td>{desarrollo.rm_retroalimentacion.msg_texto.porcentaje}</td>
                    <td>{desarrollo.rm_retroalimentacion.llamada_telef.cantidad}</td>
                    <td>{desarrollo.rm_retroalimentacion.llamada_telef.porcentaje}</td>
                    <td>{desarrollo.rm_retroalimentacion.aliado_copias.cantidad}</td>
                    <td>{desarrollo.rm_retroalimentacion.aliado_copias.porcentaje}</td>
                    <td>{desarrollo.rm_retroalimentacion.otro_medio.cantidad}</td>
                    <td>{desarrollo.rm_retroalimentacion.otro_medio.porcentaje}</td>                    
                </tr>
            </tbody>
        </table>
    </>
  )
}
