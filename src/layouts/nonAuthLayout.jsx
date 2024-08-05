import { Navigate } from "react-router-dom";
import { useAppSelector } from "../redux/store";

const NonAuthLayout = ({ children }) => {
    const { data } = useAppSelector((state) => state.auth);

    if (data?.id) {
        return <Navigate to={"/"} />;
    }

    return <>{children}</>;
};

export default NonAuthLayout;