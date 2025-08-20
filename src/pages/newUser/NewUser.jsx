import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import PageHeader from "../../components/PageHeader/PageHeader";
import {
  Visibility,
  VisibilityOff,
  ArrowBack,
  PersonAdd,
} from "@mui/icons-material";
import "./NewUser.css";

export default function NewUser() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    status: "active",
    transaction: "",
    password: "",
    avatar: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.username.trim()) newErrors.username = "Username is required";
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email format is invalid.";
    }
    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("New user data:", formData);
      alert("User created successfully!");
      navigate("/users");
    }
  };

  return (
    <div className="newUserContainer">
      <div className="newUserHeader">
        <button
          className="backButton"
          onClick={() => navigate("/users")}
          aria-label="Back to users list"
        >
          <ArrowBack />
        </button>
        <PageHeader
        title="Add New User"
        description="Create user accounts"
        descriptionIcon={<PersonAdd className="description-icon" />}
        showTimeFilters={false}
      />
      </div>

      <form onSubmit={handleSubmit} className="newUserForm">
        <div className="formGroup">
          <label>Username *</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            placeholder="Enter username"
            className={errors.username ? "error" : ""}
          />
          {errors.username && (
            <span className="errorText">{errors.username}</span>
          )}
        </div>

        <div className="formGroup">
          <label>Email *</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="example@domain.com"
            className={errors.email ? "error" : ""}
          />
          {errors.email && <span className="errorText">{errors.email}</span>}
        </div>

        <div className="formGroup">
          <label>Password *</label>
          <div className="passwordInput">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="••••••"
              className={errors.password ? "error" : ""}
            />
            <button
              type="button"
              className="togglePassword"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </button>
          </div>
          {errors.password && (
            <span className="errorText">{errors.password}</span>
          )}
        </div>

        <div className="formGroup">
          <label>Transaction amount ($)</label>
          <input
            type="number"
            name="transaction"
            value={formData.transaction}
            onChange={handleChange}
            placeholder="0.00"
          />
        </div>

        <div className="formGroup">
          <label>Account status</label>
          <select name="status" value={formData.status} onChange={handleChange}>
            <option value="active">Active</option>
            <option value="non-active">Disabled</option>
          </select>
        </div>

        <div className="formGroup">
          <label>Avatar link</label>
          <input
            type="text"
            name="avatar"
            value={formData.avatar}
            onChange={handleChange}
            placeholder="https://example.com/avatar.jpg"
          />
          {formData.avatar && (
            <div className="avatarPreview">
              <img src={formData.avatar} alt="Avatar Preview" />
            </div>
          )}
        </div>

        <div className="formActions">
          <button
            type="button"
            className="cancelBtn"
            onClick={() => navigate("/users")}
          >
            Cancel
          </button>
          <button type="submit" className="createBtn">
            Create User
          </button>
        </div>
      </form>
    </div>
  );
}
