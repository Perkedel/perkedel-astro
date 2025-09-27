import 'https://cdn.jsdelivr.net/gh/orestbida/cookieconsent@3.1.0/dist/cookieconsent.umd.js'; // put this on the very top top of the whole JS loading!

/*
Cookie Consent orestbida
https://github.com/orestbida/cookieconsent
https://cookieconsent.orestbida.com/essential/getting-started.html#html

import can only work on very2 top! wtf?!?!?!?!?!??!?!

edit for Perkedel NTLF+ASTR
(JOELwindows7)
*/

/**
 * All config. options available here:
 * https://cookieconsent.orestbida.com/reference/configuration-reference.html
 */
CookieConsent.run({
    // your config here (required)

    // root: 'body',
    // autoShow: true,
    // disablePageInteraction: true,
    // hideFromBots: true,
    // mode: 'opt-in',
    // revision: 0,

    cookie: {
        name: 'cc_cookie',
        // domain: location.hostname,
        // path: '/',
        // sameSite: "Lax",
        // expiresAfterDays: 182,
    },

    categories: {
        necessary: {
            enabled: true,  // this category is enabled by default
            readOnly: true  // this category cannot be disabled
        },
        analytics: {
            autoClear: {
                cookies: [
                    {
                        name: '/^_ga/',   // regex: match all cookies starting with '_ga'
                    },
                    {
                        name: '_gid',   // string: exact cookie name
                    }
                ]
            },

             // https://cookieconsent.orestbida.com/reference/configuration-reference.html#category-services
            services: {
                ga: {
                    label: 'Google Analytics',
                    onAccept: () => {},
                    onReject: () => {}
                },
                youtube: {
                    label: 'Youtube Embed',
                    onAccept: () => {},
                    onReject: () => {}
                },
            },
        },
        ads: {},
    },

    // https://cookieconsent.orestbida.com/reference/configuration-reference.html#guioptions
    // guiOptions: {
    //     consentModal: {
    //         layout: 'cloud inline',
    //         position: 'bottom center',
    //         equalWeightButtons: true,
    //         flipButtons: false
    //     },
    //     preferencesModal: {
    //         layout: 'box',
    //         equalWeightButtons: true,
    //         flipButtons: false
    //     }
    // },

    onFirstConsent: ({cookie}) => {
        console.log('onFirstConsent fired',cookie);
    },

    onConsent: ({cookie}) => {
        console.log('onConsent fired!', cookie)
    },

    onChange: ({changedCategories, changedServices}) => {
        console.log('onChange fired!', changedCategories, changedServices);
    },

    onModalReady: ({modalName}) => {
        console.log('ready:', modalName);
    },

    onModalShow: ({modalName}) => {
        console.log('visible:', modalName);
    },

    onModalHide: ({modalName}) => {
        console.log('hidden:', modalName);
    },

    language: {
        default: 'en',
        translations: {
            en: {
                consentModal: {
                    title: 'We use cookies 🍪',
                    description: 'Cookies help us improve your experience. Such as save data and remember your preferences. You can change your preferences at any time.',
                    acceptAllBtn: 'Accept all',
                    acceptNecessaryBtn: 'Reject all',
                    showPreferencesBtn: 'Manage Individual preferences',
                    // closeIconLabel: 'Reject all and close modal',
                    footer: `
                        <a href="/about" target="_blank">About</a>
                        <a href="/privacy_policy" target="_blank">Privacy Policy</a>
                    `,
                },
                preferencesModal: {
                    title: 'Manage cookie preferences 🍪🛠️',
                    acceptAllBtn: 'Accept all',
                    acceptNecessaryBtn: 'Reject all',
                    savePreferencesBtn: 'Accept current selection',
                    closeIconLabel: 'Close cookie setting',
                    sections: [
                        {
                            title: 'Somebody said ... cookies?',
                            description: 'I want one!'
                        },
                        {
                            title: 'Strictly Necessary cookies',
                            description: 'These cookies are essential for the proper functioning of the website and cannot be disabled.',

                            //this field will generate a toggle linked to the 'necessary' category
                            linkedCategory: 'necessary'
                        },
                        {
                            title: 'Performance and Analytics',
                            description: '(<b>SPYWARES, TURN THIS OFF IF YOU DON\'T WANT ANY OF THOSE!</b>) These cookies collect information about how you use our website. All of the data is anonymized (<span style="font-size: x-small;">maybe or not at all lol, ask each of the plugin devs featured</span>) and cannot be used to identify you. Perkedel itself never collects any of your personal information.',
                            linkedCategory: 'analytics'
                        },
                        {
                            title: 'More information',
                            description: 'For any queries in relation to my policy on cookies and your choices, please <a href="/privacy_policy" target="_blank">contact us</a>'
                        }
                    ]
                }
            },
            id: {
                consentModal: {
                    title: 'Kami menggunakan Cookies 🍪',
                    description: 'Cookie membantu kami meningkatkan pengalaman Anda. Contohnya menyimpan data dan mengingat preferensi Anda. Anda dapat mengubah preferensi Anda kapan saja.',
                    acceptAllBtn: 'Terima semua',
                    acceptNecessaryBtn: 'Tolak semua',
                    showPreferencesBtn: 'Atur preferensi satu2'
                },
                preferencesModal: {
                    title: 'Atur preferensi cookie 🍪🛠️',
                    acceptAllBtn: 'Terima semua',
                    acceptNecessaryBtn: 'Tolak semua',
                    savePreferencesBtn: 'Terima pilihan saat ini',
                    closeIconLabel: 'Tutup setelan cookie',
                    sections: [
                        {
                            title: 'Ada yang mau... biskuit / cookie?',
                            description: 'Aku mau satu!'
                        },
                        {
                            title: 'Cookie yang diperlukan',
                            description: 'Cookie2 ini sangat diperlukan untuk fungsi website dan tidak dapat di nonaktifkan.',

                            //this field will generate a toggle linked to the 'necessary' category
                            linkedCategory: 'necessary'
                        },
                        {
                            title: 'Performa & Analitik',
                            description: '(<b>SPYWARE, JANGAN AKTIFKAN JIKA TIDAK INGIN SEMUA ITU</b>) Cookie2 ini mengumpulkan informasi tentang cara Anda menggunakan website kami. Semua data akan dianonimkan (<span style="font-size: x-small;">kayanya sih atau emang gk sama sekali wkwkwk, tanya aja pengembang plugin yang ada disini deh</span>) dan tidak dapat digunakan untuk mengidentifikasi Anda.',
                            linkedCategory: 'analytics'
                        },
                        {
                            title: 'Info lebih lanjut',
                            description: 'Untuk pertanyaan yang berkaitan dengan kebijakan cookie dan pilihan Anda, silahkan <a href="/privacy_policy" target="_blank">hubungi kami</a>'
                        }
                    ]
                }
            }
        }
    }
});