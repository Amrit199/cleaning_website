import React, { useState } from "react";
import CustomInput from "./CustomInput";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    subject: "",
    message: "",
  });
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      (formData.name,
      formData.mobile,
      formData.email,
      formData.subject,
      formData.message == "")
    ) {
      alert("Please Fill out all the details");
      // return setError(!error)
    } else {
      alert("Thank you, your message has been sent");
      setFormData({
        name: "",
        mobile: "",
        email: "",
        subject: "",
        message: "",
      });
    }
  };
  return (
    <div className="w-full p-6 flex flex-col items-start gap-3">
      <h2 className="text-black">Motta uforpliktende tilbud på daglig vask!</h2>
      <p>Fyll ut skjemaet og du hører fra oss innen kort tid.</p>
      <form
        onSubmit={handleSubmit}
        className="w-full flex flex-col items-start justify-center gap-3"
      >
        <CustomInput
          title="Name"
          type="text"
          name="name"
          placeholder="Ditt navn eller bedriften"
          value={formData.name}
          onChange={handleChange}
        />
        <CustomInput
          title="Email"
          type="email"
          name="email"
          placeholder="Din e-post"
          value={formData.email}
          onChange={handleChange}
        />
        <CustomInput
          title="Mobile Number"
          type="text"
          name="mobile"
          placeholder="+47 000 00 000"
          value={formData.mobile}
          onChange={handleChange}
        />
        <div className="w-full flex flex-col gap-1">
          <label>MESSAGE</label>
          <textarea
            className="p-3 border-2 rounded-lg"
            name="message"
            placeholder="Skriv her..."
            value={formData.message}
            onChange={handleChange}
          ></textarea>
        </div>
        <button className=" px-3 py-2 bg-[#7fafb1] rounded-lg">
          Send meg pristilbud
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
