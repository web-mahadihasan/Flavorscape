import { useEffect, useState } from "react";

const useMenu = () => {
    const [menu, setMenu] = useState([])
   useEffect(()=>  {
         fetch(`${import.meta.env.VITE_BASE_URL}/api/menuItems`)
         .then(res =>  res.json())
         .then(data =>  setMenu(data))
    }, [])
    return {menu}
};

export default useMenu;