import { memo } from "react";
import { dataMenu } from "../../../constants/data";
import { Link } from "react-router-dom";
import { useTheme } from "../../../helpers/context";
import { styles } from "../../../constants/styles";

const MenuList = () => {

  const { darkMode} = useTheme();

  return (
    <div className="py-8 px-4 h-[60%]">
          {
            dataMenu.map(item => (
            <Link to={item.link}  key={item.title}>
              <div className={darkMode ? `${styles.flexStart} gap-4 mb-4 hover:bg-slate-600 ${styles.roundedEl}` : `${styles.flexStart} gap-4 hover:bg-slate-300 p-2 ${styles.roundedEl}`}>
                {<item.icon/>}
                <p className="text-[12px]">{item.title}</p>
              </div>
            </Link>
            ))
          }
        </div>
  )
}

export default memo(MenuList);