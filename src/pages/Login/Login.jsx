import { FcGoogle } from "react-icons/fc";
import bg from "../../assets/home/Login.png"
import { useState } from "react";
import { VscEyeClosed } from "react-icons/vsc";
import { PiEyeClosedBold } from "react-icons/pi";
import { Link, useNavigate } from "react-router";
import loginLoiite from "../../assets/lottie/login-lottie.json"
import Lottie from "lottie-react";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";

const Login = () => {
    const [showPassword, setShowPassword] = useState(false)
    const {loginWithGoogle, setUser, loginWithEmail} = useAuth()
    const navigate = useNavigate()
    const [error, setError] = useState({})

    const handleEmailLogin = (e) =>  {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
        
        loginWithEmail(email, password)
        .then(result =>  {
            // console.log(result.user)
            toast.success("Successfully Log in")
            navigate("/")
        }).catch(err =>  {
            toast.error("Failed to Login")
            if ((err = "auth/invalid-credential")) {
                setError({
                  ...error,
                  invalid: "Invalid email or password! try again",
                });
            }
            console.log(err)
        })
    }

    const handleGoogleLogin = async () =>  {
        try {
            const result = await loginWithGoogle()

            toast.success("Successfully Log in")
            setUser(result.user)
            navigate("/")
        } catch (err) {
            toast.error("Failed to Login")
            console.log(err)
        }
    }

    return (
        <div
        className={`relative h-screen bg-no-repeat bg-center bg-cover`}
        style={{
            backgroundImage: `url('${bg}')`,
          }}
        >
        {/* <div className="absolute w-full inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-30 duration-300 rounded-md"></div> */}
        <div className="h-full w-full flex items-center max-w-5xl mx-auto xl:px-0">
          <div className="text-center rounded-md  w-full login-shadow" >
            <div className=" rounded-md py-24 px-10">
           
            <div className="max-w-6xl mx-auto px-4 xl:px-0 flex items-center justify-between flex-col md:flex-row gap-8 font-inter">
                <div className="flex-1 text-center space-y-2 order-2 md:order-1">
                    <p className="font-semibold text-primary-dark dark:text-black/75">Welcomoe Back</p>
                    <h3 className="text-4xl font-bold text-black/80 ">Members Login</h3>
                    <div className="pt-6">
                        <button onClick={handleGoogleLogin} className="w-full lg:w-3/4 mx-auto flex items-center justify-center p-2 border border-primary rounded-md gap-3 font-medium text-black/80">
                            <span><FcGoogle size={22} /></span>
                            <span>Login With Google</span>
                        </button>
                        <div className="divider w-full lg:w-3/4 mx-auto my-5 text-sm text-black/75 ">OR Login With Email</div>
                         {/* Error  */}
                         {
                         error?.invalid && (
                            <p className="text-base text-red-500 text-center font-base">
                            {error.invalid}
                            </p>)
                        }
                        {/* Form  */}
                        <form onSubmit={handleEmailLogin} className="space-y-3">
                            {/* Email  */}
                            <div className="w-full lg:w-3/4 mx-auto">
                                <label className="block text-base text-left mb-1 font-medium text-black/70">Email</label>
                                <input
                                id="email" type="email" name="email" required placeholder="john@example.com"
                                className="w-full h-11 px-4 text-base transition-all border rounded outline-none focus-visible:outline-none peer border-slate-200 text-slate-500 autofill:bg-white focus:border-primary/40 focus:outline-none bg-white bg-opacity-90"/>
                            </div>
                            <div className="w-full lg:w-3/4 mx-auto relative">
                                <label className="block text-base text-left mb-1 font-medium text-black/70">Password</label>
                                <input
                                id="password" type={showPassword? "text": "password"} name="password" required placeholder="●●●●●●"
                                className="w-full h-11 px-4 text-base transition-all  border rounded outline-none focus-visible:outline-none peer border-slate-200 text-slate-500 autofill:bg-white focus:border-primary/40 focus:outline-none bg-white bg-opacity-90"/>
                                <div onClick={() =>  setShowPassword(!showPassword)} className="absolute right-3 top-10 cursor-pointer">
                                    {showPassword ? <span><VscEyeClosed size={20} /></span> : <span><PiEyeClosedBold size={20} /></span>}
                                </div>
                            </div>

                            <div className="flex items-center justify-between w-full lg:w-3/4 mx-auto">
                                <label className="label cursor-pointer">
                                    <input type="checkbox" className="checkbox checkbox-sm mr-2" />
                                    <span className="label-text">Remember me</span>
                                </label>
                                <Link >Forgot Password?</Link>
                            </div>
                            <div className="w-full lg:w-3/4 mx-auto">
                                <button  type="submit" className="w-full p-2 border border-yellow bg-yellow rounded-md font-medium text-[#1f2937] hover:bg-dark-black hover:border-dark-black focus:bg-dark-black focus:border-dark-black hover:text-white focus:text-white duration-300 flex items-center gap-2 justify-center">Continue with Email</button>
                            </div>
                        </form>
                        <div className="my-4">
                            <p className="font-medium text-black/70">Don't have an Account? <Link to={"/auth/register"} className="text-blue-600 hover:text-black/75 dark:hover:text-primary duration-300">Create one</Link></p>
                        </div>
                    </div>
                </div>
                <div className="flex-1 order-1 md:order-2">
                    <Lottie animationData={loginLoiite}/>
                </div>
            </div>

            </div>
          </div>
        </div>
      </div>
    );
};

export default Login;