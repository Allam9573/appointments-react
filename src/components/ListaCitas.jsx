import { useEffect, useState } from "react"
import { CrearCita } from "./CrearCita"
import { CitaItem } from "./CitaItem"

const ListaCitas = () => {

    const initialCitas = () => {
        const localStorageCitas = localStorage.getItem('citasList')
        return localStorageCitas ? JSON.parse(localStorageCitas) : []
    }

    const [citas, setCitas] = useState(initialCitas)

    useEffect(() => {
        localStorage.setItem('citasList', JSON.stringify(citas))
    }, [citas])

    const agregarCita = (nuevaCita) => {
        setCitas([...citas, nuevaCita])
    }

    const eliminarCita = (id) => {
        const nuevasCitas = citas.filter(cita => cita.id !== id)
        setCitas(nuevasCitas)
    }

    const editarCita = (id, citaEditar) => {
        const nuevasCitas = [...citas]
        const indexCita = citas.findIndex(cita => cita.id === id)
        nuevasCitas[indexCita].nombre = citaEditar.nombre
        nuevasCitas[indexCita].correo = citaEditar.correo
        nuevasCitas[indexCita].telefono = citaEditar.telefono
        nuevasCitas[indexCita].sintomas = citaEditar.sintomas
        setCitas(nuevasCitas)
    }

    return (
        <>
            <div className="row mx-auto w-100">
                <CrearCita size={citas.length} agregarCita={agregarCita} />
                <div className="w-50 mx-auto">
                    {
                        citas.length === 0 ?
                            <div className="alert alert-primary">
                                <h4 className="text-center">No hay citas pendientes</h4>
                            </div> :
                            <>
                                <div className="alert alert-success">Citas por atender: {citas.length} </div>
                                {

                                    citas.map(cita => (
                                        <div key={cita.id}>
                                            <CitaItem
                                                key={cita.id}
                                                cita={cita}
                                                eliminarCita={eliminarCita}
                                                editarCita={editarCita}
                                            />
                                        </div>
                                    ))
                                }
                            </>
                    }
                </div>
            </div>
        </>
    )
}
export { ListaCitas }