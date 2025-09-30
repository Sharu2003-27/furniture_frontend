import { useState } from "react"
import { useNavigate, Link } from "react-router-dom"

export default function LoginForm() {
    const navigate = useNavigate()
    const [form, setForm] = useState({ email: "", password: "" })
    const [showPassword, setShowPassword] = useState(false)
    const [errors, setErrors] = useState({})

    function validate() {
        const e = {}
        if (!form.email) e.email = "Email is required"
        if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Enter a valid email"
        if (!form.password) e.password = "Password is required"
        if (form.password && form.password.length < 6) e.password = "Minimum 6 characters"
        setErrors(e)
        return Object.keys(e).length === 0
    }

    function handleSubmit(e) {
        e.preventDefault()
        if (!validate()) return
        // Fake login success
        navigate("/")
    }

    return (
        <div className="container py-5" style={{ minHeight: "80vh" }}>
            <div className="row justify-content-center">
                <div className="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-5">
                    <div className="card shadow-sm border-0">
                        <div className="card-body p-4 p-md-5">
                            <h3 className="mb-1 text-center">Welcome back</h3>
                            <p className="text-muted text-center mb-4">Login to continue</p>
                            <form onSubmit={handleSubmit} noValidate>
                                <div className="mb-3">
                                    <label className="form-label">Email</label>
                                    <input
                                        type="email"
                                        className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                                        placeholder="you@example.com"
                                        value={form.email}
                                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                                    />
                                    {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Password</label>
                                    <div className="input-group">
                                        <input
                                            type={showPassword ? "text" : "password"}
                                            className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                                            placeholder="••••••••"
                                            value={form.password}
                                            onChange={(e) => setForm({ ...form, password: e.target.value })}
                                        />
                                        <button
                                            type="button"
                                            className="btn btn-outline-secondary"
                                            onClick={() => setShowPassword((s) => !s)}
                                        >
                                            {showPassword ? "Hide" : "Show"}
                                        </button>
                                        {errors.password && <div className="invalid-feedback d-block">{errors.password}</div>}
                                    </div>
                                </div>
                                <button type="submit" className="btn btn-primary w-100">Login</button>
                            </form>
                            <div className="text-center mt-3">
                                <Link to="/" className="text-decoration-none">Back to Home</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}