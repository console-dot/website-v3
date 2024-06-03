import React, { useState } from "react";
import {
  editOpenPositionCount,
  getOpenPositions,
  setOpenPosition,
} from "../../api";
import { ToastContainer, toast, Slide } from "react-toastify";
import { useDispatch } from "react-redux";
import { setCareerPageData } from "../../redux";

export const OpenPositions = ({ data, filterData }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPosition, setSelectedPosition] = useState(null);
  const [description, setDescription] = useState("");
  const [resume, setResume] = useState(null);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    city: "",
    dob: "",
    gender: "",
    experience: "",
    github: "",
  });

  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const itemsPerPage = 3;
  const newData = filterData ? filterData : data;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = newData?.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const openModal = (position) => {
    setSelectedPosition(position);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedPosition(null);
    setDescription("");
    setResume(null);
  };

  const handleResumeChange = (e) => {
    setResume(e.target.files[0]);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    const newForm = {
      senderName: formData?.fullName || "no-name",
      from: formData?.email || "no-mail",
      city: formData?.city || "no-city",
      senderExperience: formData?.experience || "0",
      gender: formData?.gender || "",
      github: formData?.github || "",
      phone: formData?.phone || "",
      attachment: resume,
      designation: selectedPosition?.designation,
    };

    const loadingToastId = toast.loading("Submitting...");

    setOpenPosition(newForm)
      .then((res) => {
        if (res.status === 200) {
          const newCount = Number(selectedPosition?.noOfRequest) + 1;
          const newForm = {
            noOfRequest: newCount.toString(),
          };
          if (
            selectedPosition?._id &&
            selectedPosition?.noOfPositions <= selectedPosition?.capacity
          ) {
            editOpenPositionCount(newForm, selectedPosition?._id)
              .then((res) => {
                if (res?.status == 200) {
                  getOpenPositions()
                    .then((res) => {
                      dispatch(setCareerPageData(res?.data));
                    })
                    .catch((err) => console.log(err));
                }
              })
              .catch((err) => console.log(err));
          }
          console.log("start");
          // Check if response status is 200 OK
          toast.update(loadingToastId, {
            render: "Form submitted successfully!",
            type: "success",
            isLoading: false,
            autoClose: 3000,
          });
          console.log("end");
          // setFormData({
          //   fullName: "",
          //   email: "",
          //   city: "",
          //   experience: "",
          //   gender: "",
          //   github: "",
          //   phone: "",
          //   resume: "",
          //   designation: "",
          // });
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
    closeModal();
  };

  return (
    <div className="flex flex-col gap-8">
      {newData.length > 0 ? (
        currentItems.map((i, index) => (
          <div
            key={index}
            className="flex flex-col justify-between shadow-md lg:p-4 xl:p-4 2xl:p-4 md:p-2 sm:p-4 xs:p-4 xss:p-4 xl:px-8 lg:px-8 md:px-8 w-full bg-white"
          >
            <div className="w-full flex xl:flex-row lg:flex-row md:flex-row sm:flex-col xss:flex-col xl:gap-0 lg:gap-0 md:gap-0 sm:gap-4 xs:gap-4 xss:gap-4">
              {/* C1 */}
              <div className="flex flex-col xl:w-[75%] lg:w-[75%] md:w-[75%] sm:w-[100%] xs:w-[100%] gap-4">
                {/* Info Container */}
                <div className="w-full">
                  <h1 className="font-poppins mb-2 font-bold text-[16px] leading-5 text-webHeading">
                    {i.designation}
                  </h1>
                  <div className="flex w-[100%]">
                    {/* First */}
                    <div className="flex flex-col gap-1 xl:w-[30%] lg:w-[30%] md:w-[30%] sm:w-[50%] xs:w-[50%]">
                      <div className="flex lg:flex-row xl:flex-row 2xl:flex-row md:flex-row sm:flex-row xs:flex-col xss:flex-row w-full justify-between">
                        <h1 className="font-lato whitespace-nowrap text-[14px] leading-5 text-justify text-webDescrip">
                          Minimum Experience :
                        </h1>
                      </div>
                      <div className="flex w-full justify-between">
                        <h1 className="font-lato text-[14px] leading-5 text-justify text-webDescrip">
                          Open Positions :
                        </h1>
                      </div>
                      <div className="flex w-full gap-4 justify-between">
                        <h1 className="font-lato text-[14px] leading-5 text-justify text-webDescrip whitespace-nowrap">
                          Qualification :
                        </h1>
                      </div>
                    </div>
                    {/* Second */}
                    <div className="flex flex-col gap-1 xl:w-[70%] lg:w-[70%] md:w-[70%] sm:w-[50%] xs:w-[50%]">
                      <div className="flex lg:flex-row xl:flex-row 2xl:flex-row md:flex-row sm:flex-row xs:flex-col xss:flex-row w-full justify-between">
                        <h1 className="font-lato font-bold text-[14px] leading-5 text-end text-webHeading whitespace-nowrap">
                          {i?.experience}
                        </h1>
                      </div>
                      <div className="flex w-full justify-between">
                        <h1 className="font-lato font-bold text-[14px] leading-5 text-justify text-webHeading">
                          {i?.noOfPositions}
                        </h1>
                      </div>
                      <div className="flex w-full gap-4 justify-between">
                        <h1 className="font-lato font-bold text-[14px] text-webHeading">
                          {i?.qualifications}
                        </h1>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Type */}
                <div className="w-full flex lg:flex-row md:flex-row sm:flex-row xs:flex-row gap-4 mt-4">
                  <button
                    type="button"
                    className="text-fromclr lg:text-[16px] xl:text-[16px] 2xl:text-[16px] md:text-[16px] sm:text-[12px] xs:text-[12px] xss:text-[12px] xl:font-semibold lg:font-semibold md:font-semibold sm:font-bold xs:font-bold xss:font-bold whitespace-nowrap py-2 xl:px-8 lg:px-8 md:px-8 sm:px-4 xs:px-4 xss:px-4 bg-btnGroup rounded-full"
                  >
                    {i?.employmentType}
                  </button>
                  <button
                    type="button"
                    className="text-fromclr xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[12px] xs:text-[12px] xss:text-[12px] whitespace-nowrap xl:font-semibold lg:font-semibold md:font-semibold sm:font-bold xs:font-bold xss:font-bold p-2 xl:px-8 lg:px-8 md:px-8 sm:px-4 xs:px-4 xss:px-4 bg-btnGroup rounded-full"
                  >
                    {i?.jobCategory}
                  </button>
                </div>
              </div>
              {/* C2 */}
              <div className="flex xl:flex-col lg:flex-col md:flex-col sm:flex-row xs:flex-row xss:flex-row-reverse xl:justify-start lg:justify-start md:justify-start sm:justify-between xs:justify-between xss:justify-between gap-4 xl:w-[25%] lg:w-[25%] md:w-[25%] sm:w-[100%] xs:w-[100%]">
                <button
                  type="button"
                  className="text-white p-2 px-8 bg-gradient-to-r from-fromclr to-toclr hover:bg-gradient-to-r hover:from-toclr hover:to-fromclr rounded-full"
                  onClick={() => openModal(i)}
                >
                  Apply
                </button>
                <div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 xl:mb-0 lg:mb-0 md:mb-0 sm:mb-2 xs:mb-2 xss:mb-2">
                    <div
                      className="bg-gradient-to-r from-fromclr to-toclr h-2.5 rounded-full"
                      style={{
                        width: `${(i?.noOfRequest / i?.capacity) * 100}%`,
                      }}
                    ></div>
                  </div>
                  <div className="flex">
                    <span className="font-lato text-[14px]  text-justify text-webHeading">
                      {i?.noOfRequest} applied of {i?.capacity} capacity
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className="flex flex-col justify-between shadow-md lg:p-4 xl:p-4 2xl:p-4 md:p-2 sm:p-4 xs:p-4 xss:p-4 xl:px-8 lg:px-8 md:px-8 w-full bg-white">
          No Job Found
        </div>
      )}

      {/* Pagination */}
      {newData.length > 0 && (
        <div className="flex flex-row justify-center my-4">
          {Array.from(
            { length: Math.ceil(newData.length / itemsPerPage) },
            (_, index) => (
              <button
                key={index + 1}
                className={`p-2 px-4 m-1 border rounded-full ${
                  currentPage === index + 1
                    ? "bg-gradient-to-r from-fromclr to-toclr text-white"
                    : "bg-gray-200"
                }`}
                onClick={() => paginate(index + 1)}
              >
                {index + 1}
              </button>
            )
          )}
        </div>
      )}

      {/* Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-auto bg-black bg-opacity-50">
          <div className="relative bg-white rounded-lg shadow-xl p-4  xl:w-1/3 lg:w-1/3 md:w-1/3 sm:w-[95%] xs:w-[95%] xss:w-[95%] h-[80%] overflow-y-auto">
            <h2 className="text-2xl text-webHeading font-bold mb-4">
              Apply for {selectedPosition?.designation}
            </h2>
            <form
              className="space-y-2"
              method="POST"
              enctype="multipart/form-data"
            >
              <div>
                <label className="block text-sm font-medium text-webDescrip">
                  Full Name
                </label>
                <input
                  type="text"
                  name="fullName"
                  placeholder="Enter Your Full Name"
                  className="mt-1 block w-full text-sm border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2"
                  value={formData?.fullName}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-webDescrip">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter Your Email"
                  className="mt-1 block w-full text-sm border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2"
                  value={formData?.email}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-webDescrip">
                  Phone
                </label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Mobile Number"
                  className="mt-1 block w-full text-sm border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2"
                  value={formData?.phone}
                  onChange={handleInputChange}
                />
              </div>
              <div className="flex lg:flex-row xl:flex-row md:flex-row flex-col justify-around gap-4">
                <div>
                  <label className="block text-sm font-medium text-webDescrip">
                    City
                  </label>
                  <select
                    name="city"
                    className="mt-1 block w-full text-sm border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2"
                    value={formData?.city}
                    onChange={handleInputChange}
                  >
                    <option value="">Select City</option>
                    <option value="Karachi">Karachi</option>
                    <option value="Lahore">Lahore</option>
                    <option value="Islamabad">Islamabad</option>
                    <option value="Faisalabad">Faisalabad</option>
                    <option value="Rawalpindi">Rawalpindi</option>
                    <option value="Multan">Multan</option>
                    <option value="Gujranwala">Gujranwala</option>
                    <option value="Peshawar">Peshawar</option>
                    <option value="Quetta">Quetta</option>
                    <option value="Sialkot">Sialkot</option>
                    <option value="Hyderabad">Hyderabad</option>
                    <option value="Bahawalpur">Bahawalpur</option>
                    <option value="Sargodha">Sargodha</option>
                    <option value="Abbottabad">Abbottabad</option>
                    <option value="Sukkur">Sukkur</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-webDescrip">
                    Date of Birth
                  </label>
                  <input
                    type="date"
                    name="dob"
                    className="mt-1 block w-full text-sm border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2"
                    value={formData?.dob}
                    onChange={handleInputChange}
                  />
                </div>
                {/* Gender */}
                <div>
                  <label className="block text-sm font-medium text-webDescrip">
                    Gender
                  </label>
                  <select
                    name="gender"
                    className="mt-1 block w-full text-sm border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2"
                    value={formData?.gender}
                    onChange={handleInputChange}
                  >
                    <option value="">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>

              {/* Experience */}
              <div>
                <label className="block text-sm font-medium text-webDescrip">
                  Experience
                </label>
                <input
                  type="text"
                  name="experience"
                  placeholder="Tell Us About Your Experience"
                  className="mt-1 block w-full text-sm border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2"
                  value={formData?.experience}
                  onChange={handleInputChange}
                />
              </div>

              {/* GitHub */}

              <div>
                <label className="block text-sm font-medium text-webDescrip">
                  GitHub
                </label>
                <input
                  type="text"
                  name="github"
                  placeholder="Enter Your Github Link"
                  className="mt-1 block w-full text-sm border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2"
                  value={formData?.github}
                  onChange={handleInputChange}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-webDescrip">
                  Resume
                </label>
                <input
                  type="file"
                  placeholder="Upload Your CV"
                  className="mt-1 block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer focus:outline-none"
                  onChange={handleResumeChange}
                />
              </div>

              {/* Address */}

              <div className="flex justify-around">
                <button
                  type="button"
                  className="text-white bg-red-600 hover:bg-red-700 font-medium rounded-lg text-sm px-4 py-2 text-center"
                  onClick={closeModal}
                >
                  Close
                </button>
                <button
                  type="button"
                  className="text-white bg-blue-600 hover:bg-blue-700 font-medium rounded-lg text-sm px-4 py-2 text-center"
                  onClick={handleSubmit}
                  disabled={loading}
                >
                  Apply
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
        </div>
      )}
    </div>
  );
};
