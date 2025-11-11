// as const assertion
// enum UserRoles {
//     Admin = "Admin",
//     Editor = "Editor",
//     Viewer = "Viewer"
// }
var UserRoles = {
   Admin: "Admin",
    Editor: "Editor",
    Viewer: "Viewer"
};
// UserRoles.Admin = "Mon chasse"
var canEdit = function (role) {
    if (role === UserRoles.Admin || role === UserRoles.Editor) {
        return true;
    }
    else
        return false;
};
var isEditPermissable = canEdit(UserRoles.Admin);
console.log(isEditPermissable);
