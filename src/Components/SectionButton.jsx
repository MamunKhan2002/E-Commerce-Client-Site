
const SectionButton = ({ title, image }) => {
    return (
        <div className="flex justify-between items-center">
            <div className="flex gap-3 items-center">
                <img className="w-16 " src={image} alt="" />
                <h1 className="text-3xl font-semibold">{title}</h1>
            </div>
            <button className="border-2 border-blue-500 px-3 py-2 font-bold text-blue-500">View All</button>
        </div>
    );
};

export default SectionButton;