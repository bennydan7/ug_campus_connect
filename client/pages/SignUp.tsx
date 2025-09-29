import { useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { useNavigate, Link } from "react-router-dom";
import { User, Mail, Lock, GraduationCap, Calendar } from "lucide-react";

export default function SignUp() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [program, setProgram] = useState("");
  const [year, setYear] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // Simulate signup by storing user in context
    login({ name: name || email.split("@")[0] || "Organizer", email });
    navigate("/organizer");
  }

  return (
    <div className="min-h-screen bg-background/50 flex items-center justify-center p-6">
      <div className="max-w-4xl rounded-2xl bg-white shadow-lg md:flex md:overflow-hidden w-full">
        <div className="p-8 md:w-1/2">
          <h2 className="text-2xl font-extrabold">Create your account</h2>
          <p className="mt-2 text-sm text-muted-foreground">Join the campus community to create and manage events.</p>

          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <label className="block text-sm">
              <div className="mb-1 text-sm font-medium">Full name</div>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Jane Doe" className="w-full rounded-lg border px-10 py-2 outline-none" />
              </div>
            </label>

            <label className="block text-sm">
              <div className="mb-1 text-sm font-medium">University email</div>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@university.edu" className="w-full rounded-lg border px-10 py-2 outline-none" />
              </div>
            </label>

            <label className="block text-sm">
              <div className="mb-1 text-sm font-medium">Password</div>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Create a password" className="w-full rounded-lg border px-10 py-2 outline-none" />
              </div>
            </label>

            <label className="block text-sm">
              <div className="mb-1 text-sm font-medium">Program</div>
              <div className="relative">
                <GraduationCap className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                <input value={program} onChange={(e) => setProgram(e.target.value)} placeholder="e.g. Computer Science" className="w-full rounded-lg border px-10 py-2 outline-none" />
              </div>
            </label>

            <label className="block text-sm">
              <div className="mb-1 text-sm font-medium">Year of study</div>
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                <input value={year} onChange={(e) => setYear(e.target.value)} placeholder="e.g. 2" className="w-full rounded-lg border px-10 py-2 outline-none" />
              </div>
            </label>

            <div className="flex items-center justify-between">
              <div className="text-sm">
                <Link to="/login" className="text-primary underline">Already have an account? Login</Link>
              </div>
              <button type="submit" className="rounded-full bg-primary px-4 py-2 font-semibold text-primary-foreground">Sign Up</button>
            </div>

            <div className="mt-4 grid gap-2">
              <button type="button" className="rounded-md border px-3 py-2 text-sm">Continue with Google</button>
              <button type="button" className="rounded-md border px-3 py-2 text-sm">Continue with Microsoft</button>
            </div>
          </form>
        </div>

        <div className="hidden md:block md:w-1/2" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=1200&auto=format&fit=crop)', backgroundSize: 'cover', backgroundPosition: 'center' }} />
      </div>
    </div>
  );
}
