import React from "react";  
import { useEffect, useState } from "react";
import { MENU_API_URL } from "../utils/constants";

const useRestrauntMenu = (resId) => {
  const [resMenu, setResMenu] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    try {
      const data = await fetch(MENU_API_URL + resId);
      console.log(data);
      const convertJson = await data.json();

      setResMenu(convertJson?.data || convertJson);
    } catch (error) {
      setResMenu({ status: false });
    }
  };
  return resMenu;
};

export default useRestrauntMenu;
