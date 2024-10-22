// import React, { useState } from "react";
// import { Link, useLocation } from "react-router-dom";
// import {
//   LogOut,
//   Bell,
//   Menu,
//   ChevronRight,
//   ChevronLeft,
//   Search,
//   ChevronDown,
// } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { cn } from "@/lib/utils";
// // import { Input } from "./ui/input";
// // import {
// //   DropdownMenu,
// //   DropdownMenuContent,
// //   DropdownMenuItem,
// //   DropdownMenuLabel,
// //   DropdownMenuSeparator,
// //   DropdownMenuTrigger,
// // } from "@/components/ui/dropdown-menu";

// const menuItems = [
//   {
//     text: "Dashboard",
//     icon: "/dashboard.png",
//     path: "/",
//   },
//   {
//     text: "Leaderboard",
//     icon: "/leaderboard.png",
//     path: "/leaderboard",
//   },
//   { text: "Order", icon: "/order.png", path: "/order" },
//   {
//     text: "Products",
//     icon: "/products.png",
//     path: "/products",
//   },
//   {
//     text: "Sales Report",
//     icon: "/salesReport.png",
//     path: "/sales-report",
//   },
//   {
//     text: "Messages",
//     icon: "/messages.png",
//     path: "/messages",
//   },
//   {
//     text: "Settings",
//     icon: "/settings.png",
//     path: "/settings",
//   },
// ];

// const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
//   const [sidebarOpen, setSidebarOpen] = useState(true);
//   const [search, setSearch] = useState("");
//   const [language, setLanguage] = useState("en");

//   const path = useLocation().pathname;

