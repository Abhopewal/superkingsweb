import DashboardHeader from "../components/DashboardHeader";
import Sidebar from "../components/Sidebar";
import { useState } from "react";

const DashboardLayout = () => {

    const [sidebarFull, setSidebarFull] = useState(false) 

    const showFullsidebar = () => {
        setSidebarFull(!sidebarFull)
      }

    return (
        <>
         <DashboardHeader showFullsidebar={showFullsidebar} sidebarFull={sidebarFull}/>
         <Sidebar showFullsidebar={showFullsidebar} sidebarFull={sidebarFull}/>
        </>
    )
}

export default DashboardLayout;