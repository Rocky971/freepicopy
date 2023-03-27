import React from 'react';
import logo from '../../assets/login/freepik-company-gray.721fdfe0.svg';
const bgImage = "https://i.ibb.co/bzFw2pS/vestrahorn-mountains-stokksnes-iceland.jpg";
const avatar = "https://i.ibb.co/kBKNfLt/default-03.png";
const Login = () => {
    return (
        <div className='flex md:flex-row flex-col md:h-[100vh]'>
            <div className="">
                <img src={bgImage} className='h-[100vh] md:w-[75vw] w-full object-cover' alt="" />
            </div>
            {/* left_side_bar */}
            <div className="md:w-[80vw] lg:w-[70vw] 2xl:w-[25vw] xl:w-[35vw] overflow-y-scroll">
                <div className="flex items-center gap-2 text-[#1273eb] mt-3 ml-4">
                    <i className="fa-solid fa-chevron-left"></i>
                    <p className='font-medium cursor-pointer'>Back</p>
                </div>
                <div className="bg-[#fff]">
                    {/* main___logo */}
                    <div className="mt-[100px] mb-[70px]">
                        <div className="flex items-center justify-center">
                            <img src={logo} className="h-[34px]" alt="" />
                        </div>
                    </div>
                    {/* login__welcome_text */}
                    <div className="flex flex-col items-center justify-center">
                        <h5 className='mb-[1rem] text-[1.375rem] font-medium text-[#374957]'>Create an account</h5>
                        <div className="sub_title mb-[2rem]"></div>
                    </div>
                    {/* form */}
                    <form className='mx-[65px] mb-[2rem]'>
                        <div className="flex flex-col justify-center">
                            <div className="flex flex-col w-full mb-[19px]">
                                <label className='text-[#5f7d95] text-[.875rem] font-semibold'>Email</label>
                                <div className="">
                                    <input type="email" name="" className="mt-[2px] border text-[#374957] login_input_shadow p-[10px] w-full rounded-[3px] text-[1rem]" />
                                </div>
                            </div>
                            <div className="flex flex-col w-full mb-[19px]">
                                <label className='text-[#5f7d95] text-[.875rem] font-semibold'>Password</label>
                                <div className="relative">
                                    <input type="password" name="" className="mt-[2px] border text-[#374957] login_input_shadow p-[10px] w-full rounded-[3px] text-[1rem]" />
                                    <i className="fa-regular fa-eye-slash absolute right-2 text-[#a5b7c6] top-2"></i>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col w-full">
                            <div className="">
                                <input type="submit" name="" className="mt-[2px] text-[#fff] cursor-pointer font-semibold bg-[#1273eb] p-[10px] w-full rounded-[3px] text-[1rem]" value="Sign up" />
                            </div>
                        </div>
                    </form>
                    {/* conditions */}
                    <div className="mb-[2rem] mx-[65px]">
                        <p className='text-[.875rem] text-center text-[#869fb2]'>By clicking the “Sign up” button, you are creating a Freepik account and therefore you agree to Freepik Company’s <span className='text-[#869fb2] font-medium cursor-pointer'>Terms of Use</span> and <span className='text-[#869fb2] font-medium cursor-pointer'>Privacy Policy</span>.</p>
                    </div>
                    {/* already_have_account */}
                    <div className="mb-[2rem]">
                        <p className='text-[.875rem] font-medium text-center text-black'>Already have an account? <span className='text-[#1273eb] font-semibold'>Log in</span></p>
                    </div>
                    {/* report_condition */}
                    <div className="flex items-center justify-center gap-1">
                        <p className='text-[.813rem] text-[#869fb2]'>by</p>
                        <div className="h-[17px]">
                            <img src={logo} className="logo2" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;