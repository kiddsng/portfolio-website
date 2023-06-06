import {
	bronze,
	gold,
	silver,
	astar,
	polyfintech,
	sussanl,
	carrent,
	jobit,
	tripguide,
} from "../assets";

export const greetCodeLines = [
	"from utils import greetMessage , specialPrint , closeBrowser",
	"",
	"def greet ( user ) :",
	"if user == 'amazing' :",
	"specialPrint ( greetMessage )",
	"else :",
	"closeBrowser ( )",
	"",
	"greet ( user )",
];

export const navLinks = [
	{
		id: "about",
		title: "About",
	},
	{
		id: "experience",
		title: "Experience",
	},
	{
		id: "projects",
		title: "Projects",
	},
	{
		id: "competitions",
		title: "Competitions",
	},
	{
		id: "achievements",
		title: "Achievements",
	},
	// {
	//     id: "contact",
	//     title: "Contact",
	// },
];

export const socialLinks = [
	{
		id: "github",
		title: "GitHub",
		url: "https://github.com/kiddsng/",
		icon: "fa-brands fa-github",
	},
	{
		id: "linkedin",
		title: "LinkedIn",
		url: "https://www.linkedin.com/in/kiddsng/",
		icon: "fa-brands fa-linkedin",
	},
];

export const resourceLinks = [
	{
		id: "jsmastery",
		title: "JavaScript Mastery",
		url: "https://www.youtube.com/watch?v=0fYi8SGA20k",
	},
];

const achievements = [
	{
		title: "Director's List",
		description: "Excellence in academic performance for overall cohort.",
		associate: "Temasek Polytechnic",
		date: "April 2022",
		level: gold,
		imageUrl: "",
	},
	{
		title: "Diploma in Big Data & Analytics with Merit",
		description:
			"Top students with excellent academic performance in their diploma.",
		associate: "Temasek Polytechnic",
		date: "16 April 2023",
		level: gold,
		imageUrl: "",
	},
	{
		title: "A*STAR Science Awards (Polytechnic) 2021",
		description:
			"Demonstrated great abilities and enthusiasm in mathematics and research.",
		associate: "A*STAR Graduate Academy",
		date: "2021",
		level: gold,
		imageUrl: "",
	},
	{
		title: "Academic Excellence 2018 GCE N(A)-Level",
		description: "Top student in cohort for N(A)-Level.",
		associate: "East Spring Secondary School",
		date: "5 July 2019",
		level: gold,
		imageUrl: "",
	},
	{
		title: "AWS Certified Cloud Practitioner",
		description:
			"Well-versed and knowledgeable in AWS and its Cloud Computing services.",
		associate: "Amazon Web Services",
		date: "11 April 2022",
		level: silver,
		imageUrl: "",
	},
	{
		title: "Mentorship Programme",
		description:
			"Experienced a mentorship opportunity with a distinguished worker from HashiCorp.",
		associate: "Industry Mentors' Network",
		date: "October 2021 - March 2022",
		level: bronze,
		imageUrl: "",
	},
	{
		title: "SASMO Bronze Award",
		associate: "SASMO",
		description: "Attained Bronze level in the SASMO competition.",
		date: "7 May 2018",
		level: bronze,
		imageUrl: "",
	},
];

const competitions = [
	{
		name: "PolyFinTech100 API Hackathon 2022 Category Finals",
		description:
			"A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
		associate: "PolyFinTech100",
		date: "24 September 2022",
		placement: "Category Finalist (Top 16)",
		image: polyfintech,
		imageUrl: "",
	},
	{
		name: "SUSS Analytics and Visualization Challenge 2022",
		description:
			"Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
		associate: "Singapore University of Social Sciences (SUSS)",
		date: "2022",
		placement: "Certificate of Merit (4th place)",
		image: sussanl,
		imageUrl: "",
	},
];

const experiences = [
	{
		title: "Research Intern",
		company_name: "A*STAR",
		icon: astar,
		date: "July 2022 - January 2023",
		points: [
			"Researched advanced AI techniques in the field of continual learning for predictive maintenance.",
			"Performed deep learning experiments on time series datasets with continuous domain adaptation methods.",
			"Developed a dashboard powered by Dash and PyTorch.",
		],
	},
];

const projects = [
	{
		name: "Time Series Dashboard",
		description:
			"A web dashboard for predicting time series data.",
        status: "Upcoming",
		tags: [
			{
				name: "python",
				color: "",
			},
			{
				name: "dash",
				color: "",
			},
			{
				name: "pytorch",
				color: "",
			},
		],
		image: carrent,
		source_code_link: "time-series-dashboard",
	},
	{
		name: "Little Lemon Restaurant (with React)",
        status: "Active",
		description: "A website for the Little Lemon restaurant (a persona) and its customers to reserve a table online.",
		tags: [
			{
				name: "react",
				color: "",
			},
			{
				name: "javascript",
				color: "",
			},
			{
				name: "css",
				color: "",
			},
			{
				name: "formik",
				color: "",
			},
		],
		image: tripguide,
		source_code_link: "little-lemon-restaurant-react",
	},
	{
		name: "Portfolio Website",
        status: "Active",
		description: "Source code repository for my portfolio website.",
		tags: [
			{
				name: "react",
				color: "",
			},
			{
				name: "vite",
				color: "",
			},
			{
				name: "tailwindcss",
				color: "",
			},
			{
				name: "framermotion",
				color: "",
			},
		],
		image: jobit,
		source_code_link: "portfolio-website",
	},
	{
		name: "Litle Lemon Restaurant (with Django)",
        status: "Upcoming",
		description: "Source code repository for my portfolio website.",
		tags: [
			{
				name: "python",
				color: "",
			},
			{
				name: "django",
				color: "",
			},
		],
		image: tripguide,
		source_code_link: "little-lemon-restaurant-django",
	},
];

export { achievements, competitions, experiences, projects };
