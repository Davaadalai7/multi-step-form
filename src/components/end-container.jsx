import Logo from "@/assets/svg/pinecone-logo";

const EndContainer = ({ onContinue }) => {
    return (
        <div className="relative w-auto mb-96 h-auto rounded-[8px] flex flex-col bg-white p-[32px]">
            <div className="mb-2">
                <Logo />
            </div>
            <h1 className="text-2xl text-black font-semibold">You're All Set 🔥</h1>
            <h3 className="font-normal text-lg mb-5 text-gray-400">
            We have received your submission. Thank you!
            </h3>
        </div>
    );
};

export default EndContainer;
