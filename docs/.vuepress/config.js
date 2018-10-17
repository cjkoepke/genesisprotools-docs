module.exports = {
	title: "Genesis Pro Tools",
	description: "Documentation for all Genesis Pro Tools packages and CLI for Genesis developers.",
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
			{ text: 'Get Started', link: '/guides/getting-started/' },
			{ text: 'GPT-CLI', link: '/cli/'}
		],
		sidebar: 'auto'
	}
}