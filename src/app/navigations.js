export const navigations = [
  {
    name: "Home",
    path: "/home",
    icon: "home"
  },
  {
    name: "Products",
    icon: "description",
    children: [ 
      {
        name: "Tea",
        path: "/products/tea",
        icon: "free_breakfast"
      },
      {
        name: "Indian Snacks",
        path: "/products/indian-snacks",
        icon: "fastfood"
      }
    ]
  },  
  {
    name: "About Us",
    path: "/about-us",
    icon: "info"
  },
  {
    name: "Contact Us",
    path: "/contact-us",
    icon: "contact_support"
  },
  {
    name: "Gallery",
    path: "/gallery",
    icon: "image"
  },
];
