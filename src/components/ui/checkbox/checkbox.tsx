import Check from '@/assets/icons/components-manual/check'
import { Typography } from '@/components/ui/typography'
import * as CheckboxRadix from '@radix-ui/react-checkbox'
import * as LabelRadix from '@radix-ui/react-label'
import clsx from 'clsx'

import s from './checkbox.module.scss'

export type CheckboxProps = {
  checked?: boolean
  className?: string
  disabled?: boolean
  id?: string
  label?: string
  onChange?: (checked: boolean) => void
  position?: 'left'
  required?: boolean
}

export const Checkbox = (props: CheckboxProps) => {
  const { checked, className, disabled, id, label, onChange, position, required } = props
  const classNameVar = {
    buttonWrapper: clsx(s.buttonWrapper, disabled && s.disabled),
    container: clsx(s.container, className),
    indicator: s.indicator,
    label: clsx(s.label, disabled && s.disabled, position === 'left' && s.left),
    root: s.root,
  }

  return (
    <div className={classNameVar.container}>
      <div className={classNameVar.buttonWrapper}>
        <CheckboxRadix.Root
          checked={checked}
          className={classNameVar.root}
          disabled={disabled}
          id={id}
          onCheckedChange={onChange}
          required={required}
        >
          {checked && (
            <CheckboxRadix.Indicator>
              <Check />
            </CheckboxRadix.Indicator>
          )}
        </CheckboxRadix.Root>
      </div>
      {label && (
        <LabelRadix.Root asChild>
          <Typography as={'div'} className={classNameVar.label} variant={'body2'}>
            {label}
          </Typography>
        </LabelRadix.Root>
      )}
    </div>
  )
}
