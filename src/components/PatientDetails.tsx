import { toast } from 'react-toastify'
import { usePatientStore } from '../store'
import { Patient } from '../types'
import PatientDetailItem from './PatientDetailItem'

type PatientDetailsProps = {
    patient: Patient
}

export default function PatientDetails({patient} : PatientDetailsProps) {

    const deletePatient = usePatientStore(state => state.deletePatient)
    const getPatientById = usePatientStore(state => state.getPatientById)

    const handleClick = () => {
        deletePatient(patient.id)
        toast.error('Paciente Eliminado')
    }

    return (
        <div className='mx-5 my-10 px-5 py-10 bg-white shadow-md rounded-xl'>

        <PatientDetailItem
            label='ID'
            data={patient.id}
        />

        <PatientDetailItem
            label='Nombre'
            data={patient.name}
        />

        <PatientDetailItem
            label='Propietario'
            data={patient.caretaker}
        />

        <PatientDetailItem
            label='email'
            data={patient.email}
        />

        <PatientDetailItem
            label='Fecha alta'
            data={patient.date.toString()}
        />

        <PatientDetailItem
            label='Sintomas'
            data={patient.symptoms}
        />

        <div className='flex flex-col lg:flex-row gap-3 justify-between mt-10'>
            <button type='button' className='py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-lg' onClick={() => getPatientById(patient.id)}>Editar</button>
            <button type='button' className='py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg' onClick={handleClick}>Eliminar</button>
        </div>
        

        </div>
    )
}
