import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Phone } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { gql, useMutation } from "@apollo/client";
import { useAuth } from "@/context/AuthContext";

const SIGN_IN_MUTATION = gql`
  mutation SignIn($password: String!, $phoneNumber: String!) {
    signIn(password: $password, phoneNumber: $phoneNumber) {
      data {
        id
        email
      }
      tokens {
        access_token
        refresh_token
      }
    }
  }
`;

// The LoginForm component definition
const LoginForm: React.FC = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [signIn, { loading, error, data }] = useMutation(SIGN_IN_MUTATION);
  const { login } = useAuth();
  const navigate = useNavigate();

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const { data } = await signIn({ variables: { phoneNumber, password } });
      login(data.signIn.tokens, data.signIn.data);
      navigate("/dashboard");
    } catch (err) {
      console.error("Login error:", err);
    }
  };
  // Make sure the component returns valid JSX
  return (
    <div className="bg-white p-8 flex flex-col justify-center md:w-2/5">
      <div className="max-w-md w-full mx-auto">
        <h2 className="text-3xl font-bold mb-6">Login</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative w-full md:w-auto">
            {/* <Phone className="w-6 h-6" /> */}
            <Input
              type="tel"
              placeholder="Phone number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
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
  );
};

export default LoginForm;
