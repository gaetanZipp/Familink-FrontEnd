import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import BuildingPage from '../components/BuildingPage/BuildingPage';
import Main from '../components/MainPage';

const router = createBrowserRouter([
   
    { path: "/", element: <Main /> },
    { path: "BuildingPage", element: <BuildingPage /> }, 

    // Ici tu ajoutes les routes que tu appelleras dans toutes tes pages
    // Donc pour faire simple tu centralises les routes ici
    
]);

export default function AppRoutes() {
    return <RouterProvider router={router} />;
}