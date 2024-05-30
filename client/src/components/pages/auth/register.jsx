import {
  Card,
  Input,
  Button,
  Typography,
  Spinner,
} from "@material-tailwind/react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../../../feature/action/authAction";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useEffect } from "react";

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoading, loggedIn, error } = useSelector((state) => state.auth);

  const formik = useFormik({
    initialValues: {
      username: '',
      email: '',
      password: '',
    },
    validationSchema: Yup.object().shape({
      username: Yup.string()
        .min(3, 'Username must be at least 3 characters long')
        .required('Required'),
      email: Yup.string()
        .email('Invalid email address')
        .required('Required'),
      password: Yup.string()
        .required('No password provided.') 
        .min(8, 'Password is too short - should be 8 chars minimum.')
        .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.')
    }),
    onSubmit: (values) => {
      dispatch(registerUser(values));
    },
  });

  useEffect(() => {
    if (loggedIn) {
      navigate('/');
    }
  }, [loggedIn, navigate]);
  // npm i formik yup

  return (
    <Card color="transparent" shadow={false}>
      <Typography variant="h4" color="blue-gray">
        Sign up
      </Typography>
      <Typography color="gray" className="mt-1 font-normal">
        Enter your details to register
      </Typography>
      <form
        onSubmit={formik.handleSubmit}
        className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
      >
        {error ? <p className="h-12 w-full bg-red-50 rounded-md border-[1px] border-red-500 px-4 flex items-center justify-start text-red-300 ">{error}</p> : "" }
        <div className="mb-1 flex flex-col gap-6">
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Username
          </Typography>
          <Input
            size="lg"
            placeholder="Username"
            className="!border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{ className: "before:content-none after:content-none" }}
            name="username"
            value={formik.values.username}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.username && formik.errors.username ? (
            <div className="text-red-500">{formik.errors.username}</div>
          ) : null}

          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Email address
          </Typography>
          <Input
            size="lg"
            placeholder="name@mail.com"
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
          {isLoading ? <Spinner /> : "Sign Up"}
        </Button>
        <Typography color="gray" className="mt-4 text-center font-normal">
          Already have an account?{" "}
          <Link to="/login" className="font-medium text-gray-900">
            Sign In
          </Link>
        </Typography>
      </form>
    </Card>
  );
};

export default Register;
