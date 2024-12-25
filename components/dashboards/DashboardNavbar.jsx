import Image from 'next/image'

const DashboardNavbar = () => {
  return (
    <div className='bg-primary-brownPod800 w-full flex flex-row justify-center'>
      <Image
        className='p-3'
        src='/assets/logos/logo-blanco.png'
        alt='GuapoApp Logo'
        width={110}
        height={110}
        priority
      />
    </div>
  )
}

export default DashboardNavbar
