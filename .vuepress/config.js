const {
    description
} = require('../package')

module.exports = {
    title: 'OpenCore Install Guide',
    head: [
        ['meta', {
            name: 'theme-color',
            content: '#3eaf7c'
        }],
        ['meta', {
            name: 'apple-mobile-web-app-capable',
            content: 'yes'
        }],
        ['meta', {
            name: 'apple-mobile-web-app-status-bar-style',
            content: 'black'
        }],
        ["link", {
            rel: "'stylesheet",
            href: "/styles/website.css"
        },]
    ],
    base: '/OpenCore-Install-Guide/',
	
	watch: {
	    $page(newPage, oldPage) {
	      if (newPage.key !== oldPage.key) {
	        requestAnimationFrame(() => {
	          if (this.$route.hash) {
	            const element = document.getElementById(this.$route.hash.slice(1));

	            if (element && element.scrollIntoView) {
	              element.scrollIntoView();
	            }
	          }
	        });
	      }
	    }
	  },
	
	markdown: {
		extendMarkdown: md => {
			md.use(require('markdown-it-multimd-table'), {
				rowspan: true,
			});
		}
	},
	
    theme: 'vuepress-theme-succinct',
    globalUIComponents: [
        'ThemeManager'
    ],

    themeConfig: {
        lastUpdated: true,
        repo: 'https://github.com/dortania/OpenCore-Install-Guide',
		editLinks: true,
		editLinkText: 'Help us improve this page!',
        logo: '/homepage.png',
        nav: [{
            text: 'Dortania Guides',
            ariaLabel: 'Language Menu',
            items: [{
                text: 'Home Site',
                link: 'https://dortania.github.io/'
            },
            {
                text: 'Getting Started With ACPI',
                link: 'https://dortania.github.io/Getting-Started-With-ACPI/'
            },
            {
                text: 'OpenCore Post-Install',
                link: 'https://dortania.github.io/OpenCore-Post-Install/'
            },
            {
                text: 'OpenCore Multiboot',
                link: 'https://dortania.github.io/OpenCore-Multiboot/'
            },
            {
                text: 'GPU Buyers Guide',
                link: 'https://dortania.github.io/GPU-Buyers-Guide/'
            },
            {
                text: 'Wireless Buyers Guide',
                link: 'https://dortania.github.io/Wireless-Buyers-Guide/'
            },
            {
                text: 'Anti Buyers Guide',
                link: 'https://dortania.github.io/Anti-Hackintosh-Buyers-Guide/'
            },
            ]
        },
        ],
        sidebar: [{
            title: 'Introduction',
            collapsable: false,
            sidebarDepth: 1,
            children: [
				'prerequisites',
				'macos-limits',
				'find-hardware',
                'terminology',
                'why-oc',
            ]
        },
        {
            title: 'USB Creation',
            collapsable: false,
            sidebarDepth: 2,
            children: [{
                title: 'Creating the USB',
                collapsable: true,
                path: '/installer-guide/',
                sidebarDepth: 1,
                children: [
                    '/installer-guide/mac-install',
                    '/installer-guide/winblows-install',
                    '/installer-guide/linux-install',
                ],
            },
                '/installer-guide/opencore-efi',
                'ktext',
            ['https://dortania.github.io/Getting-Started-With-ACPI/', 'Getting started with ACPI'],
                '/config.plist/',
            ]
        },
        {
            title: 'Building your config.plist',
            collapsable: false,
            sidebarDepth: 2,
            children: [
                    '/config.plist/bios-settings',
                    '/config.plist/acpi',
                    '/config.plist/booter',
                    '/config.plist/device-properties',
                    '/config.plist/kernel',
                    '/config.plist/misc',
                    '/config.plist/nvram',
                    '/config.plist/platform-info',
                    '/config.plist/uefi',
                    '/config.plist/security'
                ],
        },
        {
            title: 'Installation',
            collapsable: false,
            children: [
                '/installation/installation-process',
            ]
        },
        {
            title: 'Troubleshooting',
            collapsable: false,
            children: [
                '/troubleshooting/troubleshooting',
				{
            		title: '',
            		collapsable: false,
		            children: [
		                '/troubleshooting/extended/opencore-issues',
						'/troubleshooting/extended/kernel-issues',
						'/troubleshooting/extended/userspace-issues',
						'/troubleshooting/extended/post-issues',
						'/troubleshooting/extended/misc-issues',

		            ]
				},
                '/troubleshooting/debug',
                '/troubleshooting/boot',
				'/troubleshooting/kernel-debugging',
            ]
        },
        {
            title: 'Post Install',
            collapsable: false,
            children: [
                ['https://dortania.github.io/OpenCore-Post-Install/', 'Post-Install'],
                {
                    title: 'Universal',
                    collapsable: true,
                    sidebarDepth: 1,
                    children: [
                        ['https://dortania.github.io/OpenCore-Post-Install/universal/security', 'Security and FileVault'],
                        ['https://dortania.github.io/OpenCore-Post-Install/universal/audio', 'Fixing Audio'],
                        ['https://dortania.github.io/OpenCore-Post-Install/universal/oc2hdd', 'Booting without USB'],
                        ['https://dortania.github.io/OpenCore-Post-Install/universal/update', 'Updating OpenCore, kexts and macOS'],
                        ['https://dortania.github.io/OpenCore-Post-Install/universal/drm', 'Fixing DRM'],
                        ['https://dortania.github.io/OpenCore-Post-Install/universal/iservices', 'Fixing iServices'],
                        ['https://dortania.github.io/OpenCore-Post-Install/universal/pm', 'Fixing Power Management'],
                        ['https://dortania.github.io/OpenCore-Post-Install/universal/sleep', 'Fixing Sleep'],
                        ['https://dortania.github.io/OpenCore-Post-Install/usb/', 'Fixing USB'],
                    ]
                },
                {
                    title: 'Laptop Specifics',
                    collapsable: true,
                    children: [
                        ['https://dortania.github.io/OpenCore-Post-Install/laptop-specific/battery', 'Fixing Battery Read-outs'],

                    ]
                },
                {
                    title: 'Cosmetics',
                    collapsable: true,
                    children: [
                        ['https://dortania.github.io/OpenCore-Post-Install/cosmetic/verbose', 'Fixing Resolution and Verbose'],
                        ['https://dortania.github.io/OpenCore-Post-Install/cosmetic/gui', 'Add GUI and Boot-chime'],
                    ]
                },
                {
                    title: 'Multiboot',
                    collapsable: true,
                    children: [
						['https://dortania.github.io/OpenCore-Multiboot/', 'OpenCore Multiboot'],
                        ['https://dortania.github.io/OpenCore-Post-Install/multiboot/bootstrap', 'Setting up LauncherOption'],
                        ['https://dortania.github.io/OpenCore-Post-Install/multiboot/bootcamp', 'Installing BootCamp'],
                    ]
                },
                {
                    title: 'Miscellaneous',
                    collapsable: true,
                    children: [
                        ['https://dortania.github.io/OpenCore-Post-Install/misc/rtc', 'Fixing RTC'],
                        ['https://dortania.github.io/OpenCore-Post-Install/misc/msr-lock', 'Fixing CFG Lock'],
                        ['https://dortania.github.io/OpenCore-Post-Install/misc/nvram', 'Emulated NVRAM'],
                    ]
                },
            ]
        },
        {
            title: 'Extras',
            collapsable: false,
			sidebarDepth: 2,
            children: [
                '/extras/kaslr-fix',
                '/extras/spoof',
                '/extras/monterey',
                ['https://github.com/dortania/OpenCore-Install-Guide/tree/master/clover-conversion', 'Clover Conversion'],
                '/extras/smbios-support.md',
            ]
        },
        {
            title: 'Misc',
            collapsable: false,
            children: [
                'CONTRIBUTING',
                '/misc/credit',
            ]
        },
        ],
    },
    plugins: [
        '@vuepress/plugin-back-to-top',
        'vuepress-plugin-smooth-scroll',
        ['vuepress-plugin-medium-zoom',
            {
                selector: "img",
                options: {
                    background: 'var(--bodyBgColor)'
                }
            }],
    ]
}