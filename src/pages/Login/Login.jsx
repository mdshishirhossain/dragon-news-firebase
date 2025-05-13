import React, { use, useState } from "react";
import { Link, useLocation, useNavigate, useNavigation } from "react-router";
import { AuthContext } from "../../provider/AuthProvider/AuthProvider";
import { toast } from "react-toastify";

const Login = () => {
  const { logIn } = use(AuthContext);
  const navigate = useNavigate()
  const location = useLocation()

  const [error, setError] = useState("")

  const handleLogIn = (e) => {
    e.preventDefault();
    // console.log(e.target);
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    logIn(email, password)
      .then((result) => {
        // console.log(result);
        navigate(location?.state || "/")
        toast.success("User logged in successfully");
      })
      .catch((error) => {
        setError("Email & Password Invalid")
        toast.error(error.code);
      });
  };
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="card bg-base-100 w-full max-w-lg shrink-0  p-10">
        <div className="card-body">
          <h2 className="text-center font-semibold text-2xl">
            Login your account
          </h2>
          <div className="divider mt-10"></div>
          <form onSubmit={handleLogIn} className="fieldset">
            <label className="label font-semibold text-base">Email</label>
            <input
              type="email"
              name="email"
              className="input w-full"
              placeholder="Email"
              required
            />
            <label className="label font-semibold text-base">Password</label>
            <input
              type="password"
              name="password"
              className="input w-full"
              placeholder="Password"
              required
            />
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            {
              error && <p className="text-red-700 text-sm">{error}</p>
            }
            <button type="submit" className="btn btn-neutral mt-4">
              Login
            </button>
            
            <p className="font-semibold text-center pt-6 text-base">
              Dont’t Have An Account ?{" "}
              <Link className="text-secondary" to="/auth/register">
                Register
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
