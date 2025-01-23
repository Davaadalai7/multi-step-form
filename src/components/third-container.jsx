import React, { useState } from "react";
import Logo from "@/assets/svg/pinecone-logo";
import ContinueButton from "./ContinueButton";
import BackButton from "./BackButton";

const ThirdContainer = ({ onContinue, onBack }) => {
    const [dob, setDob] = useState("");
    const [profileImage, setProfileImage] = useState(null);
    const [imagePreview, setImagePreview] = useState(null);
    const [errors, setErrors] = useState({
        dob: "",
        profileImage: "",
    });

    const today = new Date().toISOString().split("T")[0];

    const calculateAge = (birthday) => {
        const birthDate = new Date(birthday);
        const todayDate = new Date();
        let age = todayDate.getFullYear() - birthDate.getFullYear();
        const monthDifference = todayDate.getMonth() - birthDate.getMonth();
        if (
            monthDifference < 0 ||
            (monthDifference === 0 && todayDate.getDate() < birthDate.getDate())
        ) {
            age--;
        }
        return age;
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            if (!file.type.startsWith("image/")) {
                setErrors((prevErrors) => ({
                    ...prevErrors,
                    profileImage: "Please select a valid image file.",
                }));
                setProfileImage(null);
                setImagePreview(null);
            } else {
                setErrors((prevErrors) => ({
                    ...prevErrors,
                    profileImage: "",
                }));
                setProfileImage(file);
                setImagePreview(URL.createObjectURL(file));
            }
        }
    };

    const handleContinueClick = () => {
        let validationErrors = {
            dob: "",
            profileImage: "",
        };

        if (!dob) {
            validationErrors.dob = "Төрсөн өдрөө оруулна уу.";
        } else {
            const age = calculateAge(dob);
            if (age < 18) {
                validationErrors.dob =
                    "Та 18 ба түүнээс дээш настай байх ёстой.";
            }
        }

        if (!profileImage) {
            validationErrors.profileImage = "Профайл зурагаа оруулна уу.";
        }

        if (validationErrors.dob || validationErrors.profileImage) {
            setErrors(validationErrors);
            return;
        }

        setErrors({ dob: "", profileImage: "" });
        onContinue();
    };

    const handleDeleteImage = () => {
        setProfileImage(null);
        setImagePreview(null);
    };

    return (
        <div className="w-[480px] h-[655px] rounded-[8px] flex flex-col bg-white p-[32px]">
            <div className="mb-2">
                <Logo />
            </div>
            <h1 className="text-2xl text-black font-semibold">Join Us! 😎</h1>
            <h3 className="font-normal text-lg mb-5 text-gray-400">
                Please provide all current information accurately.
            </h3>

            <div className="mb-4">
                <label
                    htmlFor="input1"
                    className="mb-1 font-medium font-semibold text-gray-700"
                >
                    Date of birth<span className="text-red-500">*</span>
                </label>
                <input
                    type="date"
                    id="birthday"
                    name="birthday"
                    className="w-full p-2 mt-1 border text-black rounded-md"
                    max={today}
                    value={dob}
                    onChange={(e) => setDob(e.target.value)}
                    required
                />
                {errors.dob && (
                    <p className="text-red-500 text-sm">{errors.dob}</p>
                )}
            </div>

            <div className="mb-auto">
                <label
                    htmlFor="input1"
                    className="mb-1 font-medium font-semibold text-gray-700"
                >
                    Profile Image<span className="text-red-500">*</span>
                </label>
                <div
                    className="relative w-full h-[250px] p-4 border-2 border-dashed rounded-md text-center cursor-pointer bg-gray-200"
                    style={{
                        borderColor: profileImage ? "#4CAF50" : "#ccc",
                    }}
                >
                    <input
                        type="file"
                        id="profile-image"
                        name="profile-image"
                        accept="image/*"
                        className="hidden"
                        onChange={handleFileChange}
                    />
                    <span
                        className="text-gray-500"
                        onClick={() =>
                            document.getElementById("profile-image").click()
                        }
                    >
                        {profileImage
                            ? "Image selected"
                            : "Browse or Drop Image"}
                    </span>

                    {imagePreview && (
                        <div className="mt-4 flex justify-center relative">
                            <div className="justify-center flex items-center  ">
                                <img
                                    src={imagePreview}
                                    alt="Profile Preview"
                                    className="w-32 h-32 rounded-full object-cover"
                                />

                                <button
                                    onClick={handleDeleteImage}
                                    className="absolute w-8 h-8 flex items-center justify-center bg-white rounded-lg border border-gray-600 text-gray-600 opacity-0 hover:opacity-100 transition-opacity duration-200"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        className="w-5 h-5"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    )}
                    {errors.profileImage && (
                        <p className="text-red-500 text-sm">
                            {errors.profileImage}
                        </p>
                    )}
                </div>
            </div>

            <div className="flex justify-center gap-1 w-full mt-auto">
                <BackButton onClick={onBack} label="< Back" className="w-1/4" />
                <ContinueButton
                    onClick={handleContinueClick}
                    label="Continue 3/3 >"
                    className="w-3/4"
                />
            </div>
        </div>
    );
};

export default ThirdContainer;
