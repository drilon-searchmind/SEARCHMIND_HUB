import { Menu } from "@/types/menu";

const menuData: Menu[] = [
	{
		id: 1,
		title: "Home",
		newTab: false,
		path: "/",
	},
	{
		id: 2,
		title: "Performance Dashboard",
		newTab: false,
		path: "#",
	},
	{
		id: 2.1,
		title: "Tracking Tracker",
		newTab: false,
		path: "#",
	},
	{
		id: 2.2,
		title: "Clients",
		newTab: false,
		path: "#",
	},
	/*
	{
	  id: 3,
	  title: "WIP",
	  newTab: false,
	  submenu: [
		{
		  id: 31,
		  title: "Blog ",
		  newTab: false,
		  path: "/blog",
		},
		{
		  id: 34,
		  title: "Sign In",
		  newTab: false,
		  path: "/auth/signin",
		},
		{
		  id: 35,
		  title: "Sign Up",
		  newTab: false,
		  path: "/auth/signup",
		},
		{
		  id: 35,
		  title: "Docs",
		  newTab: false,
		  path: "/docs",
		},
		{
		  id: 35.1,
		  title: "Support",
		  newTab: false,
		  path: "/support",
		},
		{
		  id: 36,
		  title: "404",
		  newTab: false,
		  path: "/error",
		},
	  ],
	},
	*/
];

export default menuData;
