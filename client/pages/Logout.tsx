import { useAuth } from "@/context/AuthContext";
import { useNavigate } from "react-router-dom";
import { LogOut } from "lucide-react";

export default function Logout() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  function handleLogout() {
    logout();
    navigate('/');
  }

  return (
    <div className="min-h-screen bg-background/50 flex items-center justify-center p-6">
      <div className="max-w-md rounded-2xl bg-white p-8 shadow text-center">
        <div className="mx-auto mb-4 grid h-16 w-16 place-items-center rounded-full bg-destructive text-destructive-foreground">
          <LogOut className="h-6 w-6" />
        </div>
        <h2 className="text-xl font-semibold">Are you sure you want to log out?</h2>
        <p className="mt-2 text-sm text-muted-foreground">You'll need to sign in again to manage your events.</p>

        <div className="mt-6 flex items-center justify-center gap-3">
          <button onClick={handleLogout} className="rounded-full bg-destructive px-4 py-2 font-semibold text-destructive-foreground">Logout</button>
          <button onClick={() => navigate(-1)} className="rounded-full bg-muted px-4 py-2 font-semibold">Cancel</button>
        </div>
      </div>
    </div>
  );
}
