import { useAuth } from "../context/AuthContext";

const Dashboard = () => {
  const { user, logout } = useAuth();
  return <div>Dashboard</div>;
};

export default Dashboard;
