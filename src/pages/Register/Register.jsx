import { FcGoogle } from "react-icons/fc";
import bg from "../../assets/home/Login.png"
import { useState } from "react";
import { VscEyeClosed } from "react-icons/vsc";
import { PiEyeClosedBold } from "react-icons/pi";
import { Link, useNavigate } from "react-router";
import registerLoiite from "../../assets/lottie/register.json"
import Lottie from "lottie-react";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import Swal from "sweetalert2";
import toast from "react-hot-toast";

const Register = () => {
    const [showPassword, setShowPassword] = useState(false)
    const {loginWithGoogle, setUser, registerNewUser, updataUser, user} = useAuth()
    const [loading, setLoading] = useState({})
    const [imageUrl, setImageUrl] = useState("");
    const [checked, setChecked] = useState(false);
    const navigate = useNavigate()

    console.log(user)
      //    Handle Image upload
      const handleImageUpload = async (e) => {
        setLoading({
            ...loading,
            imgUpload: true
        })
        const imageLink = e.target.files[0];
        const imageData = new FormData();
        imageData.append("image", imageLink);
        try {
            const {data} = await axios.post(`https://api.imgbb.com/1/upload?key=176775b308da684d8b761f7bdfe641cd`, imageData)
            setImageUrl(data?.data?.display_url)
            setLoading({
                ...loading,
                imgUpload: false
            })
        } catch (error) {
            toast.error('Image upload failed')
        }
        
    };
    
    const handleRegister = async (e) => {
        e.preventDefault()

        const form = e.target;
        const data = new FormData(form);
        const name = data.get("name");
        const email = data.get("email");
        const password = data.get("password");
        const updateData = { displayName: name, photoURL: imageUrl };

        try {
            setLoading({
                ...loading, 
                registration: true
            })
            const result = await registerNewUser(email, password)
            setUser(result.user)
            const update = await updataUser(updateData)
            toast.success("Successfully registration done")
            navigate("/")
            setLoading({
                ...loading, 
                registration: false
            })
        } catch (error) {
            Swal.fire({
                icon: "error",
                title: "Registration Failed",
                text: "Something went wrong! Try again",
            });
        }
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
        className={`relative min-h-screen bg-no-repeat bg-center bg-cover`}
        style={{
            backgroundImage: `url('${bg}')`,
          }}
        >
        {/* <div className="absolute w-full inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-30 duration-300 rounded-md"></div> */}
        <div className="min-h-screen w-full flex items-center max-w-5xl mx-auto xl:px-0 font-inter">
          <div className="text-center rounded-md  w-full login-shadow" >
            <div className=" rounded-md py-6 px-10">
           
            <div className="max-w-6xl mx-auto px-4 xl:px-0 flex items-center justify-between flex-col md:flex-row gap-8">
                <div className="flex-1 order-1 md:order-2">
                    <Lottie animationData={registerLoiite}/>
                </div>

                {/* right side */}
                <div className="flex-1 text-center space-y-2 order-2 md:order-1">
                    <p className="font-semibold text-black/70">Register</p>
                    <h3 className="text-4xl font-bold text-black/80">Start Journey Today</h3>
                    <div className="pt-6">
                        <button onClick={handleGoogleLogin} className="w-full lg:w-3/4 mx-auto flex items-center justify-center p-2 border border-primary rounded-md gap-3 font-medium text-black/70">
                            <span><FcGoogle size={22} /></span>
                            <span>Register With Google</span>
                        </button>
                        <div className="divider w-full lg:w-3/4 mx-auto my-5 text-sm text-black/70">OR Login With Email</div>
                        {/* Form  */}
                        <form onSubmit={handleRegister} className="space-y-2">
                            {/* Name */}
                            <div className="w-full lg:w-3/4 mx-auto">
                                <label className="block text-base text-left mb-1 font-medium text-black/75">Full Name</label>
                                <input
                                id="name" type="text" name="name" required placeholder="John Doe"
                                className="w-full h-11 px-4 text-base transition-all border rounded outline-none focus-visible:outline-none peer border-slate-200 text-slate-500 autofill:bg-white focus:border-primary/40 focus:outline-none bg-white bg-opacity-90"/>
                            </div>
                            {/* Email  */}
                            <div className="w-full lg:w-3/4 mx-auto">
                                <label className="block text-base text-left mb-1 font-medium text-black/75">Email</label>
                                <input
                                id="email" type="email" name="email" required placeholder="john@example.com"
                                className="w-full h-11 px-4 text-base transition-all border rounded outline-none focus-visible:outline-none peer border-slate-200 text-slate-500 autofill:bg-white focus:border-primary/40 focus:outline-none bg-white bg-opacity-90"/>
                            </div>
                            {/* {
                                error.wrongEmail && <p className="text-sm text-red-600 text-left w-full lg:w-3/4 mx-auto">{error.wrongEmail}</p>
                            } */}
                            {/* UserName */}
                            <div className="w-full lg:w-3/4 mx-auto">
                                <label className="block text-base text-left mb-1 font-medium text-black/75">Profile Photo</label>
                                <input
                                onChange={handleImageUpload}
                                id="image" type="file" name="username" required placeholder="john_doe1234"
                                className="w-full file-input shadow border-none outline-none bg-white/75"/>
                            </div>
                            {/* Password  */}
                            <div className="w-full lg:w-3/4 mx-auto relative">
                                <label className="block text-base text-left mb-1 font-medium text-black/75">Password</label>
                                <input
                                id="password" type={showPassword? "text": "password"} name="password" required placeholder="●●●●●●"
                                className="w-full h-11 px-4 text-base transition-all  border rounded outline-none focus-visible:outline-none peer border-slate-200 text-slate-500 autofill:bg-white focus:border-primary/40 focus:outline-none bg-white bg-opacity-90"/>
                                <div onClick={() =>  setShowPassword(!showPassword)} className="absolute right-3 top-10 cursor-pointer">
                                    {showPassword ? <span><VscEyeClosed size={20} /></span> : <span><PiEyeClosedBold size={20} /></span>}
                                </div>
                            </div>
                          
                            {/* Term and conditions  */}
                            <div className="w-full lg:w-3/4 mx-auto flex items-center">
                                <label onChange={() =>  setChecked(!checked)} className="label cursor-pointer">
                                    <input type="checkbox" className="checkbox checkbox-sm mr-2" />
                                    <span className="text-black/65">Agree with our <span className="text-primary">terms and policy</span></span>
                                </label>
                            </div>
                            <div className="w-full lg:w-3/4 mx-auto">
                                {
                                    loading?.imgUpload ? <button type="submit" disabled className="w-full p-2 border border-yellow bg-yellow rounded-md font-medium text-[#1f2937] hover:bg-dark-black hover:border-dark-black focus:bg-dark-black focus:border-dark-black hover:text-white focus:text-white duration-300 flex items-center gap-2 justify-center"><span className="loading loading-spinner text-neutral hover:text-yellow"></span> Image uploading...</button>
                                    : <button type="submit" disabled={!checked} className="w-full p-2 border border-yellow bg-yellow rounded-md font-medium text-[#1f2937] hover:bg-dark-black hover:border-dark-black focus:bg-dark-black focus:border-dark-black hover:text-white focus:text-white duration-300 flex items-center gap-2 justify-center">Continue with Email</button>
                                }
                                
                            </div>
                        </form>
                        <div className="my-4">
                            <p className="font-medium text-black/65">Already have an Account? <Link to={"/auth/login"} className="text-blue-600 hover:text-primary-black duration-300">Login here</Link></p>
                        </div>
                    </div>
                </div>
                
            </div>

            </div>
          </div>
        </div>
      </div>
    );
};

export default Register;