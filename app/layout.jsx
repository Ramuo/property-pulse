import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AuthProvider from '@/components/AuthProvider';
import { ToastContainer } from "react-toastify";
import { GlobalProvider } from '@/context/GlobalContext';
import '@/assets/styles/globals.css';
// import "react-toastify/dist/ReactToastify.css";
import 'photoswipe/dist/photoswipe.css';

export const metadata = {
    titre: 'PropertyPulse | Trouver une Location Parfaite',
    description: ' Trouver votre logement de rêve',
    keyword: "louer, trouver des locations, trouver de l'immobilier"
}

const MainLayout = ({children}) => {
  return (
    <GlobalProvider>
      <AuthProvider>
        <html lang='en'>
            <body>
              <Navbar/>
              <main>{children}</main>
              <Footer/>
              <ToastContainer/>
            </body>
        </html>
      </AuthProvider>
    </GlobalProvider>
  )
};

export default MainLayout;