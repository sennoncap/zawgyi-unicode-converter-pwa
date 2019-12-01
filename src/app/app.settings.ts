import { AppConfig } from './shared/app-config';

export const appSettings: { app: AppConfig } = {
    app: {
        appVersion: '3.4.0',
        releaseDateUtc: '2019-11-29T07:30:00Z',
        appName: 'Zawgyi Unicode Converter',
        appDescription: 'Zawgyi Unicode Converter is a free & open source Zawgyi to Unicode or Unicode to Zawgyi online / offline Myanmar font converter by DagonMetric Myanmar Tools.',
        baseUrl: 'https://zawgyi-unicode-converter.myanmartools.org/',
        navLinks: [
            {
                url: 'https://myanmartools.org',
                label: 'Myanmar Tools',
                title: 'Explore more Myanmar Tools',
                iconName: 'logo-myanmartools',
                expanded: true
            },
            {
                url: 'https://www.facebook.com/DagonMetric',
                label: 'Facebook',
                title: 'Learn more on Facebook',
                iconName: 'logo-facebook'
            },
            {
                url: 'https://www.youtube.com/channel/UCbJLAOU-kG6vkBOU1TSM5Cw',
                label: 'YouTube',
                title: 'Watch more on YouTube',
                iconName: 'logo-youtube'
            },
            {
                url: 'https://medium.com/myanmartools',
                label: 'Medium',
                title: 'Articles on Medium',
                iconName: 'logo-medium'
            },
            {
                url: 'https://github.com/myanmartools/zawgyi-unicode-converter-pwa',
                label: 'GitHub',
                title: 'Source code on GitHub',
                iconName: 'logo-github'
            }
        ],
        socialSharing: {
            subject: 'Zawgyi Unicode Converter app you may also like',
            message: 'ဇော်ဂျီ ယူနီကုဒ် အခက်အခဲရှိနေသူများအတွက် ဇော်ဂျီကနေ ယူနီကုဒ်၊ ယူနီကုဒ်ကနေ ဇော်ဂျီ အပြန်အလှန် အလိုအလျောက် ပြောင်းပေးတဲ့ app တစ်ခု မျှဝေလိုက်ပါတယ်။',
            linkUrl: 'https://myanmartools.org/apps/zawgyi-unicode-converter'
        },
        facebookAppId: '461163654621837',
        privacyUrl: 'https://privacy.dagonmetric.com/privacy-statement'
    }
};
