import { trigger, state, style, transition, animate, keyframes } from '@angular/core';
export function route() {
    return trigger('routeAnimation', [
        state('*', style({ opacity: 1 })),
        transition('void => *', [
            animate(500, keyframes([
                style({ opacity: 0, offset: 0 }),
                style({ opacity: 1, offset: 1.0 })
            ]))
        ]),
        transition('* => void', [
            animate(500, keyframes([
                style({ opacity: 1, offset: 0 }),
                style({ opacity: 0, offset: 1.0 })
            ]))
        ])
    ]);
}
export function fade() {
    return trigger('routeAnimation', [
        state('*', style({ opacity: 1 })),
        transition('void => *', [
            animate(500, keyframes([
                style({ opacity: 0, offset: 0 }),
                style({ opacity: 1, offset: 1.0 })
            ]))
        ]),
        transition('* => void', [
            animate(500, keyframes([
                style({ opacity: 1, offset: 0 }),
                style({ opacity: 0, offset: 1.0 })
            ]))
        ])
    ]);
}
export function slide() {
    return trigger('slide', [
        state('*', style({ transform: 'translateX(0)' })),
        transition('void => *', [
            animate(300, keyframes([
                style({ opacity: 0, transform: 'translateX(-100%)', offset: 0 }),
                style({ opacity: 1, transform: 'translateX(0)', offset: 1.0 })
            ]))
        ]),
        transition('* => void', [
            animate(300, keyframes([
                style({ opacity: 1, transform: 'translateX(0)', offset: 0 }),
                style({ opacity: 0, transform: 'translateX(100%)', offset: 1.0 })
            ]))
        ])
    ]);
}
