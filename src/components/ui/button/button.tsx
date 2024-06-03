import { ComponentPropsWithoutRef, ElementType } from 'react'

import clsx from 'clsx'

import s from './button.module.scss'

export type ButtonProps<T extends ElementType = 'button'> = {
  as?: T
  className?: string
  fullWidth?: boolean
  variant?: 'icon' | 'link' | 'primary' | 'secondary' | 'tertiary'
} & ComponentPropsWithoutRef<T>

/*
export const TextField = ({
  as: Component = 'button',
  className,
  fullWidth,
  variant = 'primary',
  ...rest
}: ButtonProps) => {
*/
export const Button = <T extends ElementType = 'button'>(props: ButtonProps<T>) => {
  const {
    as: Component = 'button',
    className,
    fullWidth: fullWidth,
    variant = 'primary',
    ...rest
  } = props
  const classNameVar = clsx(s.button, s[variant], fullWidth && s.fullWidth, className)

  // const Component = as || 'button';
  return (
    <Component
      // className={`${s.button} ${s[variant]} ${fullWidth ? s.fullWidth : ''} ${className}`}
      className={classNameVar}
      {...rest}
    />
  )
}
