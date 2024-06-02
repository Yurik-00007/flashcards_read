import { ComponentPropsWithoutRef, forwardRef } from 'react'

import clsx from 'clsx'

import s from './card.module.scss'

export type CardProps = {} & ComponentPropsWithoutRef<'div'>

export const Card = forwardRef<HTMLDivElement, CardProps>((props, ref) => {
  const { className, ...rest } = props
  const classNameVar = clsx(s.root, className)

  return <div className={classNameVar} ref={ref} {...rest} />
})
