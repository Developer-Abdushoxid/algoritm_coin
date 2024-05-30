import {
  Card,
  Input,
  Button,
  Typography,
  Spinner,
} from "@material-tailwind/react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../../../feature/action/authAction";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useEffect } from "react";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isLoading, loggedIn, error } = useSelector((state) => state.auth);

const formik = useFormik({
  initialValues: {
    email: '',
    password: '',
  },
  validationSchema: Yup.object().shape({
    email: Yup.string()
      .email('Invalid email address')
      .required('Required'),
    password: Yup.string()
      .required('No password provided.')
      .min(8, 'Password is too short - should be 8 chars minimum.')
      .matches(/[a-zA-Z]/, 'Password can only contain Latin letters')
  }),
  onSubmit: (values) => {
    dispatch(loginUser(values));
  }
})

  useEffect(() => {
    if (loggedIn) {
      navigate('/');
    }
  }, [loggedIn, navigate]);

  return (
    <Card color="transparent" shadow={false}>
      <Typography variant="h4" color="blue-gray">
        Sign In
      </Typography>
      <Typography color="gray" className="mt-1 font-normal">
        Nice to meet you! Enter your details to login.
      </Typography>
      <form
        onSubmit={formik.handleSubmit}
        className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
      >
        {error ? <p className="h-12 w-full bg-red-50 rounded-md border-[1px] border-red-500 px-4 flex items-center justify-start text-red-300 ">{error}</p> : "" }

        <div className="mb-1 flex flex-col gap-6">
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Email address
          </Typography>
          <Input
            size="lg"
            placeholder="Enter email address"
            className="!border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{ className: "before:content-none after:content-none" }}
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}

          />
          {formik.touched.email && formik.errors.email ? (
            <div className="text-red-500">{formik.errors.email}</div>
          ) : null}
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Password
          </Typography>
          <Input
            type="password"
            size="lg"
            placeholder="********"
            className="!border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{ className: "before:content-none after:content-none" }}
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}

          />
          {formik.touched.password && formik.errors.password ? (
            <div className="text-red-500">{formik.errors.password}</div>
          ) : null}
        </div>
        <Button type="submit" className="mt-6" fullWidth>
          {isLoading ? <Spinner /> : "Sign In"}
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
};

export default Login;
