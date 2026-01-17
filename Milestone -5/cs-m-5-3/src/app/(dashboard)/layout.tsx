import { ReactNode } from "react";

const dashboardLayout = ({children}: {children: ReactNode}) => {
    return (
        <div >
            <h1 className="flex justify-around w-full bg-amber-400">This is next level page...</h1>
            {children}
        </div>
    );
};

export default dashboardLayout;