import LoginForm from "@/components/LoginForm";

const LoginPage = () => {
  return (
    <div className="flex flex-col md:flex-row h-screen">
      {/* Left side - Blue background with logo and text */}
      <div className="bg-blue-600 text-white p-8 flex flex-col justify-center items-center md:w-3/5">
        <div className="mb-8">
          <div className="flex gap-5 items-center justify-center">
            <img src="/logo.svg" alt="logo" className="w-30 h-30" />
            <div className="flex flex-col">
              <h1 className="text-2xl font-bold">ሰራተኛ</h1>
              <h1 className="text-2xl font-bold ml-1">ቀጣሪ</h1>
              <h1 className="text-2xl font-bold">ውሳኔ ሰጪ</h1>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start justify-center">
          <h1 className="text-4xl font-bold mb-4 text-start ">Ethiopia Labor Market</h1>
          <h2 className="text-4xl font-bold text-start ">Information System</h2>
        </div>
      </div>
      <LoginForm />
    </div>
  );
};

export default LoginPage;
