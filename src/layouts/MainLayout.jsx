import { Outlet } from 'react-router';
import '../styles/App.css'
import Footer from '../components/shared/Footer/Footer';
import Navbar from '../components/shared/Navbar/Navbar';

const MainLayout = () => {
    return (
        <div>
            {/* Navbar  */}
            <nav className='fixed top-0 z-50 w-full'>
                <Navbar/>
            </nav>

            {/* Main content   */}
            <main className='min-h-[calc(100vh-286px)]'>
                <Outlet/>
            </main>

            {/* footer  */}
            <div>
                <Footer/>
            </div>
        </div>
    );
};

export default MainLayout;