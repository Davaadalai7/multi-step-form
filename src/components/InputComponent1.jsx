"use client";

import React, { useState } from "react";

const InputComponent1 = () => {
    const [input1, setInput1] = useState("");
    const [input2, setInput2] = useState("");
    const [input3, setInput3] = useState("");

    return (
        <div className="rounded-[8px] flex flex-col justify-between">
            <div className="space-y-6">
                <div className="flex flex-col">
                    <label
                        htmlFor="input1"
                        className="mb-1 font-medium font-semibold text-gray-700"
                    >
                        First name <span className="text-red-500">*</span>
                    </label>
                    <input
                        id="input1"
                        type="text"
                        value={input1}
                        onChange={(e) => setInput1(e.target.value)}
                        placeholder="Enter text"
                        className="p-2 border border-gray-300 text-black rounded-md"
                    />
                </div>

                <div className="flex flex-col">
                    <label
                        htmlFor="input2"
                        className="mb-1 font-medium font-semibold text-gray-700"
                    >
                        Last name <span className="text-red-500">*</span>
                    </label>
                    <input
                        id="input2"
                        type="text"
                        value={input2}
                        onChange={(e) => setInput2(e.target.value)}
                        placeholder="Enter text"
                        className="p-2  border border-gray-300 text-black rounded-md"
                    />
                </div>

                <div className="flex flex-col">
                    <label
                        htmlFor="input3"
                        className="mb-1 font-medium font-semibold text-gray-700"
                    >
                        Username <span className="text-red-500">*</span>
                    </label>
                    <input
                        id="input3"
                        type="text"
                        value={input3}
                        onChange={(e) => setInput3(e.target.value)}
                        placeholder="Enter a username"
                        className="p-2 border border-gray-300 text-black rounded-md"
                    />
                </div>
            </div>
        </div>
    );
};

export default InputComponent1;
