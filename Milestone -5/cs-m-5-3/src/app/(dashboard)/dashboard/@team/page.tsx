import { getServices } from "@/lib/data";
import loading from "./loading";

const analytic = async () => {

    // const loadingcmp = true;
    // if(loadingcmp) {
    //     return loading;
    // }

    await getServices()

    return (
        <div className='border-blue-500 border-2 p-10'>
            This is paraller route. Team
        </div>
    );
};

export default analytic;