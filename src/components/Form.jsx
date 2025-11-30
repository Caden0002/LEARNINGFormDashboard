import { useState } from "react";

export default function Form() {
  const apiURL = "http://localhost:3000/api/form/";
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch(apiURL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    const data = await res.json();
    console.log(data);
    setForm({ name: "", email: "", message: "" });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <>
      <div>Contact Form</div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your name"
          name="name"
          value={form.name}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Enter your email"
          name="email"
          value={form.email}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Enter your message"
          name="message"
          value={form.message}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
