import { useContext } from 'react';
import { AuthContext } from '../context/AuthProvider';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

function Logout() {
    const { setAuthUser } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleOnLogout = () => {
        try {
            localStorage.removeItem("User");
            setAuthUser(null);
            navigate("/login");
            toast.success("Logout Successfully")


        } catch (error) {
            console.error("Logout failed:", error);
            toast.error("Logout Failed")
        }
    };

    return (
        <button
            className="p-4 mx-10 font-semibold bg-red-600 rounded-2xl w-28 h-8 flex justify-center items-center hover:bg-red-700 cursor-pointer"
            onClick={handleOnLogout}
        >
            LOG OUT
        </button>
    );
}

export default Logout;
