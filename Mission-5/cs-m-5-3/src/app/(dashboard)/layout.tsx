import { ReactNode } from "react";

const dashboardLayout = ({children,  analytic,
  team}: {children: ReactNode, analytic: ReactNode, team: ReactNode}) => {
    return (
        <div >
            <h1 className="flex justify-around w-full bg-amber-400">This is next level page...</h1>
            {children}
            <div className="flex w-full justify-around p-20">
            {analytic}
            {team}
          </div>
        </div>
    );
};

export default dashboardLayout;