import React from "react";

const BackButton = ({ onClick, label }) => {
    return (
        <button
            onClick={onClick}
            className="mt-auto w-1/4 font-semibold py-2.5 px-5 text-base bg-white text-black border border-slate-400 rounded-md cursor-pointer hover:bg-gray-100 hover:text-black focus:ring-2 focus:ring-black transition-all duration-300"
        >
            {label}
        </button>
    );
};

export default BackButton;
