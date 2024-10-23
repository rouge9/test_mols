import BaseOssTable from "@/components/BaseOssTable";
import CreateOSSCModal from "@/components/CreateOSSCModal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useAuth } from "@/context/AuthContext";
import { columns, data } from "@/lib/helpers/data";
import { Search, LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };
  const email = localStorage.getItem("email");

  return (
    <div className="flex h-screen bg-blue-700">
      {/* Sidebar */}
      <aside className="w-16 bg-blue-700 p-4 flex flex-col items-center space-y-4 border-none">
        <img src="/logo.svg" alt="logo" className="w-10 h-10" />
        <div className="rounded-full w-10 h-10 flex items-center justify-center cursor-pointer backdrop-filter backdrop-blur bg-opacity-20 bg-white">
          <img src="/active.svg" alt="github" className="w-5 h-5" />
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-8">
        <div className="bg-gradient-to-b from-blue-500 to-blue-600 rounded-3xl shadow-lg p-8 h-full flex flex-col">
          <div className="px-8 py-6">
            {/* Header */}
            <header className="flex justify-between items-center mb-8">
              <div />
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
                <span>{email}</span>
                <Button variant="ghost" size="icon" onClick={handleLogout}>
                  <LogOut className="h-5 w-5" />
                </Button>
              </div>
            </header>
            <h1 className="text-4xl font-bold text-white pb-8">
              OSSC Center Lists
            </h1>

            {/* Search and Create */}
            <div className="flex justify-between mb-8">
              <div className="relative w-64">
                <Input
                  type="text"
                  placeholder="Search OSSC by Name"
                  className="pl-10"
                />
                <Search
                  className="absolute right-3 top-1/2 transform -translate-y-1/2  text-sky-600"
                  size={20}
                />
              </div>
              {/* <Button className="bg-white text-black hover:bg-blue-600">
              <Plus className="mr-2 h-4 w-4" /> Create OSSC
            </Button> */}
              <CreateOSSCModal />
            </div>

            {data.length < 0 ? (
              <div className="flex-1 flex flex-col items-center justify-center">
                <div className="w-60 h-60  rounded-full flex items-center justify-center mb-4">
                  <img
                    src="/EmptyState.svg"
                    alt="empty state"
                    className="w-60 h-60"
                  />
                </div>
                <h2 className="text-xl mb-2 text-white font-semibold">
                  No documents
                </h2>
                <p className="text-white text-2xl">Start creating OSSC data</p>
              </div>
            ) : (
              <BaseOssTable columns={columns} data={data} />
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
