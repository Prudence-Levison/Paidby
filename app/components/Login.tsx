"use client";
import Image from "next/image";
import loginmodel from "../public/login-model-paidby.avif";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { AppDispatch } from "../Store/store";
import { apiLogin } from "../request/auth";
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import Button from "./Buttonprop";
import { SubmitHandler, useForm } from 'react-hook-form';

type FormFields = {
  email: string;
  password: string;
}


export const Login = () => {
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit, setError, formState:{errors , isSubmitting}} = useForm<FormFields>();


  const  onSubmit: SubmitHandler<FormFields> = async (data) => {
  
	setLoading(true);
    try {
      const { data } = await dispatch(apiLogin({ email, password })).unwrap();
      toast.success('Login successful!');
      setTimeout(() => {
        router.push('/dashboard');
      }, 3000); // Redirect after 3 seconds
      window.localStorage.setItem(
        "user",
        JSON.stringify(data?.data?.legacy_v2)
      );
      console.log(data?.data?.legacy_v2);
    } catch (error :any) {
      toast.error(error.message || 'Invalid email or password'); 
      setError("email",{
        message: "This email is not valid "
    })
    if (error.message === 'Email must contain .com') {
      setError("email", { message: "Email must contain .com" });
    } else if (error.message === 'Invalid email address') {
      setError("email", { message: "Invalid email address" });
    } else if (error.message === 'Email does not exist') {
      setError("email", { message: "Email does not exist, please sign up" });
    } else {
      setError("email", { message: "Failed to send request, please try again" });
    }
      console.log(error);
    }finally {
      setLoading(false);
    }
  };
  
  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    // e.preventDefault();
    setEmail(e.target.value);
  };

  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    // e.preventDefault();
    setPassword(e.target.value);
  };
  





  return (
    <div className="  block  lg:grid lg:grid-cols-2  lg:gap-x-11 ">
      {/* This div contains the entire login asides the image  */}
      <div className="px-6 lg:px-0 lg:pl-44">
        <h3 className="font-bold text-3xl lg:text-4xl pt-10 lg:pt-20 ">
          Login
        </h3>
        <p className="py-4 lg:py-6 text-gray-600 text-sm lg:text-xl">
          Sign-in to your Paidby account
        </p>

        <form className="block" onSubmit={handleSubmit(onSubmit)}>
          <div className="py-4">
            <input 
             {...register("email", {
              required: "Email is required",
              validate: (value) => {
                  if (!value.includes("@")){
                      return "Email must include @";
                  } else if (!value.includes(".com"))
                    {
                      return "Email must contain .com";
                    } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value)) {
                      return "Rejected";
                    } else {
                      return true;
                    }
              },
              // pattern: {
              //   value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              //   message: "Failed to send request, please try again"
              // }
              
            }
            
      
            )}
              className=" pl-2 lg:pl-6 text-left
             py-4  border-2 rounded-lg block w-full bg-white border-gray-300  "
              type="text"
              placeholder="Email"
              value={email}
              onChange={handleEmail}
            />
            {errors.email && <div className='text-red-500'>{errors.email.message}</div>}
          </div>

          <div className="py-4">
            <input 
             {...register("password", {
              required: "Password is required",
              minLength: {
                  value : 8,
                  message: "Password must have at least 8 characters",
              },
            })}

              className=" pl-6 text-left
             py-4  border-2 rounded-lg block w-full bg-white !important focus:bg-white active:bg-white border-gray-300"
              type="Password"
              placeholder="Password"
              value={password}
              onChange={handlePassword}
            />
            {errors.password && <div className='text-red-500'>{errors.password.message}</div>}
          </div>
          <div className=" block  lg:grid lg:grid-cols-2 pt-3 lg:pt-6">
            <div className="lg:hidden text-sm absolute right-6">
              <p>Forgot Password?</p>
            </div>
            <div>
              <Button

			loading ={loading}
		      className="bg-[#2EF6F6] w-full lg:w-44 lg:px-14 py-3 mt-16 lg:mt-0 lg:my-0 rounded-lg "
              type="submit"
              >

                Login
              </Button>
            </div>
            <div className="hidden lg:flex pl-3 lg:pl-32 pt-4">
              <p>Forgot Password?</p>
            </div>
          </div>
        </form>

        <p className=" flex justify-center lg:justify-start pt-10 lg:pt-14 text-xs md:text-base pb-5">
          Don't have an account?{" "}
          <span className="font-bold text-xs pl-0 lg:pl-2 md:text-base">
            Register
          </span>
        </p>
      </div>

      {/* The image on the Login page which is hidden for mobile screens */}
      <div className="hidden lg:block  size-9/12 pt-6">
        <Image src={loginmodel} alt="Model" />
      </div>
    </div>
  );
};

export default Login;
