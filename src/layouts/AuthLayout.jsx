import { Outlet } from "react-router";

const AuthLayout = () => {
  return (
    <div className="poppins-regular">
      <Outlet />
    </div>
  );
};
export default AuthLayout;
