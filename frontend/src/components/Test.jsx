import { ThreeDots } from "react-loader-spinner";

function Test() {
return (
    <div className="w-full h-screen bg-white flex justify-center items-center">
        <ThreeDots
            visible={true}
            height="80"
            width="80"
            color="#3730a3"
            radius="9"
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            wrapperClass=""
        />
    </div>
);
}

export default Test;
