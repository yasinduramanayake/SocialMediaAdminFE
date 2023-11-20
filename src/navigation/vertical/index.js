export default [
  {
    title: "Dashboard",
    route: "home",
    icon: "HomeIcon",
  },
  {
    title: "Category",
    icon: "CheckCircleIcon",
    children: [
      {
        title: "All categories",
        route: "categories",
      },
    ],
  },
  {
    title: "Servies",
    icon: "CheckCircleIcon",
    children: [
      {
        title: "All Services",
        route: "services",
      },
    ],
  },
  {
    title: "Reviews",
    route: "",
    icon: "ThumbsUpIcon",
  },
  {
    title: "Orders",
    route: "orders",
    icon: "ShoppingCartIcon",
  },
  {
    title: "Transactions",
    route: "",
    icon: "DollarSignIcon",
    
  },
];
