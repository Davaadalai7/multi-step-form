import React from "react";
import InputComponent2 from "./InputComponent2";
import Logo from "@/assets/svg/pinecone-logo";
import ContinueButton from "./ContinueButton";
import BackButton from "./BackButton";

const SecondContainer = ({ onContinue, onBack }) => {
    return (
        <div className="w-[480px] h-[655px] rounded-[8px] flex flex-col justify-between bg-white p-[32px]">
            <div className="mb-2">
                <Logo />
            </div>
            <h1 className="text-2xl text-black font-semibold">Join Us! 😎</h1>
            <h3 className="font-normal text-lg mb-5 text-gray-400">
                Please provide all current information accurately.
            </h3>
            <InputComponent2 />{" "}
            <div className="flex justify-center gap-1 w-full">
                <BackButton onClick={onBack} label="< Back" className="w-1/4" />
                <ContinueButton onClick={onContinue} label="Continue 2/3 >" className="w-3/4" />
            </div>
        </div>
    );
};

export default SecondContainer;
