// Import necessary modules from 'react-router-dom'
import { useRoutes, BrowserRouter } from 'react-router-dom';

// Import components for different routes
import { Home } from '../Home';
import Contact from '../Contact';
import Biografico from '../Biografia';
import { NavBar } from '../../Components/Navbar';

// Define the main App component
export const App = () => {
    // Define a nested component AppRoutes responsible for handling route configurations
    const AppRoutes = () => {
        // Define routes using useRoutes hook with path and corresponding elements
        let routes = useRoutes([
            { path: '/Home', element: <Home /> },
            { path: '/Contacto', element: <Contact /> },
            { path: '/Biografia', element: <Biografico></Biografico> }
        ]);

        // Return the configured routes
        return routes;
    }

    // Render the main App component
    return (
        // Use BrowserRouter to enable routing functionality
        <BrowserRouter>
            {/* Render the navigation bar component */}
            <NavBar />
            
            {/* Render the configured routes */}
            <AppRoutes />
        </BrowserRouter>
    );
}

// Export the App component as the default export
export default App;


