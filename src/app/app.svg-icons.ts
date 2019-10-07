/**
 * @license
 * Copyright DagonMetric. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found under the LICENSE file in the root directory of this source tree.
 */

// tslint:disable:max-line-length

import { Provider } from '@angular/core';

import { SVG_ICON } from './shared/mat-extensions';

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
            name: 'refresh',
            svgSource: '<svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" width="100%" height="100%" fit=""> ' +
                '<path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"/> ' +
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
//     {
//         provide: SVG_ICON,
//         useValue: {
//             name: 'logo-googleplay-badge',
//             svgSource:
//                 `
// <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 135 40" preserveAspectRatio="xMidYMid meet" focusable="false" width="100%" height="100%" fit="">
// <defs>
//         <linearGradient id="a" x1="21.8" y1="173.29" x2="5.017" y2="156.508" gradientTransform="matrix(1 0 0 -1 0 182)" gradientUnits="userSpaceOnUse">
//             <stop offset="0" stop-color="#00a0ff" />
//             <stop offset=".007" stop-color="#00a1ff" />
//             <stop offset=".26" stop-color="#00beff" />
//             <stop offset=".512" stop-color="#00d2ff" />
//             <stop offset=".76" stop-color="#00dfff" />
//             <stop offset="1" stop-color="#00e3ff" />
//         </linearGradient>
//         <linearGradient id="b" x1="33.834" y1="161.999" x2="9.637" y2="161.999" gradientTransform="matrix(1 0 0 -1 0 182)" gradientUnits="userSpaceOnUse">
//             <stop offset="0" stop-color="#ffe000" />
//             <stop offset=".409" stop-color="#ffbd00" />
//             <stop offset=".775" stop-color="orange" />
//             <stop offset="1" stop-color="#ff9c00" />
//         </linearGradient>
//         <linearGradient id="c" x1="24.827" y1="159.704" x2="2.069" y2="136.946" gradientTransform="matrix(1 0 0 -1 0 182)" gradientUnits="userSpaceOnUse">
//             <stop offset="0" stop-color="#ff3a44" />
//             <stop offset="1" stop-color="#c31162" />
//         </linearGradient>
//         <linearGradient id="d" x1="7.297" y1="181.824" x2="17.46" y2="171.661" gradientTransform="matrix(1 0 0 -1 0 182)" gradientUnits="userSpaceOnUse">
//             <stop offset="0" stop-color="#32a071" />
//             <stop offset=".069" stop-color="#2da771" />
//             <stop offset=".476" stop-color="#15cf74" />
//             <stop offset=".801" stop-color="#06e775" />
//             <stop offset="1" stop-color="#00f076" />
//         </linearGradient>
//     </defs>
//     <rect width="135" height="40" rx="5" ry="5" />
//     <path d="M130 .8a4.2 4.2 0 0 1 4.2 4.2v30a4.2 4.2 0 0 1-4.2 4.2H5A4.2 4.2 0 0 1 .8 35V5A4.2 4.2 0 0 1 5 .8h125m0-.8H5a5.015 5.015 0 0 0-5 5v30a5.015 5.015 0 0 0 5 5h125a5.015 5.015 0 0 0 5-5V5a5.015 5.015 0 0 0-5-5z" fill="#a6a6a6" />
//     <path d="M47.418 10.243a2.708 2.708 0 0 1-.745 2 2.909 2.909 0 0 1-2.2.888A3.09 3.09 0 0 1 41.352 10a3.091 3.091 0 0 1 3.117-3.134 3.1 3.1 0 0 1 1.232.252 2.475 2.475 0 0 1 .938.67l-.527.528a2.026 2.026 0 0 0-1.643-.716 2.319 2.319 0 0 0-2.33 2.4 2.359 2.359 0 0 0 4.006 1.727 1.888 1.888 0 0 0 .5-1.215h-2.176v-.721h2.907a2.543 2.543 0 0 1 .042.452zm4.61-2.506H49.3v1.9h2.464v.721H49.3v1.9h2.732V13h-3.5V7h3.5zM55.279 13h-.772V7.737h-1.676V7h4.123v.737h-1.675zm4.659 0V7h.77v6zm4.19 0h-.771V7.737h-1.676V7H65.8v.737h-1.672zm9.481-.775a3.116 3.116 0 0 1-4.4 0A3.067 3.067 0 0 1 68.326 10a3.067 3.067 0 0 1 .884-2.225 3.1 3.1 0 0 1 4.4 0A3.068 3.068 0 0 1 74.493 10a3.072 3.072 0 0 1-.884 2.225zm-3.83-.5a2.307 2.307 0 0 0 3.26 0A2.348 2.348 0 0 0 73.706 10a2.348 2.348 0 0 0-.667-1.722 2.307 2.307 0 0 0-3.26 0A2.351 2.351 0 0 0 69.113 10a2.351 2.351 0 0 0 .666 1.722zM75.575 13V7h.938l2.916 4.668h.033l-.033-1.156V7h.771v6h-.8l-3.054-4.893h-.033l.033 1.156V13z" fill="#fff" stroke="#fff" stroke-miterlimit="10" stroke-width=".2" />
//     <path d="M68.136 21.752A4.253 4.253 0 1 0 72.405 26a4.192 4.192 0 0 0-4.269-4.248zm0 6.831a2.584 2.584 0 1 1 2.4-2.583 2.461 2.461 0 0 1-2.4 2.583zm-9.313-6.831A4.253 4.253 0 1 0 63.092 26a4.192 4.192 0 0 0-4.27-4.248zm0 6.831a2.584 2.584 0 1 1 2.4-2.583 2.461 2.461 0 0 1-2.401 2.583zm-11.079-5.526v1.8h4.318a3.766 3.766 0 0 1-.983 2.272 4.42 4.42 0 0 1-3.335 1.321 4.8 4.8 0 0 1 0-9.6A4.6 4.6 0 0 1 51 20.141l1.273-1.273a6.294 6.294 0 0 0-4.527-1.82 6.606 6.606 0 1 0 0 13.211 6.039 6.039 0 0 0 4.608-1.853 5.962 5.962 0 0 0 1.563-4.221 5.872 5.872 0 0 0-.1-1.128zm45.308 1.4a3.953 3.953 0 0 0-3.641-2.707A4.042 4.042 0 0 0 85.4 26a4.162 4.162 0 0 0 4.221 4.253 4.231 4.231 0 0 0 3.544-1.885l-1.45-.967a2.429 2.429 0 0 1-2.094 1.176 2.164 2.164 0 0 1-2.062-1.289l5.687-2.352zm-5.8 1.418a2.333 2.333 0 0 1 2.223-2.475 1.647 1.647 0 0 1 1.579.9zM82.628 30H84.5V17.5h-1.872zm-3.061-7.3H79.5a2.947 2.947 0 0 0-2.239-.951 4.257 4.257 0 0 0 0 8.506 2.9 2.9 0 0 0 2.239-.967h.064v.612c0 1.627-.87 2.5-2.272 2.5a2.353 2.353 0 0 1-2.143-1.514l-1.627.677a4.053 4.053 0 0 0 3.77 2.513c2.191 0 4.044-1.289 4.044-4.43v-7.637h-1.769zm-2.143 5.88a2.587 2.587 0 0 1 0-5.155 2.4 2.4 0 0 1 2.276 2.596 2.377 2.377 0 0 1-2.275 2.562zm24.382-11.08h-4.471V30H99.2v-4.736h2.605a3.888 3.888 0 1 0 0-7.765zm.048 6.025H99.2v-4.286h2.654a2.143 2.143 0 1 1 0 4.285zm11.532-1.8a3.5 3.5 0 0 0-3.329 1.914l1.657.692a1.768 1.768 0 0 1 1.7-.917 1.8 1.8 0 0 1 1.962 1.608v.129a4.128 4.128 0 0 0-1.946-.482c-1.785 0-3.6.981-3.6 2.815a2.888 2.888 0 0 0 3.1 2.75 2.632 2.632 0 0 0 2.38-1.222h.064v.965h1.8v-4.79c.007-2.22-1.649-3.458-3.788-3.458zm-.225 6.851c-.611 0-1.464-.306-1.464-1.062 0-.965 1.061-1.335 1.978-1.335a3.324 3.324 0 0 1 1.7.418 2.262 2.262 0 0 1-2.215 1.983zM123.743 22l-2.139 5.42h-.064L119.32 22h-2.01l3.329 7.575-1.9 4.214h1.946L125.818 22zm-16.807 8h1.864V17.5h-1.866z" fill="#fff" />
//     <path d="M10.435 7.538a2 2 0 0 0-.463 1.4v22.121a2 2 0 0 0 .463 1.4l.074.072L22.9 20.147v-.292L10.509 7.466z" fill="url(#a)" />
//     <path d="M27.028 24.279L22.9 20.147v-.292l4.13-4.13.093.053 4.893 2.78c1.4.794 1.4 2.093 0 2.888l-4.893 2.78z" fill="url(#b)" />
//     <path d="M27.122 24.225L22.9 20 10.435 32.464a1.627 1.627 0 0 0 2.078.061l14.608-8.3" fill="url(#c)" />
//     <path d="M27.122 15.777l-14.608-8.3a1.627 1.627 0 0 0-2.078.061L22.9 20z" fill="url(#d)" />
//     <path d="M27.029 24.132l-14.516 8.247a1.666 1.666 0 0 1-2 .011l-.075.075.074.072a1.665 1.665 0 0 0 2-.011l14.608-8.3z" style="isolation:isolate" opacity=".2" />
//     <path d="M10.435 32.318a2 2 0 0 1-.463-1.4v.146a2 2 0 0 0 .463 1.4l.075-.075zM32.015 21.3l-4.986 2.833.093.093 4.893-2.78A1.755 1.755 0 0 0 33.063 20a1.862 1.862 0 0 1-1.048 1.3z" style="isolation:isolate" opacity=".12" />
//     <path d="M12.513 7.623l19.5 11.08A1.861 1.861 0 0 1 33.063 20a1.754 1.754 0 0 0-1.048-1.444l-19.5-11.08c-1.4-.794-2.541-.135-2.541 1.466v.148c-.001-1.601 1.142-2.261 2.539-1.467z" style="isolation:isolate" opacity=".25" fill="#fff" />
//     </svg>
// `
//         },
//         multi: true
//     },
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
    {
        provide: SVG_ICON,
        useValue: {
            name: 'logo-medium',
            svgSource: '<svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" width="100%" height="100%" fit=""> ' +
                '<path d="M2,2v20h20V2H2z M18.6,6.7l-1.1,1c-0.1,0.1-0.1,0.2-0.1,0.3v7.6c0,0.1,0,0.2,0.1,0.3l1,1v0.2h-5.3V17l1.1-1.1' +
                'c0.1-0.1,0.1-0.1,0.1-0.3V9.5l-3,7.7h-0.4L7.6,9.5v5.1c0,0.2,0,0.4,0.2,0.6l1.4,1.7v0.2h-4v-0.2l1.4-1.7c0.2-0.2,0.2-0.4,0.2-0.6' +
                'V8.7c0-0.2,0-0.3-0.2-0.4L5.3,6.7V6.5h3.9l3,6.6l2.6-6.6h3.7V6.7z"/> ' +
                '</svg>'
        },
        multi: true
    },
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
    }
];
