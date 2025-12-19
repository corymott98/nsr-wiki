// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'North Star Racing',
			logo: {
				light: './src/assets/nsr/NSR-Icon-nobg.png',
				dark: './src/assets/nsr/NSR-Icon-nobg.png',
				replacesTitle: false,
			},
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
			components: {
				Sidebar: './src/components/starlight/Sidebar.astro',
				SiteTitle: './src/components/starlight/SiteTitle.astro',
			},
			customCss: ['./src/styles/theme.css'],
			sidebar: [
				{
					label: 'Cup Series',
					collapsed: false,
					items: [
						{ label: 'Schedule', slug: 'cup-series/schedule' },
						{ label: 'Standings', slug: 'cup-series/standings' },
						{ label: 'Roster', slug: 'cup-series/roster' },
						{ label: 'Race Clean', slug: 'cup-series/race-clean' },
					],
				},
				{
					label: 'Truck Series',
					collapsed: false,
					items: [
						{ label: 'Schedule', slug: 'truck-series/schedule' },
						{ label: 'Standings', slug: 'truck-series/standings' },
						{ label: 'Roster', slug: 'truck-series/roster' },
						{ label: 'Race Clean', slug: 'truck-series/race-clean' },
					],
				},
				{
					label: 'Member Documentation',
					collapsed: false,
					items: [
						{
							label: '01. League Information',
							collapsed: false,
							items: [
								{ label: 'Foreword', slug: 'member/01-league-information/foreword' },
								{ label: 'Preface', slug: 'member/01-league-information/preface' },
								{ label: 'Series Overview', slug: 'member/01-league-information/series-overview' },
							],
						},
						{
							label: '02. Sporting Regulations',
							collapsed: false,
							items: [
								{ label: 'Membership', slug: 'member/02-sporting-regulations/membership' },
								{ label: 'Member Conduct', slug: 'member/02-sporting-regulations/member-conduct' },
								{ label: 'Competition', slug: 'member/02-sporting-regulations/competition' },
								{ label: 'Racing Rules', slug: 'member/02-sporting-regulations/racing-rules' },
								{ label: 'Race Directors', slug: 'member/02-sporting-regulations/race-directors' },
								{ label: 'Penalties & Appeals', slug: 'member/02-sporting-regulations/penalties-and-appeals' },
								{ label: 'Race Clean System', slug: 'member/02-sporting-regulations/race-clean-system' },
							],
						},
						{
							label: '03. Drivers & Teams',
							collapsed: false,
							items: [
								{ label: 'Getting Started', slug: 'member/03-drivers-and-teams/getting-started' },
								{ label: 'Team Structure', slug: 'member/03-drivers-and-teams/team-structure' },
								{ label: 'Rosters', slug: 'member/03-drivers-and-teams/rosters' },
							],
						},
						{
							label: '04. Branding & Media',
							collapsed: false,
							items: [
								{ label: 'Branding Guide', slug: 'member/04-branding-and-media/branding-guide' },
								{ label: 'Broadcast Guide', slug: 'member/04-branding-and-media/broadcast-guide' },
							],
						},
					],
				},
				{
					label: 'Admin Documentation',
					collapsed: false,
					items: [
						{
							label: '01. General',
							collapsed: false,
							items: [
								{ label: 'Admin Roles', slug: 'admin-documentation/01-general/admin-roles' },
								{ label: 'Admin Expectations', slug: 'admin-documentation/01-general/admin-expectations' },
								{ label: 'Format Guidelines', slug: 'admin-documentation/01-general/format-guidelines' },
							],
						},
						{
							label: '02. Processes & Procedures',
							collapsed: false,
							items: [
								{ label: 'Race Day Procedures', slug: 'admin-documentation/02-processes-and-procedures/race-day-procedures' },
								{ label: 'Race Clean Procedures', slug: 'admin-documentation/02-processes-and-procedures/race-clean-procedures' },
								{ label: 'Announcement Templates', slug: 'admin-documentation/02-processes-and-procedures/announcement-templates' },
								{ label: 'How to Update Standings', slug: 'admin-documentation/02-processes-and-procedures/how-to-update-standings' },
							],
						},
						{
							label: '03. Series Documentation',
							collapsed: false,
							items: [
								{ label: 'Cup Procedures', slug: 'admin-documentation/03-series-documentation/cup-procedures' },
								{ label: 'Truck Procedures', slug: 'admin-documentation/03-series-documentation/truck-procedures' },
							],
						},
					],
				},
			],
		}),
	],
});
