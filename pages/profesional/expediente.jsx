import Header1 from '@/components/Header1'
import Header2 from '@/components/Header2'
import Header3 from '@/components/Header3'
import Header4 from '@/components/Header4'
import Header5 from '@/components/Header5'
import Header6 from '@/components/Header6'
import Paragraph from '@/components/Paragraph'
import CurvedBackground from '@/components/CurvedBackground'
import Welcome from '@/components/dashboards/Welcome'
import ProfilePicture from '@/components/dashboards/ProfilePicture'
import Calendar from '@/components/dashboards/Calendar'
import HourPicker from '@/components/dashboards/HourPicker'
import SessionCard from '@/components/dashboards/SessionCard'
import FormSquareButton from '@/components/forms/FormSquareButton'
import SquareLink from '@/components/SquareLink'
import ConsultantCard from '@/components/dashboards/ConsultantCard'
import ProfessionalDashboardFrame from '@/components/dashboards/ProfessionalDashboardFrame'
import SessionFileCard from '@/components/dashboards/SessionFileCard'
import DashboardMenu from '@/components/dashboards/DashboardMenu'
import MainDashboardFrame from '@/components/dashboards/MainDashboardFrame'

import { useEffect, useState } from 'react'
import { jwtDecode } from 'jwt-decode'
import { useRouter } from 'next/router'

const ProfessionalFile = () => {
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
    <ProfessionalDashboardFrame>
      {/* Menu */}
      <div className='w-2/6 flex flex-row h-full'>
        <DashboardMenu role={role} />
      </div>
      {/* File */}
      <div className='w-4/6 flex flex-col h-full gap-10'>
        {/* Header */}
        <div className='flex flex-row w-full justify-end gap-10'>
          {/* Título */}
          <div className='flex flex-col gap-2'>
            <Header4
              text='MI EXPEDIENTE'
              textColor='text-primary-brownPod800'
            />
          </div>
          {/* Cuadro Café*/}
          <div className='bg-primary-brownPod700 w-1/5'></div>
        </div>
        {/* File */}
        <div className='h-4/6 flex flex-col gap-5'>
          <div>
            <SessionFileCard
              consultantName='ALFONSO RUIZ'
              consultancyType='Asesoría Integral'
              profilePicture='/assets/images/stock-image-2.jpg'
              lastSessionDate='Lunes 16 de Diciembre 2024'
              buttonText='Expediente'
            />
          </div>
          <div>
            <SessionFileCard
              consultantName='ALFONSO RUIZ'
              consultancyType='Asesoría Integral'
              profilePicture='/assets/images/stock-image-2.jpg'
              lastSessionDate='Lunes 16 de Diciembre 2024'
              buttonText='Expediente'
            />
          </div>
          <div>
            <SessionFileCard
              consultantName='ALFONSO RUIZ'
              consultancyType='Asesoría Integral'
              profilePicture='/assets/images/stock-image-2.jpg'
              lastSessionDate='Lunes 16 de Diciembre 2024'
              buttonText='Expediente'
            />
          </div>
          <div>
            <SessionFileCard
              consultantName='ALFONSO RUIZ'
              consultancyType='Asesoría Integral'
              profilePicture='/assets/images/stock-image-2.jpg'
              lastSessionDate='Lunes 16 de Diciembre 2024'
              buttonText='Expediente'
            />
          </div>
        </div>
        {/* Back Button */}
        <div className='flex flex-row justify-start h-1/6'>
          <SquareLink
            text='Regresar'
            color='bg-primary-brownPod600'
            width='w-1/6'
            textColor='text-contrast-slateGray50'
            onClick={goBack}
          />
        </div>
      </div>
    </ProfessionalDashboardFrame>
  )
}

export default ProfessionalFile
