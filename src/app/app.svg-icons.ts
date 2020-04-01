/**
 * @license
 * Copyright DagonMetric. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found under the LICENSE file in the root directory of this source tree.
 */

// tslint:disable:max-line-length

import { Provider } from '@angular/core';

import { SVG_ICON } from '../modules/mat-extensions';

// These are the hardcoded inline svg sources to be used by the `<mat-icon>` component
export const appSvgIconProviders: Provider[] = [
    {
        provide: SVG_ICON,
        useValue: {
            name: 'menu',
            svgSource: '<svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" width="100%" height="100%" fit=""> ' +
                '<path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/> ' +
                '</svg>'
        },
        multi: true
    },
    {
        provide: SVG_ICON,
        useValue: {
            name: 'launch',
            svgSource: '<svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" width="100%" height="100%" fit=""> ' +
                '<path d="M0 0h24v24H0z" fill="none"/><path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"/> ' +
                '</svg>'
        },
        multi: true
    },
    {
        provide: SVG_ICON,
        useValue: {
            name: 'info',
            svgSource: '<svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" width="100%" height="100%" fit=""> ' +
                '<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" /> ' +
                '</svg>'
        },
        multi: true
    },
    {
        provide: SVG_ICON,
        useValue: {
            name: 'help',
            svgSource: '<svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" width="100%" height="100%" fit=""> ' +
                '<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z" /> ' +
                '</svg>'
        },
        multi: true
    },
    {
        provide: SVG_ICON,
        useValue: {
            name: 'share',
            svgSource: '<svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" width="100%" height="100%" fit=""> ' +
                '<path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z" /> ' +
                '</svg>'
        },
        multi: true
    },
    {
        provide: SVG_ICON,
        useValue: {
            name: 'add',
            svgSource: '<svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" width="100%" height="100%" fit=""> ' +
                '<path d="M0 0h24v24H0z" fill="none"/><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"/> ' +
                '</svg>'
        },
        multi: true
    },
    {
        provide: SVG_ICON,
        useValue: {
            name: 'logo-google-play-badge',
            svgSource: '<svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 135 40" preserveAspectRatio="xMidYMid meet" focusable="false" width="100%" height="100%" fit=""> ' +
                   '<style>.st0{fill:#a6a6a6}.st1{stroke:#fff;stroke-width:.2;stroke-miterlimit:10}.st1,.st2{fill:#fff}.st3{fill:url(#SVGID_1_)}.st4{fill:url(#SVGID_2_)}.st5{fill:url(#SVGID_3_)}.st6{fill:url(#SVGID_4_)}.st7,.st8,.st9{opacity:.2;enable-background:new}.st8,.st9{opacity:.12}.st9{opacity:.25;fill:#fff}</style><path d="M130 40H5c-2.8 0-5-2.2-5-5V5c0-2.8 2.2-5 5-5h125c2.8 0 5 2.2 5 5v30c0 2.8-2.2 5-5 5z"/><path class="st0" d="M130 .8c2.3 0 4.2 1.9 4.2 4.2v30c0 2.3-1.9 4.2-4.2 4.2H5C2.7 39.2.8 37.3.8 35V5C.8 2.7 2.7.8 5 .8h125m0-.8H5C2.2 0 0 2.3 0 5v30c0 2.8 2.2 5 5 5h125c2.8 0 5-2.2 5-5V5c0-2.7-2.2-5-5-5z"/><path class="st1" d="M47.4 10.2c0 .8-.2 1.5-.7 2-.6.6-1.3.9-2.2.9-.9 0-1.6-.3-2.2-.9-.6-.6-.9-1.3-.9-2.2 0-.9.3-1.6.9-2.2.6-.6 1.3-.9 2.2-.9.4 0 .8.1 1.2.3.4.2.7.4.9.7l-.5.5c-.4-.5-.9-.7-1.6-.7-.6 0-1.2.2-1.6.7-.5.4-.7 1-.7 1.7s.2 1.3.7 1.7c.5.4 1 .7 1.6.7.7 0 1.2-.2 1.7-.7.3-.3.5-.7.5-1.2h-2.2v-.8h2.9v.4zM52 7.7h-2.7v1.9h2.5v.7h-2.5v1.9H52v.8h-3.5V7H52v.7zM55.3 13h-.8V7.7h-1.7V7H57v.7h-1.7V13zM59.9 13V7h.8v6h-.8zM64.1 13h-.8V7.7h-1.7V7h4.1v.7H64V13zM73.6 12.2c-.6.6-1.3.9-2.2.9-.9 0-1.6-.3-2.2-.9-.6-.6-.9-1.3-.9-2.2s.3-1.6.9-2.2c.6-.6 1.3-.9 2.2-.9.9 0 1.6.3 2.2.9.6.6.9 1.3.9 2.2 0 .9-.3 1.6-.9 2.2zm-3.8-.5c.4.4 1 .7 1.6.7.6 0 1.2-.2 1.6-.7.4-.4.7-1 .7-1.7s-.2-1.3-.7-1.7c-.4-.4-1-.7-1.6-.7-.6 0-1.2.2-1.6.7-.4.4-.7 1-.7 1.7s.2 1.3.7 1.7zM75.6 13V7h.9l2.9 4.7V7h.8v6h-.8l-3.1-4.9V13h-.7z"/><path class="st2" d="M68.1 21.8c-2.4 0-4.3 1.8-4.3 4.3 0 2.4 1.9 4.3 4.3 4.3s4.3-1.8 4.3-4.3c0-2.6-1.9-4.3-4.3-4.3zm0 6.8c-1.3 0-2.4-1.1-2.4-2.6s1.1-2.6 2.4-2.6c1.3 0 2.4 1 2.4 2.6 0 1.5-1.1 2.6-2.4 2.6zm-9.3-6.8c-2.4 0-4.3 1.8-4.3 4.3 0 2.4 1.9 4.3 4.3 4.3s4.3-1.8 4.3-4.3c0-2.6-1.9-4.3-4.3-4.3zm0 6.8c-1.3 0-2.4-1.1-2.4-2.6s1.1-2.6 2.4-2.6c1.3 0 2.4 1 2.4 2.6 0 1.5-1.1 2.6-2.4 2.6zm-11.1-5.5v1.8H52c-.1 1-.5 1.8-1 2.3-.6.6-1.6 1.3-3.3 1.3-2.7 0-4.7-2.1-4.7-4.8s2.1-4.8 4.7-4.8c1.4 0 2.5.6 3.3 1.3l1.3-1.3c-1.1-1-2.5-1.8-4.5-1.8-3.6 0-6.7 3-6.7 6.6 0 3.6 3.1 6.6 6.7 6.6 2 0 3.4-.6 4.6-1.9 1.2-1.2 1.6-2.9 1.6-4.2 0-.4 0-.8-.1-1.1h-6.2zm45.4 1.4c-.4-1-1.4-2.7-3.6-2.7s-4 1.7-4 4.3c0 2.4 1.8 4.3 4.2 4.3 1.9 0 3.1-1.2 3.5-1.9l-1.4-1c-.5.7-1.1 1.2-2.1 1.2s-1.6-.4-2.1-1.3l5.7-2.4-.2-.5zm-5.8 1.4c0-1.6 1.3-2.5 2.2-2.5.7 0 1.4.4 1.6.9l-3.8 1.6zM82.6 30h1.9V17.5h-1.9V30zm-3-7.3c-.5-.5-1.3-1-2.3-1-2.1 0-4.1 1.9-4.1 4.3s1.9 4.2 4.1 4.2c1 0 1.8-.5 2.2-1h.1v.6c0 1.6-.9 2.5-2.3 2.5-1.1 0-1.9-.8-2.1-1.5l-1.6.7c.5 1.1 1.7 2.5 3.8 2.5 2.2 0 4-1.3 4-4.4V22h-1.8v.7zm-2.2 5.9c-1.3 0-2.4-1.1-2.4-2.6s1.1-2.6 2.4-2.6c1.3 0 2.3 1.1 2.3 2.6s-1 2.6-2.3 2.6zm24.4-11.1h-4.5V30h1.9v-4.7h2.6c2.1 0 4.1-1.5 4.1-3.9s-2-3.9-4.1-3.9zm.1 6h-2.7v-4.3h2.7c1.4 0 2.2 1.2 2.2 2.1-.1 1.1-.9 2.2-2.2 2.2zm11.5-1.8c-1.4 0-2.8.6-3.3 1.9l1.7.7c.4-.7 1-.9 1.7-.9 1 0 1.9.6 2 1.6v.1c-.3-.2-1.1-.5-1.9-.5-1.8 0-3.6 1-3.6 2.8 0 1.7 1.5 2.8 3.1 2.8 1.3 0 1.9-.6 2.4-1.2h.1v1h1.8v-4.8c-.2-2.2-1.9-3.5-4-3.5zm-.2 6.9c-.6 0-1.5-.3-1.5-1.1 0-1 1.1-1.3 2-1.3.8 0 1.2.2 1.7.4-.2 1.2-1.2 2-2.2 2zm10.5-6.6l-2.1 5.4h-.1l-2.2-5.4h-2l3.3 7.6-1.9 4.2h1.9l5.1-11.8h-2zm-16.8 8h1.9V17.5h-1.9V30z"/><g><linearGradient id="SVGID_1_" gradientUnits="userSpaceOnUse" x1="21.8" y1="33.29" x2="5.017" y2="16.508" gradientTransform="matrix(1 0 0 -1 0 42)"><stop offset="0" stop-color="#00a0ff"/><stop offset=".007" stop-color="#00a1ff"/><stop offset=".26" stop-color="#00beff"/><stop offset=".512" stop-color="#00d2ff"/><stop offset=".76" stop-color="#00dfff"/><stop offset="1" stop-color="#00e3ff"/></linearGradient><path class="st3" d="M10.4 7.5c-.3.3-.4.8-.4 1.4V31c0 .6.2 1.1.5 1.4l.1.1L23 20.1v-.2L10.4 7.5z"/><linearGradient id="SVGID_2_" gradientUnits="userSpaceOnUse" x1="33.834" y1="21.999" x2="9.637" y2="21.999" gradientTransform="matrix(1 0 0 -1 0 42)"><stop offset="0" stop-color="#ffe000"/><stop offset=".409" stop-color="#ffbd00"/><stop offset=".775" stop-color="orange"/><stop offset="1" stop-color="#ff9c00"/></linearGradient><path class="st4" d="M27 24.3l-4.1-4.1V19.9l4.1-4.1.1.1 4.9 2.8c1.4.8 1.4 2.1 0 2.9l-5 2.7z"/><linearGradient id="SVGID_3_" gradientUnits="userSpaceOnUse" x1="24.827" y1="19.704" x2="2.069" y2="-3.054" gradientTransform="matrix(1 0 0 -1 0 42)"><stop offset="0" stop-color="#ff3a44"/><stop offset="1" stop-color="#c31162"/></linearGradient><path class="st5" d="M27.1 24.2L22.9 20 10.4 32.5c.5.5 1.2.5 2.1.1l14.6-8.4"/><linearGradient id="SVGID_4_" gradientUnits="userSpaceOnUse" x1="7.297" y1="41.824" x2="17.46" y2="31.661" gradientTransform="matrix(1 0 0 -1 0 42)"><stop offset="0" stop-color="#32a071"/><stop offset=".069" stop-color="#2da771"/><stop offset=".476" stop-color="#15cf74"/><stop offset=".801" stop-color="#06e775"/><stop offset="1" stop-color="#00f076"/></linearGradient><path class="st6" d="M27.1 15.8L12.5 7.5c-.9-.5-1.6-.4-2.1.1L22.9 20l4.2-4.2z"/><path class="st7" d="M27 24.1l-14.5 8.2c-.8.5-1.5.4-2 0l-.1.1.1.1c.5.4 1.2.5 2 0L27 24.1z"/><path class="st8" d="M10.4 32.3c-.3-.3-.4-.8-.4-1.4v.1c0 .6.2 1.1.5 1.4v-.1h-.1zM32 21.3l-5 2.8.1.1 4.9-2.8c.7-.4 1-.9 1-1.4 0 .5-.4.9-1 1.3z"/><path class="st9" d="M12.5 7.6L32 18.7c.6.4 1 .8 1 1.3 0-.5-.3-1-1-1.4L12.5 7.5c-1.4-.8-2.5-.2-2.5 1.4V9c0-1.5 1.1-2.2 2.5-1.4z"/></g>' +
                '</svg>'
        },
        multi: true
    },
    {
        provide: SVG_ICON,
        useValue: {
            name: 'logo-app',
            svgSource: '<svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" width="100%" height="100%" fit=""> ' +
                '<g class="zuc-l-h-arrow"> ' +
                '    <rect class="zuc-l-a-line" x="6.57" y="13.79" width="6.25" height="1.79"/> ' +
                '    <polygon class="zuc-l-a-head" points="2.96 14.69 6.57 18.27 6.57 11.11 2.96 14.69"/> ' +
                '</g> ' +
                '<g class="zuc-r-h-arrow"> ' +
                '    <polygon class="zuc-r-a-head" points="21.04 9.31 17.43 12.89 17.43 5.73 21.04 9.31"/> ' +
                '    <rect class="zuc-r-a-line" x="11.18" y="8.42" width="6.25" height="1.79" transform="translate(28.6 18.63) rotate(180)"/> ' +
                '</g> ' +
                '<path class="zuc-u" d="M19.78,18.07c0,1.92-.9,2.88-2.71,2.88s-2.63-.94-2.63-2.81v-3.7H15.9v3.71q0,1.56,1.23,1.56t1.2-1.5V14.44h1.45Z"/> ' +
                '<path class="zuc-z" d="M9.51,9.56H4.22V8.71L7.59,4.24H4.46V3.05h5v.82L6.21,8.37h3.3Z"/> ' +
                '</svg>'
        },
        multi: true
    },
    {
        provide: SVG_ICON,
        useValue: {
            name: 'logo-myanmartools',
            svgSource: '<svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" width="100%" height="100%" fit=""> ' +
                '<path d="M13.5,12.7c-0.1,0.4-0.2,0.8-0.1,1.3c0.1,0.1,0.7,1.3,0.7,1.3s0.1,0.2,0.2,0.3c0,0.1,0,0.3-0.2,0.6c0,0-0.5,0.6-0.3,1.2' +
                'l0.7,0.7c0,0,0.2,1,0.4,1.5c0,0,0.4,0.8,0.3,0.9c0,0-0.4,1-0.7,1.5h4.3l2.7-4.6l-2.7-4.6h-5.3V12.7z" /> ' +
                '<path d="M14.1,20.4c0.2-0.2,0.1-1.4-0.2-1.6l-0.2-0.6l-0.3-0.1L13.1,17L13,15.3l-0.8-0.6l-1.5,2.6l2.7,4.6h0.7' +
                'C14.1,21.5,14,20.6,14.1,20.4z" /> ' +
                '<path d="M9.1,15.6c0,0,0.7-1.9-0.3-3.2c0,0-0.4,0-0.6-0.4c0,0,0.1-0.1,0.2-0.3c0,0-0.3-0.7-1.6-1.5V9.7c0-0.1,0.1-0.3,0.3-0.3h0.1' +
                'V9.1c0-0.2,0.1-0.3,0.3-0.3h0.2V8.1c0-0.2,0.2-0.3,0.3-0.3V7.6H5l-2.7,4.6L5,16.9h5.3l0.8-1.3L10.5,16C10.5,16,9.5,15.8,9.1,15.6z" /> ' +
                '<path d="M14,2.5c0,0,0.4,1,0,2.2c0,0-1.2,1.1-0.9,2c0,0,1.1-0.6,1.2-0.2l0.3,0.8c0,0,0.4,0.1,0.6,0.3c0,0-0.1,0.9-0.2,0.9' +
                'c0.1,0,0.5-0.2,0.6,0c0,0,0.5,0.6,0.4,0.7h0.7c0,0,0.7-0.3,0.2,0.3c0,0-0.5,0.7-1.2,1.2c0,0-0.3,0.3-0.6,0.5H19l2.7-4.6L19,2h-5.3' +
                'c0.1,0.1,0.2,0.3,0.2,0.6H14V2.5z" /> ' +
                '</svg>'
        },
        multi: true
    },
    {
        provide: SVG_ICON,
        useValue: {
            name: 'logo-facebook',
            svgSource: '<svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" width="100%" height="100%" fit=""> ' +
                '<path d="M22,12.1c0-5.5-4.5-10-10-10c-5.5,0-10,4.5-10,10c0,5,3.7,9.1,8.4,9.9v-7H7.9v-2.9h2.5V9.9c0-2.5,1.5-3.9,3.8-3.9' +
                'c1.1,0,2.2,0.2,2.2,0.2v2.5h-1.3c-1.2,0-1.6,0.8-1.6,1.6v1.9h2.8L15.9,15h-2.3v7C18.3,21.2,22,17.1,22,12.1z"/> ' +
                '</svg>'
        },
        multi: true
    },
    {
        provide: SVG_ICON,
        useValue: {
            name: 'logo-youtube',
            svgSource: '<svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" width="100%" height="100%" fit=""> ' +
                '<path d="M21.6,7.2c-0.2-0.8-0.9-1.5-1.7-1.7C18.3,5,12,5,12,5S5.8,5,4.2,5.4C3.3,5.7,2.7,6.3,2.4,7.2C2.1,8.8,2,10.4,2,12' +
                'c0,1.6,0.1,3.2,0.4,4.8c0.2,0.8,0.9,1.5,1.7,1.7C5.7,19,12,19,12,19s6.3,0,7.8-0.4c0.8-0.2,1.5-0.9,1.7-1.7c0.3-1.6,0.4-3.2,0.4-4.8' +
                'C22,10.4,21.9,8.8,21.6,7.2z M10,15V9l5.2,3L10,15z"/> ' +
                '</svg>'
        },
        multi: true
    },
    // {
    //     provide: SVG_ICON,
    //     useValue: {
    //         name: 'logo-medium',
    //         svgSource: '<svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" width="100%" height="100%" fit=""> ' +
    //             '<path d="M2,2v20h20V2H2z M18.6,6.7l-1.1,1c-0.1,0.1-0.1,0.2-0.1,0.3v7.6c0,0.1,0,0.2,0.1,0.3l1,1v0.2h-5.3V17l1.1-1.1' +
    //             'c0.1-0.1,0.1-0.1,0.1-0.3V9.5l-3,7.7h-0.4L7.6,9.5v5.1c0,0.2,0,0.4,0.2,0.6l1.4,1.7v0.2h-4v-0.2l1.4-1.7c0.2-0.2,0.2-0.4,0.2-0.6' +
    //             'V8.7c0-0.2,0-0.3-0.2-0.4L5.3,6.7V6.5h3.9l3,6.6l2.6-6.6h3.7V6.7z"/> ' +
    //             '</svg>'
    //     },
    //     multi: true
    // },
    {
        provide: SVG_ICON,
        useValue: {
            name: 'logo-github',
            svgSource: '<svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" width="100%" height="100%" fit=""> ' +
                '<path d="M12,2.2c-5.5,0-10,4.5-10,10c0,4.4,2.9,8.2,6.8,9.5c0.5,0.1,0.7-0.2,0.7-0.5c0-0.2,0-0.9,0-1.7c-2.8,0.6-3.4-1.3-3.4-1.3' +
                'C5.7,17.1,5,16.7,5,16.7c-0.9-0.6,0.1-0.6,0.1-0.6c1,0.1,1.5,1,1.5,1C7.5,18.7,9,18.3,9.5,18c0.1-0.6,0.3-1.1,0.6-1.3' +
                'c-2.2-0.3-4.6-1.1-4.6-4.9c0-1.1,0.4-2,1-2.7C6.5,8.8,6.2,7.8,6.7,6.4c0,0,0.8-0.3,2.7,1c0.8-0.2,1.7-0.3,2.5-0.3' +
                'c0.8,0,1.7,0.1,2.5,0.3c1.9-1.3,2.7-1,2.7-1c0.5,1.4,0.2,2.4,0.1,2.6c0.6,0.7,1,1.6,1,2.7c0,3.8-2.3,4.7-4.6,4.9' +
                'c0.3,0.3,0.7,0.9,0.7,1.8c0,1.3,0,2.4,0,2.7c0,0.3,0.2,0.6,0.7,0.5c4-1.3,6.9-5.1,6.9-9.5C22,6.7,17.5,2.2,12,2.2"/> ' +
                '</svg>'
        },
        multi: true
    },
    {
        provide: SVG_ICON,
        useValue: {
            name: 'logo-gitter',
            svgSource: '<svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" width="100%" height="100%" fit=""> ' +
                '<path d="M9.1,5.3h1.7V22H9.1V5.3z M14.9,5.3V22h-1.7V5.3H14.9z M4.9,2h1.7v12.5H4.9V2z M17.4,5.3h1.7v9.2h-1.7V5.3z"/> ' +
                '</svg>'
        },
        multi: true
    },
    {
        provide: SVG_ICON,
        useValue: {
            name: 'logo-messenger',
            svgSource: '<svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" width="100%" height="100%" fit=""> ' +
                '<path d="M2,11.7C2,6.1,6.4,2,12,2s10,4.1,10,9.7s-4.4,9.7-10,9.7c-1,0-2-0.1-2.9-0.4c-0.2,0-0.4,0-0.5,0l-2,0.9' +
                'c-0.4,0.2-0.9,0-1.1-0.4c0-0.1-0.1-0.2-0.1-0.3l-0.1-1.8c0-0.2-0.1-0.4-0.3-0.6C3.1,17,2,14.4,2,11.7z M8.9,9.9L6,14.5' +
                'c-0.3,0.4,0.3,0.9,0.7,0.6l3.2-2.4c0.2-0.2,0.5-0.2,0.7,0l2.3,1.7c0.7,0.5,1.7,0.3,2.2-0.4L18,9.5c0.3-0.4-0.3-0.9-0.7-0.6l-3.2,2.4' +
                'c-0.2,0.2-0.5,0.2-0.7,0l-2.3-1.7C10.4,9,9.5,9.1,9,9.8C9,9.8,9,9.8,8.9,9.9z"/>' +
                '</svg>'
        },
        multi: true
    },
    {
        provide: SVG_ICON,
        useValue: {
            name: 'logo-vac',
            svgSource: '<svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 96 96" preserveAspectRatio="xMidYMid meet" focusable="false" width="100%" height="100%" fit=""> ' +
                '<style>.cls-1{fill:#ff0;}.cls-2{font-size:6px;fill:#03a9f4;font-family:Arial-BoldMT, Arial;font-weight:700;letter-spacing:-0.08em;}.cls-3,.cls-7,.cls-8{fill:#9c27b0;}.cls-3,.cls-5,.cls-6{letter-spacing:-0.01em;}.cls-4{letter-spacing:-0.04em;fill:#000;}.cls-5{fill:#e91e63;}.cls-8{letter-spacing:-0.03em;}.cls-9{fill:#0063b1;}.cls-10{fill:#1976d2;}.cls-11{fill:#e81123;}.cls-12{fill:#4c4a48;}</style><circle class="cls-1" cx="48" cy="48" r="48"/><text class="cls-2" transform="translate(3.73 64.06)">V<tspan class="cls-3" x="3.51" y="0">ALUE</tspan><tspan class="cls-4" x="19.68" y="0"> </tspan><tspan class="cls-5" x="21.08" y="0">A</tspan><tspan class="cls-3" x="25.37" y="0">DDED</tspan><tspan class="cls-6" x="42.21" y="0" xml:space="preserve"> C</tspan><tspan class="cls-3" x="48.12" y="0">ONSU</tspan><tspan class="cls-7" x="65.29" y="0">LT</tspan><tspan class="cls-3" x="71.64" y="0">ANC</tspan><tspan class="cls-8" x="84.52" y="0">Y</tspan></text><path class="cls-9" d="M43.9,41.54V42a4.28,4.28,0,0,0-2.24.92,13.82,13.82,0,0,0-2.11,2.75l-7.9,12.1h-.56L23.14,45.22a14.92,14.92,0,0,0-1.93-2.66,3.51,3.51,0,0,0-1.83-.49v-.43l11.05,0V42h-.38a5.42,5.42,0,0,0-2,.26.56.56,0,0,0-.39.52,1.19,1.19,0,0,0,.14.49c.09.19.4.7.92,1.53l4.95,7.85,4.53-7a17.12,17.12,0,0,0,1-1.71,2,2,0,0,0,.18-.73.84.84,0,0,0-.27-.62,1.76,1.76,0,0,0-.81-.4,7.66,7.66,0,0,0-1.93-.2v-.43Z"/><path class="cls-10" d="M43.9,41.54V42a4.28,4.28,0,0,0-2.24.92,13.82,13.82,0,0,0-2.11,2.75l-7.9,12.1h-.56L23.14,45.22a14.92,14.92,0,0,0-1.93-2.66,3.51,3.51,0,0,0-1.83-.49v-.43l11.05,0V42h-.38a5.42,5.42,0,0,0-2,.26.56.56,0,0,0-.39.52,1.19,1.19,0,0,0,.14.49c.09.19.4.7.92,1.53l4.95,7.85,4.53-7a17.12,17.12,0,0,0,1-1.71,2,2,0,0,0,.18-.73.84.84,0,0,0-.27-.62,1.76,1.76,0,0,0-.81-.4,7.66,7.66,0,0,0-1.93-.2v-.43Z"/><path class="cls-11" d="M48.52,52.83l-8.15,0-1,1.54a2.59,2.59,0,0,0-.47,1.27,1,1,0,0,0,.78,1,9.74,9.74,0,0,0,2.27.27v.43l-7.67,0V57a4.27,4.27,0,0,0,2-.71,9.65,9.65,0,0,0,2-2.39l8.2-12.64h.32l8.37,12.92a7.71,7.71,0,0,0,2,2.31,3.49,3.49,0,0,0,1.63.42v.43l-11.15,0V56.9h.46A4.79,4.79,0,0,0,50,56.63a.58.58,0,0,0,.38-.53,1,1,0,0,0-.11-.43,7.51,7.51,0,0,0-.51-.88ZM47.94,52l-3.46-5.43L41,52Z"/><path class="cls-10" d="M76.6,41.06l0,5.47H76a5.86,5.86,0,0,0-2.8-3.28,9.31,9.31,0,0,0-4.63-1.12,9.07,9.07,0,0,0-4,.86,6,6,0,0,0-2.63,2.24,7.41,7.41,0,0,0-1.06,3.92,9.35,9.35,0,0,0,.8,3.86,5.4,5.4,0,0,0,2.46,2.62,9.19,9.19,0,0,0,4.32.88,11.84,11.84,0,0,0,4-.67,14,14,0,0,0,3.8-2.26V55a13.5,13.5,0,0,1-4,2,17.41,17.41,0,0,1-4.9.65,19.54,19.54,0,0,1-6.56-1,9.82,9.82,0,0,1-4.44-2.9,6.31,6.31,0,0,1-1.57-4,6.59,6.59,0,0,1,1.71-4.29,11.2,11.2,0,0,1,4.65-3.16,17.23,17.23,0,0,1,6.23-1.15,20,20,0,0,1,5.14.71,11.16,11.16,0,0,0,2,.41,1.65,1.65,0,0,0,.94-.28,1.28,1.28,0,0,0,.51-.87Z"/><path class="cls-10" d="M10.22,48.44c0-3.07,2-5.94,5.45-8.38-5.18,2.25-8.26,5.06-8.26,8.11,0,2.71,2.42,5.22,6.58,7.33C11.57,53.37,10.22,51,10.22,48.44Z"/><path class="cls-10" d="M80.33,40.06c3.46,2.44,5.45,5.31,5.45,8.38,0,2.53-1.35,4.93-3.77,7.06,4.16-2.11,6.58-4.62,6.58-7.33C88.59,45.12,85.51,42.31,80.33,40.06Z"/><path class="cls-11" d="M48,34.5c13.19,0,24.91,2.18,32.33,5.56C73.71,35.15,61.71,31.88,48,31.88s-25.71,3.27-32.33,8.18C23.09,36.68,34.81,34.5,48,34.5Z"/><path class="cls-12" d="M89.15,40a2.48,2.48,0,0,1,1.16.3,2.26,2.26,0,0,1,.88.88,2.38,2.38,0,0,1,0,2.35,2.21,2.21,0,0,1-.87.87,2.36,2.36,0,0,1-1.17.31A2.39,2.39,0,0,1,88,44.42a2.21,2.21,0,0,1-.87-.87,2.38,2.38,0,0,1,0-2.35,2.28,2.28,0,0,1,.89-.88A2.42,2.42,0,0,1,89.15,40Zm0,.39a2,2,0,0,0-1,.26,1.83,1.83,0,0,0-.74.72,2.09,2.09,0,0,0-.26,1,2,2,0,0,0,.26,1,1.77,1.77,0,0,0,.73.73,1.92,1.92,0,0,0,1,.26,1.88,1.88,0,0,0,1-.26,1.71,1.71,0,0,0,.73-.73,2,2,0,0,0,.26-1,2.09,2.09,0,0,0-.26-1,1.77,1.77,0,0,0-.74-.72A2,2,0,0,0,89.15,40.41Zm-1,3.27V41.14H89a2,2,0,0,1,.65.08.58.58,0,0,1,.32.24.65.65,0,0,1,.12.37.7.7,0,0,1-.2.49.84.84,0,0,1-.53.23.67.67,0,0,1,.22.13,2.8,2.8,0,0,1,.37.5l.31.5h-.5l-.22-.4a2.15,2.15,0,0,0-.43-.59.5.5,0,0,0-.33-.09h-.24v1.08Zm.41-1.43H89a.78.78,0,0,0,.48-.1.34.34,0,0,0,.13-.28.37.37,0,0,0-.06-.21.45.45,0,0,0-.17-.13,1.31,1.31,0,0,0-.41,0h-.47Z"/> ' +
                '</svg>'
        },
        multi: true
    },
];
