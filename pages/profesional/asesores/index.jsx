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
import MainDashboardFrame from '@/components/dashboards/MainDashboardFrame'
import DashboardNavbar from '@/components/dashboards/DashboardNavbar'
import DashboardMenu from '@/components/dashboards/DashboardMenu'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

import { jwtDecode } from 'jwt-decode'

import Image from 'next/image'

import { Cabin } from 'next/font/google'

const cabin = Cabin({ subsets: ['latin'] })

const ProfessionalConsultants = () => {
  const [userName, setUserName] = useState('')
  const [role, setRole] = useState('')

  useEffect(() => {
    const decoded = jwtDecode(localStorage.token)
    if (decoded) {
      setUserName(decoded.Name)
      setRole(decoded.Role)
    }
  }, [])

  const router = useRouter()

  const goBack = (e) => {
    e.preventDefault()
    router.push('/profesional')
  }

  return (
    <MainDashboardFrame>
      {/* Principal */}
      <section className='flex flex-row items-center justify-center px-10 z-10'>
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
              <Header4
                text='MIS ASESORES'
                textColor='text-primary-brownPod800'
              />
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
      </section>
      {/* Curved Background */}
      <div className='h-24 absolute -bottom-0 w-full z-0'>
        <CurvedBackground color='bg-primary-brownPod700' />
      </div>
    </MainDashboardFrame>
  )
}

export default ProfessionalConsultants
