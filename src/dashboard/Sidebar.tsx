import { NavLink } from "react-router-dom";
import profile from "../assets/profile.png";
import { Home, BarChart2, DollarSign, ShoppingCart, Users, Settings, FileText, CreditCard, Mail,} from "lucide-react";

interface UserProfile {
  firstName: string;
  lastName: string;
  imageUrl: string;
}

const AdminSidebar = () => {
  const user: UserProfile = {
    firstName: "Admin",
    lastName: "Profile",
    imageUrl: profile,
  };

  const linkClasses = ({ isActive }: { isActive: boolean }) =>
    `p-2 rounded-xl flex items-center gap-2 transition-all
     ${
       isActive
         ? "bg-gray-200 text-black font-semibold"
         : "text-gray-700 hover:bg-gray-100"
     }`;

  return (
   <aside className="sticky top-0 w-64 h-screen bg-white text-gray-900 shadow-2xl p-6 z-50">
      {/* Profile */}
      <div className="flex flex-col items-center mb-10">
        <img
          src={user.imageUrl}
          alt="profile"
          className="w-20 h-20 rounded-full object-cover border"
        />
        <h4 className="mt-3 text-sm font-semibold text-gray-800">
          {user.firstName} {user.lastName}
        </h4>
      </div>

      <nav className="flex flex-col gap-3">
        <h2 className="uppercase text-xs font-bold text-gray-500">Menu</h2>

        {/* ✅ Relative links */}
        <NavLink to="/dashboard" end className={linkClasses}>
          <Home size={20} /> Dashboard
        </NavLink>

        <NavLink to="charts" className={linkClasses}>
          <BarChart2 size={20} /> Charts
        </NavLink>

        <NavLink to="sales" className={linkClasses}>
          <DollarSign size={20} /> Sales
        </NavLink>

        <h2 className="uppercase text-xs font-bold text-gray-500 mt-4">
          Management
        </h2>

        <NavLink to="items" className={linkClasses}>
          <ShoppingCart size={20} /> Products
        </NavLink>

        <NavLink to="customers" className={linkClasses}>
          <Users size={20} /> Customers
        </NavLink>

        <NavLink to="settings" className={linkClasses}>
          <Settings size={20} /> Settings
        </NavLink>

        <NavLink to="reports" className={linkClasses}>
          <FileText size={20} /> Reports
        </NavLink>

        <h2 className="uppercase text-xs font-bold text-gray-500 mt-4">
          Notifications
        </h2>

        <NavLink to="transactions" className={linkClasses}>
          <CreditCard size={20} /> Transactions
        </NavLink>

        <NavLink to="messages" className={linkClasses}>
          <Mail size={20} /> Messages
        </NavLink>
      </nav>
    </aside>
  );
};

export default AdminSidebar;
