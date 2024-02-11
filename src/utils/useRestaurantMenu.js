import { RES_URL } from "./constants";
import { useState, useEffect } from "react";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(RES_URL + resId);
    const json = await data.json();

    setResInfo(json.data);
  };

  return resInfo;
};

export default useRestaurantMenu;
