import DashboardNavbar from './DashboardNavbar'

import { Cabin } from 'next/font/google'

const cabin = Cabin({ subsets: ['latin'] })

const MainDashboardFrame = ({ children }) => {
  return (
    <main
      className={`box-content bg-contrast-slateGray50 min-h-screen w-full flex flex-col ${cabin.className}`}
    >
      <DashboardNavbar />
      {children}
    </main>
  )
}

export default MainDashboardFrame
