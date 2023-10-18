interface NavigationBarMenuItem {
  title: string;
  path: string;
}

interface NavigationBarMenu {
  paths: NavigationBarMenuItem[];
}

const navigationBarMenuItems: NavigationBarMenu = {
  paths: [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "Products",
      path: "/products",
    },
    {
      title: "Team",
      path: "/who-we-are",
    },
    {
      title: "404",
      path: "/404",
    },
    {
      title: "Something Terrible",
      path: "/a-terrible-place-to-be",
    },
  ],
};

export default navigationBarMenuItems;
