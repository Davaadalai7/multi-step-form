import React from "react";
import InputComponent1 from "./InputComponent1";
import Logo from "@/assets/svg/pinecone-logo";
import ContinueButton from "./ContinueButton";

const MainContainer = ({ onContinue }) => {
    return (
        <div className="relative w-[480px] h-[655px] rounded-[8px] flex flex-col bg-white p-[32px]">
            <div className="mb-2">
                <Logo />
            </div>
            <h1 className="text-2xl text-black font-semibold">Join Us! 😎</h1>
            <h3 className="font-normal text-lg mb-5 text-gray-400">
                Please provide all current information accurately.
            </h3>
            <InputComponent1 />
            <ContinueButton onClick={onContinue} label="Continue 1/3 >" className="w-full"/>
        </div>
    );
};

export default MainContainer;
