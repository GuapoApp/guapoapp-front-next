import Header4 from '@/components/Header4'
import ProfilePicture from '@/components/dashboards/ProfilePicture'
import SquareLink from '@/components/SquareLink'
import ConsultantBanner from '@/components/dashboards/ConsultantBanner'
import YourConsultant from '@/components/dashboards/YourConsultant'
import ReviewCard from '@/components/dashboards/ReviewCard'
import MainDashboardFrame from '@/components/dashboards/MainDashboardFrame'

import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

import { jwtDecode } from 'jwt-decode'

const ConsultantProfileDetail = () => {
  const [userName, setUserName] = useState('')
  const [role, setRole] = useState('')
  const [consultant, setConsultant] = useState('Nombre del Consultor')

  useEffect(() => {
    const decoded = jwtDecode(localStorage.token)
    if (decoded) {
      setUserName(decoded.Name)
      setRole(decoded.Role)
    }
  }, [])

  const router = useRouter()

  return (
    <MainDashboardFrame footerColor='bg-primary-brownPod700'>
      {/* Menu y sección izquierda */}
      <section className='flex flex-col align-middle justify-start'>
        {/**
         * TODO: Add profilePicture as Dynamic prop
         */}
        <ProfilePicture
          role={role}
          /*
            TODO: Aquí va la imagen del asesor
            */
          profilePicture='/assets/images/stock-image-1.jpeg'
        />

        <YourConsultant consultantName={consultant} />
      </section>
      {/* Sección izquierda || Información del asesor*/}
      <section className='flex flex-col gap-7 w-3/5 pt-14'>
        {/* Banner del Consultor */}
        <ConsultantBanner
          experienceYears='5'
          sessionsCount='10'
          averageRating='4.5'
        />
        {/* Reseñas */}
        <div className='flex flex-col gap-5 justify-center'>
          <Header4
            text='RESEÑAS'
            textColor='text-primary-brownPod900'
            textAlign='text-center'
          />
          {/* Cards de Reseñas */}
          <div className='flex flex-row gap-5 justify-around w-full'>
            {/* Card 1 */}
            <ReviewCard
              width='w-1/2'
              profilePicture='/assets/images/stock-image-2.jpg'
              professionalName='Jesús RODENAS'
              daysAgo='2'
              rating='4.5'
              comment='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at felis a massa pulvinar mattis eget sit amet turpis. Nunc sed ante eget elit consequat posuere at a turpis. Vivamus mattis dolor molestie leo eleifend, id placerat diam porttitor. In convallis enim non nibh accumsan, feugiat suscipit sapien elementum'
            />
            {/* Card 2 */}
            <ReviewCard
              width='w-1/2'
              profilePicture='/assets/images/stock-image-2.jpg'
              professionalName='Jesús RODENAS'
              daysAgo='2'
              rating='4.5'
              comment='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at felis a massa pulvinar mattis eget sit amet turpis. Nunc sed ante eget elit consequat posuere at a turpis. Vivamus mattis dolor molestie leo eleifend, id placerat diam porttitor. In convallis enim non nibh accumsan, feugiat suscipit sapien elementum'
            />
          </div>
        </div>
        {/* Botón Regresar */}
        <div>
          <SquareLink
            text='Regresar'
            color='bg-primary-brownPod600'
            textColor='text-contrast-slateGray50'
            width='w-1/6'
            onClick={(e) => {
              e.preventDefault()
              router.push('/profesional/asesores')
            }}
          />
        </div>
      </section>
    </MainDashboardFrame>
  )
}

export default ConsultantProfileDetail
