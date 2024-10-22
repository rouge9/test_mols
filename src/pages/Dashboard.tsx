import CreateOSSCModal from "@/components/CreateOSSCModal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useAuth } from "@/context/AuthContext";
import { Search, Users, Plus, LogOut } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

export default function Dashboard() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };
  const email = localStorage.getItem("email");

  return (
    <div className="flex h-screen bg-gradient-to-b from-blue-500 to-blue-600">
      {/* Sidebar */}
      <aside className="w-16 bg-blue-700 p-4 flex flex-col items-center space-y-4 border-none">
        <img src="/logo.svg" alt="logo" className="w-10 h-10" />
        <button className="text-white hover:bg-blue-600 p-2 rounded-full">
          <Users size={24} />
        </button>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-8">
        <div className="bg-gradient-to-b from-blue-400 to-blue-500 rounded-3xl shadow-lg p-8 h-full flex flex-col">
          {/* Header */}
          <header className="flex justify-between items-center mb-8">
            <h1 className="text-4xl font-bold text-white">OSSC Center Lists</h1>
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
              <span>{email}</span>
              <Button variant="ghost" size="icon" onClick={handleLogout}>
                <LogOut className="h-5 w-5" />
              </Button>
            </div>
          </header>

          {/* Search and Create */}
          <div className="flex justify-between mb-8">
            <div className="relative w-1/4">
              <Input type="text" placeholder="Search OSSC by Name" className="pl-10" />
              <Search
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-sky-600"
                size={20}
              />
            </div>
            {/* <Button className="bg-white text-black hover:bg-blue-600">
              <Plus className="mr-2 h-4 w-4" /> Create OSSC
            </Button> */}
            <CreateOSSCModal />
          </div>

          {/* No documents state */}
          <div className="flex-1 flex flex-col items-center justify-center">
            <div className="w-60 h-60  rounded-full flex items-center justify-center mb-4">
              <img src="/EmptyState.svg" alt="empty state" className="w-60 h-60" />
            </div>
            <h2 className="text-xl mb-2 text-white font-semibold">No documents</h2>
            <p className="text-white text-2xl">Start creating OSSC data</p>
          </div>
        </div>
      </main>
    </div>
  );
}
