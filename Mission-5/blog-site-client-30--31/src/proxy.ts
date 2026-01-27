import { NextRequest, NextResponse } from "next/server";
import { userService } from "./services/user.service";
import { Roles } from "./constants/roles";

export async function proxy(request: NextRequest) {
    // console.log("Hello from proxy:", request.url);
    const pathname = request.nextUrl.pathname;

    let isAuthenticated = false;
    let isAdmin = false;

    const { data } = await userService.getSession();
    // console.log(data);

    if (data) {
        isAuthenticated = true;
        isAdmin = data.user.role === Roles.admin;
    }
    // console.log(isAdmin);

    //* User is not authenticated at all
    if (!isAuthenticated) {
        return NextResponse.redirect(new URL("/login", request.url))
    }

    //* User is authenticated and role = ADMIN
    //* User con not visit user dashboard
    // console.log(pathname);
    if (isAdmin && pathname.startsWith("/dashboard")) {
        return NextResponse.redirect(new URL("/admin-dashboard", request.url))
    }

    //* User is authenticated but role = USER
    //* User con not visit admin-dashboard
    if (!isAdmin && pathname.startsWith("/admin-dashboard")) {
        return NextResponse.redirect(new URL("/dashboard", request.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/dashboard",
        "/dashboard/:path*",
        "/admin-dashboard",
        "/admin-dashboard/:path*"
    ]
}