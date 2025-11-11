// as const assertion

// enum UserRoles {
//     Admin = "Admin",
//     Editor = "Editor",
//     Viewer = "Viewer"
// }
const UserRoles = {
    Admin: "Admin",
    Editor: "Editor",
    Viewer: "Viewer"
} as const;

// UserRoles.Admin = "Mon chasse"

const canEdit = (role: keyof typeof UserRoles) => {
    if (role === UserRoles.Admin || role === UserRoles.Editor) {
        return true;
    } else return false;

}

const isEditPermissable = canEdit(UserRoles.Admin);
console.log(isEditPermissable);