import {
  Card,
  Input,
  Button,
  Typography,
  Spinner,
} from "@material-tailwind/react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../../feature/action/authAction";
import { useState } from "react";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [ formData, setFormData ] = useState({
      email: '',
      password: '',
  });

  const { error, isLoading, loggedIn } = useSelector((state) => state.auth);

  const handleChange = (e) => {
      setFormData({
          ...formData,
          [e.target.name]: e.target.value,
      })
  }

  const handleSubmit = async (e) => {
      e.preventDefault();
      dispatch(loginUser(formData));
      if (loggedIn !== false){
        navigate(`/`)
      }
  }


return (
  <Card color="transparent" shadow={false}>
      <Typography variant="h4" color="blue-gray">
          Sign Up
      </Typography>
      <Typography color="gray" className="mt-1 font-normal">
          Enter your details to register.
      </Typography>
      <form onSubmit={handleSubmit} className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
          <div className="mb-4 flex flex-col gap-6">
              <Typography variant="h6" color="blue-gray" className="mb-3">
                  Email address
              </Typography>
              <Input
                  size="lg"
                  placeholder="name@mail.com"
                  className="border-t-blue-gray-200 focus:border-t-gray-900"
                  labelProps={{
                      className: "before:content-none after:content-none",
                  }}
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
              />
              <Typography variant="h6" color="blue-gray" className="mb-3">
                  Password
              </Typography>
              <div>
                  <Input
                      type="password"
                      size="lg"
                      placeholder="********"
                      className="border-t-blue-gray-200 focus:border-t-gray-900"
                      labelProps={{
                          className: "before:content-none after:content-none",
                      }}
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                  />
              </div>
          </div>
          {error && <div className="text-red-500 mb-4">{error}</div>}
          <Button type="submit" className="mt-6" fullWidth>
              {isLoading ? <Spinner /> : "Sign Up"}
          </Button>
          <Typography color="gray" className="mt-4 text-center font-normal">
              Create an account?{" "}
              <Link to="/register" className="font-medium text-gray-900">
                  Sign Up
              </Link>
          </Typography>
      </form>
  </Card>
); 
}
export default Login;
