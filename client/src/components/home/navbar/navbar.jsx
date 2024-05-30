import { User } from "../../../assets";
import { MdOutlineWbSunny } from "react-icons/md";
import { RxMoon } from "react-icons/rx";
import { useTheme } from "../../../helpers/context";
import { styles } from "../../../constants/styles";
import { useSelector } from "react-redux";

const Navbar = () => {
  
  const { darkMode, handleDarkMode} = useTheme();
  const { user } = useSelector(state => state.auth);
  
  return (
    <div className={ darkMode 
      ? `col-span-5 ${styles.flexStyle} px-4  bg-slate-800 h-[60px] text-white` 
      : `col-span-5 px-4 ${styles.flexStyle}  bg-white text-slate-700 h-[60px]`}>
      
      <div className="left flex items-center justify-start gap-8">
        {/* <div className="menu-icon text-2xl cursor-pointer">
          <IoIosMenu />
        </div> */}
      </div>
    
      <div className="right flex items-center justify-around gap-4">
        <div className="menu-icon flex text-xl cursor-pointer" onClick={handleDarkMode}>
          { darkMode ?  <RxMoon /> : <MdOutlineWbSunny />}
        </div>

      {/* user image */}
        <div className="flex items-center justify-center h-10 w-10">
        {user?.user.img 
            ? <img src={User} alt="user" className="w-10 h-10 rounded-full object-cover" />
            : <h2 className="w-10 h-10 rounded-full p-2 bg-slate-300 text-slate-800 font-bold">{user?.user.username?.slice(0,2).toUpperCase()}</h2>}
        </div>

      </div>

    </div>
  )
}

export default Navbar;

