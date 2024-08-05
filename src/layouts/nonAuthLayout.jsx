import { Navigate } from "react-router-dom";
import { useAppSelector } from "../redux/store";

const NonAuthLayout = ({ children }) => {
    const { data } = useAppSelector((state) => state.auth);
    console.log(data);
    
    // if (data?.CorporateEmployee?.id) {
    //     return <Navigate to={"/dashboard"} />;
    // }

    return <>{children}</>;
};

export default NonAuthLayout;