//   return (
//     <div className="flex h-screen bg-gray-100">
//       <aside
//         className={cn(
//           "bg-white shadow-md transition-all duration-300 ease-in-out",
//           sidebarOpen ? "w-64" : "w-16",
//           "hidden md:block"
//         )}
//       >
//         <div className="flex flex-row gap-5 justify-center items-center py-5">
//           <img src="/logo.png" alt="logo" className="flex w-10 h-10" />
//           <h1
//             className={cn(
//               "text-2xl font-bold transition-all duration-300",
//               sidebarOpen ? "opacity-100" : "opacity-0 hidden"
//             )}
//           >
//             Dabang
//           </h1>
//         </div>
//         <div className="flex flex-row gap-5 justify-center items-center">
//           <nav className="pt-4 flex gap-5 flex-col justify-start items-start">
//             {menuItems.map((item) => (
//               <Link
//                 key={item.text}
//                 to={item.path}
//                 className="flex justify-start items-start"
//               >
//                 <Button
//                   variant="ghost"
//                   className="text-slate-500 hover:bg-indigo-500 hover:text-white rounded-xl"
//                 >
//                   <img
//                     className={cn(
//                       "hover:text-white",
//                       sidebarOpen ? "h-6 w-6 " : "h-6 w-6"
//                     )}
//                     src={item.icon}
//                     alt={item.text}
//                   />
//                   <span
//                     className={cn(
//                       "ml-2 transition-all duration-300 text-lg",
//                       sidebarOpen ? "opacity-100" : "opacity-0 w-0"
//                     )}
//                   >
//                     {item.text}
//                   </span>
//                 </Button>
//               </Link>
//             ))}
//             <Button
//               variant="ghost"
//               className="w-full justify-start items-center text-slate-500 hover:bg-indigo-500 hover:text-white rounded-xl "
//             >
//               <LogOut className="h-6 w-6" />
//               <span
//                 className={cn(
//                   "ml-2 transition-all duration-300 ",
//                   sidebarOpen ? "opacity-100" : "opacity-0 w-0"
//                 )}
//               >
//                 Sign Out
//               </span>
//             </Button>
//           </nav>
//         </div>
//       </aside>
//       <div className="flex flex-col flex-1 overflow-hidden">
//         <header className="bg-white shadow-sm">
//           <div className="mx-auto px-4 md:px-0 py-4 sm:px-6 lg:px-0">
//             <div className="flex items-center justify-between px-4">
//               <div className="flex items-center">
//                 <Button
//                   variant="ghost"
//                   size="icon"
//                   className="md:hidden mr-2"
//                   onClick={() => setSidebarOpen(!sidebarOpen)}
//                 >
//                   <Menu className="h-5 w-5" />
//                 </Button>
//                 {sidebarOpen ? (
//                   <ChevronLeft
//                     className="h-8 w-8 hidden md:block cursor-pointer mr-2"
//                     onClick={() => setSidebarOpen(!sidebarOpen)}
//                   />
//                 ) : (
//                   <ChevronRight
//                     className="h-8 w-8 hidden md:block cursor-pointer mr-2"
//                     onClick={() => setSidebarOpen(!sidebarOpen)}
//                   />
//                 )}
//                 <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
//                   {path.split("/")[1].length > 0
//                     ? path.split("/")[1].charAt(0).toUpperCase() +
//                       path.split("/")[1].slice(1)
//                     : "Dashboard"}
//                 </h2>
//               </div>
//               {/* <div className="relative w-full md:w-auto">
//                   <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-500" />
//                   <Input
//                     type="search"
//                     placeholder="Search here..."
//                     className="pl-8 w-full"
//                     value={search}
//                     onChange={(e) => setSearch(e.target.value)}
//                   />
//                 </div> */}
//               <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-4 w-full md:w-auto">
//                 <div className="relative w-full md:w-auto">
//                   <Search className="absolute left-2 top-2.5 h-4 w-4 text-indigo-500 font-bold" />
//                   <Input
//                     type="search"
//                     placeholder="Search here..."
//                     className="pl-8 w-[450px] bg-gray-50 border-none focus-within:border-indigo-500 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-opacity-50"
//                     value={search}
//                     onChange={(e) => setSearch(e.target.value)}
//                   />
//                 </div>
//                 <div className="flex items-center space-x-4">
//                   <DropdownMenu>
//                     <DropdownMenuTrigger asChild>
//                       <div className="flex items-center">
//                         <Button variant="ghost" className="w-full flex gap-2">
//                           {language === "en" ? (
//                             <img src="usa.png" alt="USA" className="w-5 h-5" />
//                           ) : (
//                             <img src="et.png" alt="USA" className="w-5 h-5" />
//                           )}
//                           <span className="font-medium">
//                             {language === "en" ? "Eng (US)" : "Amh (AM)"}
//                           </span>
//                           <ChevronDown className="ml-2 h-4 w-4" />
//                         </Button>
//                       </div>
//                     </DropdownMenuTrigger>
//                     <DropdownMenuContent>
//                       <DropdownMenuItem onClick={() => setLanguage("en")}>
//                         <img src="usa.png" alt="USA" className="w-5 h-5" />
//                         Eng (US)
//                       </DropdownMenuItem>
//                       <DropdownMenuItem onClick={() => setLanguage("am")}>
//                         <img src="et.png" alt="USA" className="w-5 h-5" />
//                         Amh (AM)
//                       </DropdownMenuItem>
//                     </DropdownMenuContent>
//                   </DropdownMenu>
//                   <Button
//                     variant="default"
//                     size="icon"
//                     className="bg-orange-50 text-amber-500 hover:bg-orange-100 hover:text-amber-600 rounded-xl"
//                   >
//                     <Bell className="h-4 w-4" />
//                   </Button>
//                   <DropdownMenu>
//                     <DropdownMenuTrigger asChild>
//                       <Button variant="ghost" className="flex items-center">
//                         <img
//                           src="/profile.png"
//                           alt="User"
//                           className="w-8 h-8 rounded-xl mr-2"
//                         />
//                         <div className="flex flex-col">
//                           <span className="font-medium">Musfiq</span>
//                           <span className="text-xs text-gray-500">Admin</span>
//                         </div>
//                         <ChevronDown className="ml-2 h-4 w-4" />
//                       </Button>
//                     </DropdownMenuTrigger>
//                     <DropdownMenuContent>
//                       <DropdownMenuLabel>My Account</DropdownMenuLabel>
//                       <DropdownMenuSeparator />
//                       <DropdownMenuItem>Profile</DropdownMenuItem>
//                       <DropdownMenuItem>Settings</DropdownMenuItem>
//                       <DropdownMenuItem>Sign out</DropdownMenuItem>
//                     </DropdownMenuContent>
//                   </DropdownMenu>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </header>
//         <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-50">
//           <div className="mx-auto max-w-7xl px-4 py-6">{children}</div>
//         </main>
//       </div>
//     </div>
//   );
// };

// export default Layout;
export default function Layout() {
  return <div>Layout</div>;
}
