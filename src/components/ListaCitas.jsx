import { useState } from "react"
import { CrearCita } from "./CrearCita"
import { CitaItem } from "./CitaItem"

const ListaCitas = () => {

    const [citas, setCitas] = useState([])

    const agregarCita = (nuevaCita) => {
        setCitas([...citas, nuevaCita])
    }

    return (
        <>
            <div className="d-flex justify-content-between mx-5">
                <CrearCita size={citas.length} agregarCita={agregarCita} />

                <div>
                    {/* {
                        citas.length === 0 ?
                            <h2 className="text-secondary my-4">No existen citas creadas</h2> :
                            citas.map(cita => (
                                <CitaItem key={cita.id} cita={cita} />
                            ))
                    } */}
                    {
                        citas.map(cita => (
                            <div key={cita.id}>
                                 <CitaItem key={cita.id} cita={cita} />
                            </div>
                        ))
                    }
                </div>
            </div>


        </>
    )
}
export { ListaCitas }