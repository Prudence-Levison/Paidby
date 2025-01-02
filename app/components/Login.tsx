'use client';
import Image from 'next/image';
import loginmodel from '../public/login-model-paidby.avif';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/navigation';
import { AppDispatch } from '../Store/store';
import { apiLogin } from '../request/auth';

export const Login = () => {
	const dispatch = useDispatch<AppDispatch>();
	const router = useRouter();

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		try {
			const { data } = await dispatch(apiLogin({ email, password })).unwrap();
			router.push('/dashboard');
			window.localStorage.setItem('user', JSON.stringify(data?.data?.legacy_v2));
			console.log(data?.data?.legacy_v2);
		} catch (error) {
			console.log(error);
		}
	};

	//   console.log('Form submitted:', { email, password });
	//   dispatch(login({ email, password }));
	// };

	const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
		// e.preventDefault();
		setEmail(e.target.value);
	};

	const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
		// e.preventDefault();
		setPassword(e.target.value);
	};

	return (
		<div className=' block  lg:grid lg:grid-cols-2  lg:gap-x-11 '>
			{/* This div contains the entire login asides the image  */}
			<div className='px-6 lg:px-0 lg:pl-44'>
				<h3 className='font-bold text-3xl lg:text-4xl pt-10 lg:pt-20 '>Login</h3>
				<p className='py-4 lg:py-6 text-gray-600 text-sm lg:text-xl'>Sign-in to your Paidby account</p>

				<form className='block' onSubmit={handleSubmit}>
					<div className='py-4'>
						<input
							className=' pl-2 lg:pl-6 text-left
             py-4  border-2 rounded-lg block w-full border-gray-300  '
							type='text'
							placeholder='Email'
							value={email}
							onChange={handleEmail}
						/>
					</div>

					<div className='py-4'>
						<input
							className=' pl-6 text-left
             py-4  border-2 rounded-lg block w-full border-gray-300'
							type='Password'
							placeholder='Password'
							value={password}
							onChange={handlePassword}
						/>
					</div>
					<div className=' block  lg:grid lg:grid-cols-2 pt-3 lg:pt-6'>
						<div className='lg:hidden text-sm absolute right-6'>
							<p>Forgot Password?</p>
						</div>
						<div>
							<button
								className='bg-[#2EF6F6] w-full lg:w-44 lg:px-14 py-3 mt-16 lg:mt-0 lg:my-0 rounded-lg '
								type='submit'>
								Login
							</button>
						</div>
						<div className='hidden lg:flex pl-3 lg:pl-32 pt-4'>
							<p>Forgot Password?</p>
						</div>
					</div>
				</form>

				{/* <div className=' block  lg:grid lg:grid-cols-2 pt-3 lg:pt-6'>
          <div className='lg:hidden text-sm absolute right-6'>
            <p>Forgot Password?</p>
         </div> 
          <div >
            <button className='bg-[#2EF6F6] w-full lg:w-44 lg:px-14 py-3 mt-16 lg:mt-0 lg:my-0 rounded-lg ' type="submit">Login</button>
         </div>
         <div className='hidden lg:flex pl-3 lg:pl-32 pt-4'>
            <p>Forgot Password?</p>
         </div>
         </div> */}

				<p className=' flex justify-center lg:justify-start pt-10 lg:pt-14 text-xs md:text-base pb-5'>
					Don't have an account? <span className='font-bold text-xs pl-0 lg:pl-2 md:text-base'>Register</span>
				</p>
			</div>

			{/* The image on the Login page which is hidden for mobile screens */}
			<div className='hidden lg:block  size-9/12 pt-6'>
				<Image src={loginmodel} alt='Model' />
			</div>
		</div>
	);
};

export default Login;
