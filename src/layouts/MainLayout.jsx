import { Outlet, useLocation } from 'react-router';
import '../styles/App.css'
import Footer from '../components/shared/Footer/Footer';
import Navbar from '../components/shared/Navbar/Navbar';
import { Toaster } from 'react-hot-toast';

const MainLayout = () => {

    const location = useLocation()

    const noHeaderFooter = location.pathname.includes("auth/login") || location.pathname.includes("auth/register")

    return (
        <div>
            {/* Navbar  */}
            <Toaster />
            {
                noHeaderFooter || <nav className='fixed top-0 z-50 w-full'> <Navbar/> </nav>
            }


            {/* Main content   */}
            <main className='min-h-[calc(100vh-286px)]'>
                <Outlet/>
            </main>

            {/* footer  */}
            {
                noHeaderFooter || <div> <Footer/> </div>
            }
            
        </div>
    );
};

export default MainLayout;