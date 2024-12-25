import ProfessionalDashboardFrame from '@/components/dashboards/ProfessionalDashboardFrame'
import DashboardMenu from '@/components/dashboards/DashboardMenu'
import DashboardTitleHeader from '@/components/dashboards/DashboardTitleHeader'
import Header5 from '@/components/Header5'
import LongCardFrame from '@/components/dashboards/LongCardFrame'
import SquareLink from '@/components/SquareLink'
import SelectConsultantCard from '@/components/dashboards/SelectConsultantCard'

import { useEffect, useState } from 'react'
import { jwtDecode } from 'jwt-decode'
import { useRouter } from 'next/router'

const SessionConsultant = () => {
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
    router.push('/profesional/agenda')
  }

  return (
    <ProfessionalDashboardFrame>
      {/* Menu */}
      <div className='w-2/6 flex flex-row h-full'>
        <DashboardMenu role={role} />
      </div>
      {/* Select Consultant */}
      <div className='flex flex-col w-4/6 gap-7'>
        {/* Header */}
        <div>
          <DashboardTitleHeader
            title='AGENDA'
            squareColor='bg-primary-brownPod700'
            titleColor='text-primary-brownPod800'
          />
        </div>
        {/* Title */}
        <div className='flex flex-row w-full'>
          <Header5
            text='Escoge a tu asesor'
            textColor='text-primary-brownPod900'
          />
        </div>
        {/* Cards */}
        <div className='flex flex-col gap-5'>
          <SelectConsultantCard
            cardColor='bg-primary-brownPod600'
            sideColor='bg-primary-brownPod700'
            profilePicture='/assets/images/stock-image-2.jpg'
            consultantName='ALFONSO RUIZ'
            consultantId='1'
            // consultancyType='Asesoría Integral'
          />
          <SelectConsultantCard
            cardColor='bg-primary-brownPod600'
            sideColor='bg-primary-brownPod700'
            profilePicture='/assets/images/stock-image-2.jpg'
            consultantName='ALFONSO RUIZ'
            consultantId='1'
            // consultancyType='Asesoría Integral'
          />
          <SelectConsultantCard
            cardColor='bg-primary-brownPod600'
            sideColor='bg-primary-brownPod700'
            profilePicture='/assets/images/stock-image-2.jpg'
            consultantName='ALFONSO RUIZ'
            consultantId='1'
            // consultancyType='Asesoría Integral'
          />
          <SelectConsultantCard
            cardColor='bg-primary-brownPod600'
            sideColor='bg-primary-brownPod700'
            profilePicture='/assets/images/stock-image-2.jpg'
            consultantName='ALFONSO RUIZ'
            consultantId='1'
            // consultancyType='Asesoría Integral'
          />
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

export default SessionConsultant
