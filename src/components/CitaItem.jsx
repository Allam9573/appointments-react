import { useState } from "react"

const CitaItem = ({ cita, eliminarCita, editarCita }) => {

    const [editar, setEditar] = useState(false)

    const FormCita = () => {

        const [nombre, setNombre] = useState(cita.nombre)
        const [correo, setCorreo] = useState(cita.correo)
        const [telefono, setTelefono] = useState(cita.telefono)
        const [sintomas, setSintomas] = useState(cita.sintomas)

        const onSubmit = (e) => {
            e.preventDefault()
            const citaEditar = {
                nombre,
                correo,
                telefono,
                sintomas
            }
            editarCita(cita.id, citaEditar)
            setEditar(false)
        }

        return (
            <div className="card shadow mb-3 py-3 px-3 w-100">
                <form onSubmit={onSubmit}>
                    <input type="text" value={nombre} onChange={e => setNombre(e.target.value)} className="form-control mb-3" />
                    <div className="row mb-3">
                        <div className="col-6">
                            <input type="text" value={correo} onChange={e => setCorreo(e.target.value)} className="form-control" />
                        </div>
                        <div className="col-6">
                            <input type="text" value={telefono} onChange={e => setTelefono(e.target.value)} className="form-control" />
                        </div>
                    </div>
                    <div className="mb-3">
                        <textarea value={sintomas} onChange={e => setSintomas(e.target.value)} className="form-control" cols="10" rows="2"></textarea>
                    </div>
                    <div className="d-flex justify-content-start">
                        <input type="submit" className="btn btn-primary w-25 me-2" value={'Guardar Cambios'} />
                        <button onClick={() => setEditar(false)} className="btn w-25 btn-outline-primary">Cancelar</button>
                    </div>
                </form>
            </div>
        )
    }
    const RenderItem = () => {
        return (
            <div className="card d-flex flex-row justify-content-between shadow mb-3 py-3 px-3 w-100">
                <div>
                    <div className="d-flex">
                        <h6 className="me-2">Paciente:</h6>
                        <span className="">{cita.nombre}</span>
                    </div>
                    <div className="d-flex">
                        <h6 className="me-2">Correo Electronico:</h6>
                        <span className="">{cita.correo}</span>
                    </div>
                    <div className="d-flex">
                        <h6 className="me-2">Telefono:</h6>
                        <span className="">{cita.telefono}</span>
                    </div>
                    <div className="d-flex">
                        <h6 className="me-2">Sintomas:</h6>
                        <span className="">{cita.sintomas}</span>
                    </div>
                </div>
                <div className="d-flex flex-column justify-content-center">
                    <button onClick={() => setEditar(true)} className="btn btn-primary mb-3">Editar</button>
                    <button onClick={() => eliminarCita(cita.id)} className="btn btn-danger">Eliminar</button>
                </div>
            </div>
        )
    }
    return (
        <>
            {
                editar === true ? <FormCita /> : <RenderItem />
            }
        </>
    )
}
export { CitaItem }