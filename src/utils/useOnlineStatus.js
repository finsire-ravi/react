import { useEffect, useState } from "react";

const useOnlineStatus = () => {
  // If online need to show the data
  const [onlineStatus, setOnlineStatus] = useState(true);

  useEffect(() => {
    window.addEventListener("offline", () => {
      setOnlineStatus(false);
    });

    window.addEventListener("online", () => {
      setOnlineStatus(true);
    });
  }, []);

  // if onlient need to give some statice page value

  return onlineStatus;
};

export default useOnlineStatus;
