import { socialLinks } from "@social/data";

export const storeDataConfig = {
	// Enable App Store fetch for production app metadata.
	fetchRealData: true,
	// Numeric Apple App ID without the "id" prefix from App Store URL.
	appStoreAppId: 6759613745,
} as const;

export const appData = {
	// Brand basics.
	name: "Melon Mods For Ragdoll Sandbox",
	description:
		"Step into a world of creative chaos with Melon Mods for Ragdoll Sandbox",
	logo: "/assets/favicon.png",
	// SEO base keywords for meta tags.
	keywords: ["mobile app", "landing page", "astro", "react", "typescript"],
	// Store links displayed in hero and navigation.
	storeLinks: {
		apple: "#",
	},
	// Public rating summary.
	rating: {
		score: 4.8,
		count: "1.2K",
	},
	// Release metadata.
	ageRating: "4+",
	version: "1.0.0",
	minimumOS: "15.6",
	releaseDate: "April 21, 2026",
	// Footer and social section links.
	socialLinks,
} as const;
