import { useState } from "react";

function RegistrationForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    gender: "",
    city: "",
    agree: false,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  };

 
  const validate = () => {
    let newErrors = {};

    if (!form.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = "Invalid email";
    }

    if (!form.password) {
      newErrors.password = "Password is required";
    } else if (form.password.length < 6) {
      newErrors.password = "Minimum 6 characters";
    }

    if (form.confirmPassword !== form.password) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    if (!form.gender) {
      newErrors.gender = "Select Gender";
    }

    if (!form.city) {
      newErrors.city = "Select City";
    }

    if (!form.agree) {
      newErrors.agree = "Accept Terms";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      alert("Registration Successful");

      console.log(form);

      setErrors({});

      setForm({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        gender: "",
        city: "",
        agree: false,
      });
    }
  };

  return (
    <div style={{ width: "400px", margin: "30px auto" }}>
      <h2>Registration Form</h2>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          value={form.name}
          onChange={handleChange}
        />
        <p style={{ color: "red" }}>{errors.name}</p>

        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          value={form.email}
          onChange={handleChange}
        />
        <p style={{ color: "red" }}>{errors.email}</p>

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
        />
        <p style={{ color: "red" }}>{errors.password}</p>

        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={form.confirmPassword}
          onChange={handleChange}
        />
        <p style={{ color: "red" }}>{errors.confirmPassword}</p>

        <div>
          <label>
            <input
              type="radio"
              name="gender"
              value="Male"
              checked={form.gender === "Male"}
              onChange={handleChange}
            />
            Male
          </label>

          <label>
            <input
              type="radio"
              name="gender"
              value="Female"
              checked={form.gender === "Female"}
              onChange={handleChange}
            />
            Female
          </label>
        </div>
        <p style={{ color: "red" }}>{errors.gender}</p>

        <select
          name="city"
          value={form.city}
          onChange={handleChange}
        >
          <option value="">Select City</option>
          <option value="Hyderabad">Hyderabad</option>
          <option value="Bangalore">Bangalore</option>
          <option value="Chennai">Chennai</option>
        </select>
        <p style={{ color: "red" }}>{errors.city}</p>

        <br /><br />

        <label>
          <input
            type="checkbox"
            name="agree"
            checked={form.agree}
            onChange={handleChange}
          />
          I Agree to Terms & Conditions
        </label>
        <p style={{ color: "red" }}>{errors.agree}</p>

        <br />

        <button type="submit">Register</button>
      </form>

      <hr />

      <h3>Live Preview</h3>

      <p><strong>Name:</strong> {form.name}</p>
      <p><strong>Email:</strong> {form.email}</p>
      <p><strong>Gender:</strong> {form.gender}</p>
      <p><strong>City:</strong> {form.city}</p>
    </div>
  );
}

export default RegistrationForm;