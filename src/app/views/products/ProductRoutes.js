import { MatxLoadable } from "matx";
import { authRoles } from "../../auth/authRoles";

const productRoutes = [
  {
    path: "/products/simondou",
    component: MatxLoadable({
      loader: () => import("./Tea/Simondou")
    }),
    auth: authRoles.admin
  },
  {
    path: "/products/vishnu",
    component: MatxLoadable({
      loader: () => import("./IndianSnacks/Vishnu")
    }),
    auth: authRoles.admin
  },
  {
    path: "/products/garden",
    component: MatxLoadable({
      loader: () => import("./IndianSnacks/Garden")
    }),
    auth: authRoles.admin
  },
];

export default productRoutes;
