import { ComponentPropsWithoutRef, ElementType } from 'react'

import clsx from 'clsx'

import s from './text-field.module.scss'

export type TextFieldProps<T extends ElementType = 'input'> = {
  as?: T
  errorMessage?: string
  label?: string
  variant?: 'icon' | 'link' | 'primary' | 'secondary' | 'tertiary'
} & ComponentPropsWithoutRef<T>

export const TextField = <T extends ElementType = 'button'>(props: ButtonProps<T>) => {
  const {
    as: Component = 'button',
    className,
    fullWidth: fullWidth,
    variant = 'primary',
    ...rest
  } = props
  const classNameVar = clsx(s.button, s[variant], fullWidth && s.fullWidth, className)

  return <Component className={classNameVar} {...rest} />
}
