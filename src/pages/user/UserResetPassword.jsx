import React from 'react';
import logo from '../../assets/icon-logo.png';
import AppInput from '../../components/ui/AppInput';
import { Link } from 'react-router-dom';
import AppButton from '../../components/ui/AppButton';
import { Typography } from '@material-tailwind/react';

function UserResetPassword() {
    return (
        <>
            <div className=' flex flex-col h-screen justify-center gap-y-20'>
                <Link to="/welcome" ><img src={logo} alt="logo" className='mx-auto w-64' /></Link>
                <div className='flex flex-col  rounded-lg gap-5 px-4 py-5 mx-6'>
                    <Typography className="font-bold text-xl text-center pb-5">RESET PASSWORD</Typography>
                    <Typography className="text-center text-sm">Provide Your Email To Reset Your Password</Typography>
                    <div className='flex flex-col gap-y-10'>
                        <div className='w-full'>
                            <AppInput fieldName="Email" />
                        </div>
                        <div>
                            <AppButton>SUBMIT</AppButton>
                        </div>
                        <div className='text-center'>
                            <Link to="/user/login" className='cursor-pointer hover:text-[#0D98E5]'>Back To Login ? </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default UserResetPassword;