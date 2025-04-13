import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
interface SecurtyUrlProps {
    element: React.ReactElement;
}
function SecurtyUrl({ element }: SecurtyUrlProps) {
    const token = useSelector((state: RootState) => state.auth.token);


    if (!token) {
        return <Navigate to="/login" />;
    }

    return element;
}

export default SecurtyUrl;
