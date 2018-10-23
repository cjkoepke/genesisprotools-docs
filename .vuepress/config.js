module.exports = {
	title: "Genesis Pro Tools",
	description: "Documentation for all Genesis Pro Tools packages and the CLI for Genesis developers.",
	ga: "UA-127640643-1",
	head: [
		['link', { rel: 'icon', href: '/favicon.png' }],
		['link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Rubik' }]
	],
	themeConfig: {
		repo: 'cjkoepke/genesisprotools-docs',
		repoLabel: 'GitHub',
		docsRepo: 'cjkoepke/genesisprotools-docs',
		docsDir: 'docs',
		docsBranch: 'master',
		editLinks: true,
		editLinkText: 'Help improve this page?',
		lastUpdated: 'Last Updated',
		nav: [
			{ text: 'Home', link: '/' },
			{ text: 'Guides', items: [
				{ text: 'Starting a New Theme', link: '/guides/starting-a-new-theme/' }
			]},
			{ text: 'Packages', items: [
				{ text: 'Theme', items: [
					{ text: 'Core', link: '/docs/theme/core/' },
					{ text: 'Uno', link: '/docs/theme/uno/'}
				]}
			]},
			{ text: 'GPT-CLI', link: '/cli/'}
		],
		sidebar: 'auto'
	}
}