import { Outlet } from "react-router-dom";
import DashboardHeader from "../components/DashboardHeader";
import Sidebar from "../components/Sidebar";

const DashboardLayout = () => {
    return (
        <>
         <DashboardHeader/>
         <Sidebar/>
         <Outlet/>
        </>
    )
}

export default DashboardLayout;