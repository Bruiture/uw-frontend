import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error] = useState("");
  const [loading] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // 🔥 stop page reload
    navigate("/dashboard");
  };

  return (
    <div className="login-wrapper">
      <div className="login-header">
        <div className="logo-box">
          <span className="material-symbols-outlined">
            admin_panel_settings
          </span>
        </div>

        <h1>Admin Portal</h1>
      </div>

      <div className="login-card">
        <h2>Welcome Back</h2>

        <p>
          Please enter your credentials to access the admin panel.
        </p>

        {error && (
          <div className="error-box">
            <span className="material-symbols-outlined">error</span>
            {error}
          </div>
        )}

        <form onSubmit={onSubmit}>
          <div className="input-group">
            <label>Email Address</label>

            <input
              type="email"
              placeholder="admin@company.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <label>Password</label>

            <input
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button
            className="login-btn"
            disabled={loading}
          >
            {loading ? "Signing in..." : "Sign In to Dashboard"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;