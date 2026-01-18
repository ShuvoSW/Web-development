import { ReactNode } from "react";

const dashboardLayout = ({children,  analytic,
  team}: {children: ReactNode, analytic: ReactNode, team: ReactNode}) => {
    return (
        <div >
           
            {children}
            <div className="flex w-full justify-around p-20">
            {analytic}
            {team}
          </div>
        </div>
    );
};

export default dashboardLayout;