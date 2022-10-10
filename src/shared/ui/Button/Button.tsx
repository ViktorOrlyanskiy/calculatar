import { ButtonHTMLAttributes, FC } from "react";
import { classNames } from "shared/lib";
import cls from "./Button.module.scss";

export enum ButtonTheme {
    CLEAR_INVERTED = "clearInverted",
    OUTLINE = "outline",
    OUTLINE_INVERTED = "outlineInverted",
    BACKGROUND = "background",
    BACKGROUND_INVERTED = "backgroundInverted",
}
export enum ButtonSize {
    M = "size_m",
    L = "size_l",
    XL = "size_xl",
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: ButtonTheme;
    square?: boolean;
    size?: ButtonSize;
}

export const Button: FC<ButtonProps> = (props) => {
    const {
        className,
        theme,
        children,
        square,
        size = ButtonSize.M,
        ...otherProps
    } = props;

    return (
        <button
            type="button"
            className={classNames(cls.Button, { [cls.square]: square }, [
                className,
                cls[theme],
                cls[size],
            ])}
            {...otherProps}
        >
            {children}
        </button>
    );
};