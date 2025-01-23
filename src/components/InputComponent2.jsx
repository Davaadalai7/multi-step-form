"use client";

import React, { useState } from "react";

const InputComponent2 = () => {
    const [input1, setInput1] = useState("");
    const [input2, setInput2] = useState("");
    const [input3, setInput3] = useState("");
    const [input4, setInput4] = useState("");

    return (
        <div className="rounded-[8px] flex flex-col justify-between">
            <div className="space-y-6">
                <div className="flex flex-col">
                    <label
                        htmlFor="input1"
                        className="mb-1 font-medium font-semibold text-gray-700"
                    >
                        Email<span className="text-red-500">*</span>
                    </label>
                    <input
                        id="input1"
                        type="Email"
                        value={input1}
                        onChange={(e) => setInput1(e.target.value)}
                        placeholder="Enter a email"
                        className="p-2 border border-gray-300 text-black rounded-md"
                    />
                    
                </div>

                <div className="flex flex-col">
                    <label
                        htmlFor="input2"
                        className="mb-1 font-medium font-semibold text-gray-700"
                    >
                        Phone number<span className="text-red-500">*</span>
                    </label>
                    <input
                        id="input2"
                        type="number"
                        value={input2}
                        onChange={(e) => setInput2(e.target.value)}
                        placeholder="Enter a phone number"
                        className="p-2 border border-gray-300 text-black rounded-md"
                    />
                </div>

                <div className="flex flex-col">
                    <label
                        htmlFor="input3"
                        className="mb-1 font-medium font-semibold text-gray-700"
                    >
                        Password <span className="text-red-500">*</span>
                    </label>
                    <input
                        id="input3"
                        type="password"
                        value={input3}
                        onChange={(e) => setInput3(e.target.value)}
                        placeholder="Enter a password"
                        className="p-2 border border-gray-300 text-black rounded-md"
                    />  
                </div>
                <div className="flex flex-col">
                    <label
                        htmlFor="input4"
                        className="mb-1 font-medium font-semibold text-gray-700"
                    >
                        Confirm password <span className="text-red-500">*</span>
                    </label>
                    <input
                        id="input4"
                        type="password"
                        value={input4}
                        onChange={(e) => setInput4(e.target.value)}
                        placeholder="Enter password again"
                        className="p-2 border border-gray-300 text-black rounded-md"
                    />
                </div>
            </div>
        </div>
    );
};

export default InputComponent2;
