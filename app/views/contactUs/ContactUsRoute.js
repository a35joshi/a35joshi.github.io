import { MatxLoadable } from "matx";
import { authRoles } from "../../auth/authRoles";

const contactUsRoute = [
  {
    path: "/contact-us",
    component: MatxLoadable({
      loader: () => import("./ContactUs")
    }),
    auth: authRoles.admin
  },
];

export default contactUsRoute;
