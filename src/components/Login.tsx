import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { gql, useMutation } from "@apollo/client";

// GraphQL mutation for logging in
const LOGIN_MUTATION = gql`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        id
        email
      }
    }
  }
`;

function Login() {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [login, { data, loading, error }] = useMutation(LOGIN_MUTATION);

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent default form submission behavior

    try {
      const response = await login({
        variables: {
          phone,
          password,
        },
      });

      // Save the token in localStorage or cookies
      if (response.data?.login.token) {
        localStorage.setItem("authToken", response.data.login.token);
        // Optional: Redirect to another page after successful login
      }
    } catch (err) {
      console.error("Login failed", err);
    }

    //   console.log(data, loading, error);

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

        {/* Right side - Login form */}
        <div className="bg-white p-8 flex flex-col justify-center md:w-2/5">
          <div className="max-w-md w-full mx-auto">
            <h2 className="text-3xl font-bold mb-6">Login</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="relative w-full md:w-auto">
                {/* <Phone className="w-6 h-6" /> */}
                <Input
                  type="tel"
                  placeholder="Phone number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-3 py-8 border-muted rounded-full"
                />
              </div>
              <div>
                <Input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-3 py-8 border-muted rounded-full"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-blue-600 text-white py-8 rounded-full hover:bg-blue-700"
              >
                {loading ? "Logging in..." : "Login"}
              </Button>
            </form>
            <div className="mt-4 text-center">
              <a href="#" className="text-muted-foreground hover:underline">
                Forgot Password
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  };
}

export default Login;
