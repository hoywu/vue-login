import type { ToastServiceMethods } from "primevue/toastservice"

export function success(
    to: ToastServiceMethods,
    summary: string,
    detail: string,
    life: number = 5000,
) {
    to.add({ severity: 'success', summary, detail, life })
}

export function info(
    to: ToastServiceMethods,
    summary: string,
    detail: string,
    life: number = 5000,
) {
    to.add({ severity: 'info', summary, detail, life })
}

export function warn(
    to: ToastServiceMethods,
    summary: string,
    detail: string,
    life: number = 5000,
) {
    to.add({ severity: 'warn', summary, detail, life })
}

export function error(
    to: ToastServiceMethods,
    summary: string,
    detail: string,
    life: number = 5000,
) {
    to.add({ severity: 'error', summary, detail, life })
}

export function secondary(
    to: ToastServiceMethods,
    summary: string,
    detail: string,
    life: number = 5000,
) {
    to.add({ severity: 'secondary', summary, detail, life })
}

export function contrast(
    to: ToastServiceMethods,
    summary: string,
    detail: string,
    life: number = 5000,
) {
    to.add({ severity: 'contrast', summary, detail, life })
}
