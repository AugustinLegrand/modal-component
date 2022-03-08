export enum Color {
    BLUE = "",
    GRAY = "",
    RED = "",
    DARKRED = "",
    DARKBLUE = ""
}

interface ModalColorInterface {
    content: Color,
    border: Color
}

export interface ModalInterface {
    message: string,
    color: ModalColorInterface
}