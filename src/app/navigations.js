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
        icon: "free_breakfast",
        children: [ 
          {
            name: "Simondou",
            path: "/products/simondou",
            level: 2,
          },
        ],
        level: 1,
      },
      {
        name: "Indian Snacks",
        icon: "fastfood",
        children: [ 
          {
            name: "Vishnu",
            path: "/products/vishnu",
            level: 2,
          },
          {
            name: "Garden",
            path: "/products/garden",
            level: 2,
          },
        ],
        level: 1,
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
