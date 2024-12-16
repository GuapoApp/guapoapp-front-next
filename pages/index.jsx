
import Footer from '../components/Footer'
import Navbar from '../components/NavBar'
import Sections from '../components/sections'
import Background from './components/background'
export default function Page() {
  return (
    <>
      <div>
        <Background />
        <Navbar />       
        <Sections />
        <Footer />
      </div>
    </>
  )
}
