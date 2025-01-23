import React from "react";

const ContinueButton = ({ onClick, label, className }) => {
    return (
        <button
            onClick={onClick}
            className={
                "mt-auto font-semibold py-2.5 px-5 text-base bg-black text-white border border-black rounded-md cursor-pointer hover:opacity-80 transition-all duration-300 " +
                className
            }
        >
            {label}
        </button>
    );
};

export default ContinueButton;
