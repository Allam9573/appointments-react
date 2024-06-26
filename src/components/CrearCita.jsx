import { useState } from "react"

const CrearCita = ({ agregarCita, size }) => {

    const [nombre, setNombre] = useState('')
    const [correo, setCorreo] = useState('')
    const [telefono, setTelefono] = useState('')
    const [sintomas, setSintomas] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()

        if (nombre.trim().length === 0 || correo.trim().length === 0 || telefono.trim().length === 0 || sintomas.trim().length === 0) {
            return
        } else {
            const cita = {
                id: size + 1,
                nombre,
                correo,
                telefono,
                sintomas
            }
            agregarCita(cita)
            setNombre('')
            setCorreo('')
            setTelefono('')
            setSintomas('')
        }
    }

    return (
        <>
            <div className="card mb-4 text-center h-25 shadow px-4" style={{ width: '36rem' }}>
                <h3 className="text-secondary my-4">Nueva Cita</h3>
                <form onSubmit={onSubmit}>
                    <div className="form-group">
                        <input type="text" value={nombre} onChange={e => setNombre(e.target.value)} placeholder="Nombre paciente" className="form-control mb-3" />
                    </div>
                    <div className="row mb-3">
                        <div className="col-6">
                            <input type="text" value={correo} onChange={e => setCorreo(e.target.value)} placeholder="CorreoElectronico" className="form-control" />
                        </div>
                        <div className="col-6">
                            <input type="text" value={telefono} onChange={e => setTelefono(e.target.value)} placeholder="Telefono Movil" className="form-control" />
                        </div>
                    </div>
                    <div className="input-group mb-3">
                        <textarea value={sintomas} onChange={e => setSintomas(e.target.value)} className="form-control" placeholder="Sintomas"></textarea>
                    </div>
                    <input type="submit" value="Crear Cita" className="btn btn-success mb-4 w-100" />
                </form>
            </div>
        </>
    )
}
export { CrearCita }