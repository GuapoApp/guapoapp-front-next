import Header4 from '@/components/Header4'
import SquareLink from '@/components/SquareLink'
import ConsultantCard from '@/components/dashboards/ConsultantCard'
import MainDashboardFrame from '@/components/dashboards/MainDashboardFrame'
import DashboardMenu from '@/components/dashboards/DashboardMenu'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

import { jwtDecode } from 'jwt-decode'

const ProfessionalConsultants = () => {
  const [role, setRole] = useState('')

  useEffect(() => {
    const decoded = jwtDecode(localStorage.token)
    if (decoded) {
      setRole(decoded.Role)
    }
  }, [])

  const router = useRouter()

  const goBack = (e) => {
    e.preventDefault()
    router.push('/profesional')
  }

  return (
    <MainDashboardFrame footerColor='bg-primary-brownPod600'>
      {/* Principal */}
      {/* Sección Izquierda || Menú */}
      <div className='flex flex-row h-full w-1/4 items-center justify-center'>
        <DashboardMenu role={role} />
      </div>
      {/* Sección Derecha || Asesores */}
      <div className='flex flex-col w-3/4 py-5 gap-5'>
        {/* Header */}
        <div className='flex flex-row w-full justify-end gap-10'>
          {/* Título */}
          <div className='flex flex-col gap-2'>
            <Header4 text='MIS ASESORES' textColor='text-primary-brownPod800' />
          </div>
          {/* Cuadro Café*/}
          <div className='bg-primary-brownPod700 w-1/5'></div>
        </div>
        {/* Asesores */}
        <div className='p-10 flex flex-col gap-5 justify-center items-center'>
          {/* Card 1 */}
          <ConsultantCard
            consultantName='ALFONSO RUIZ'
            consultancyType='Asesoría Integral'
            lastSessionDate='Lunes 16 de Diciembre 2024'
            lastSessionSchedule='10:00 AM A 11:00 AM'
            profilePicture='bg-[url("/assets/images/stock-image-4.jpg")]'
            consultantId='123MongoId'
          />
          {/* Card 2 */}
          <ConsultantCard
            consultantName='ALFONSO RUIZ'
            consultancyType='Asesoría Integral'
            lastSessionDate='Lunes 16 de Diciembre 2024'
            lastSessionSchedule='10:00 AM A 11:00 AM'
            profilePicture='bg-[url("/assets/images/stock-image-4.jpg")]'
            consultantId='123MongoId'
          />
          {/* Card 3 */}
          <ConsultantCard
            consultantName='ALFONSO RUIZ'
            consultancyType='Asesoría Integral'
            lastSessionDate='Lunes 16 de Diciembre 2024'
            lastSessionSchedule='10:00 AM A 11:00 AM'
            profilePicture='bg-[url("/assets/images/stock-image-4.jpg")]'
            consultantId='123MongoId'
          />
          {/* Card 4 */}
          <ConsultantCard
            consultantName='ALFONSO RUIZ'
            consultancyType='Asesoría Integral'
            lastSessionDate='Lunes 16 de Diciembre 2024'
            lastSessionSchedule='10:00 AM A 11:00 AM'
            profilePicture='bg-[url("/assets/images/stock-image-4.jpg")]'
            consultantId='123MongoId'
          />
        </div>
        {/* Back Button */}
        <div className='flex flex-row justify-start gap-10 pl-40'>
          <SquareLink
            text='Regresar'
            color='bg-primary-brownPod600'
            width='w-1/6'
            textColor='text-contrast-slateGray50'
            onClick={goBack}
          />
        </div>
      </div>
    </MainDashboardFrame>
  )
}

export default ProfessionalConsultants
