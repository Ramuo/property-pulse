import Navbar from '@/components/Navbar';
import '@/assets/styles/globals.css';

export const metadata = {
    titre: 'PropertyPulse | Trouver une Location Parfaite',
    description: ' Trouver votre logement de rêve',
    keyword: "louer, trouver des locations, trouver de l'immobilier"
}

const MainLayout = ({children}) => {
  return (
    <html lang='en'>
        <body>
          <Navbar/>
            <main>{children}</main>
        </body>
    </html>
  )
};

export default MainLayout;