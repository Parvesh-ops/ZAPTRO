
// import Navbar from "./Navbar"
// import { Outlet } from "react-router-dom"
// import Sidebar from "./Sidebar"

import { Outlet } from "react-router-dom"
import Navbar from "./Navbar"
import Sidebar from "./Sidebar"


// const DashboardLayout = () => {
//     return (
//         <>
//             <Navbar />
//             <div>
//                 <div className="flex-1 px-4 py-10 md:px-10 h-[calc(100vh-64px)] overflow-y-auto">
//                     <Outlet />
//                 </div>
//                 <Sidebar />

//             </div>
//         </>
//     )
// }

// export default DashboardLayout




const DashboardLayout = () => {
    return (
        <div className="flex">
            <Sidebar />
            <div className="flex-1">
                <Navbar />
                <div>
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default DashboardLayout
