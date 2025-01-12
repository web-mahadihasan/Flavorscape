
const PrimaryButton = ({children, color}) => {
    return (
        <div>
        <button
            className={`px-8 py-3 uppercase border-b-2 rounded-lg font-medium duration-300 text-${color} ${color === "#fff" ? "bg-transparent hover:bg-[#fff] border-[#fff] hover:text-black hover:border-[#fff]" : "bg-[#e8e8e8] hover:bg-[#1f2937] hover:text-yellow border-yellow hover:border-[#1f2937]"}`}
        >
            {children}
        </button>
        </div>

    );
};

export default PrimaryButton;