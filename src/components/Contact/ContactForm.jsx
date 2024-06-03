import React, { useState } from "react";
import { FaAngleDown } from "react-icons/fa6";
import { setContact } from "../../api";
import { ToastContainer, toast, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
    subject: "",
    model: "",
    phone: "",
    companyName: "",
    contactMethod: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    console.log("data", formData);
    const newForm = {
      senderName: formData?.firstName || "no-name",
      from: formData?.email || "no-mail",
      subject: formData?.subject,
      model: formData?.model,
      phone: formData?.phone,
      contactMethod: formData?.contactMethod,
      companyName: formData?.companyName,
    };

    const loadingToastId = toast.loading("Submitting...");

    setContact(newForm)
      .then((res) => {
        if (res.status === 200) {
          // Check if response status is 200 OK
          toast.update(loadingToastId, {
            render: "Form submitted successfully!",
            type: "success",
            isLoading: false,
            autoClose: 3000,
          });
          setFormData({
            firstName: "",
            email: "",
            subject: "",
            model: "",
            phone: "",
            companyName: "",
            contactMethod: "",
          });
        } else {
          throw new Error("Failed to submit the form"); // Throw error for non-200 responses
        }
      })
      .catch((err) => {
        toast.update(loadingToastId, {
          render: "Failed to submit the form. Please try again.",
          type: "error",
          isLoading: false,
          autoClose: 3000,
        });
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="flex flex-col gap-8">
      <form className="flex flex-col gap-8" onSubmit={handleSubmit}>
        <div className="flex 2xl:flex-row xl:flex-row lg:flex-row md:flex-row sm:flex-row xs:flex-col xxs:flex-col gap-8">
          <input
            type="text"
            id="firstName"
            className="bg-white shadow-lg text-webDescrip px-8 text-[16px] border focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Name"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            id="email"
            className="bg-white shadow-lg text-webDescrip px-8 text-[16px] border focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <input
            type="text"
            id="subject"
            className="bg-white shadow-lg text-webDescrip px-8 text-[16px] border focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            required
          />
        </div>
        <div className="flex 2xl:flex-row xl:flex-row lg:flex-row md:flex-row sm:flex-row xs:flex-col xxs:flex-col gap-8">
          <select
            id="model"
            className="bg-white shadow-lg text-webDescrip px-8 text-[16px] border focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            value={formData.model}
            onChange={handleChange}
            required
          >
            <option value="" disabled hidden>
              Select model to inquire
            </option>
            <option value="Hourly">Hourly</option>
            <option value="Fixed">Fixed</option>
            <option value="Bot">Bot</option>
          </select>
          <input
            type="text"
            id="phone"
            className="bg-white shadow-lg text-webDescrip px-8 text-[16px] border focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Phone Number (optional)"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>
        <div className="flex 2xl:flex-row xl:flex-row lg:flex-row md:flex-row sm:flex-row xs:flex-col xxs:flex-col gap-8">
          <input
            type="text"
            id="companyName"
            className="bg-white shadow-lg text-webDescrip px-8 text-[16px] border focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Company Name (if applicable)"
            value={formData.companyName}
            onChange={handleChange}
          />
          <input
            type="text"
            id="contactMethod"
            className="bg-white shadow-lg text-webDescrip px-8 text-[16px] border focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Preferred Contact Method"
            value={formData.contactMethod}
            onChange={handleChange}
            required
          />
        </div>
        <div className="w-full flex justify-center items-center">
          <button
            type="submit"
            className="text-white text-[16px] w-[300px] px-5 py-2.5 bg-gradient-to-r from-fromclr to-toclr hover:bg-gradient-to-r hover:from-toclr hover:to-fromclr rounded-full focus:outline-none active:bg-gradient-to-r active:from-custom-purple active:to-custom-blue"
            disabled={loading}
          >
            <p className="font-Lato text-base font-medium leading-[28px] tracking-normal">
              Submit
            </p>
          </button>
        </div>
      </form>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        transition={Slide}
      />
    </div>
  );
};
