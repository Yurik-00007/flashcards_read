import { useState } from 'react'

import { Checkbox } from '@/components/ui/checkbox/checkbox'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  component: Checkbox,
  tags: ['autodocs'],
  title: 'Components/UI/Checkbox',
} satisfies Meta<typeof Checkbox>

export default meta

type Story = StoryObj<typeof meta>

export const Unchecked: Story = {
  args: {
    checked: false,
    label: 'Chech box',
  },
}

export const Checked: Story = {
  args: {
    checked: true,
    label: 'Chech box',
  },
}

export const DisabledChecked: Story = {
  args: {
    checked: true,
    disabled: true,
    label: 'Chech box',
  },
}

export const DisabledUnchecked: Story = {
  args: {
    checked: false,
    disabled: true,
    label: 'Chech box',
  },
}

export const Controlled: Story = {
  args: {
    checked: false,
    label: 'Chech box',
  },
  render: args => {
    const [checked, setChecked] = useState(false)

    return (
      <>
        <Checkbox {...args} checked={checked} onChange={() => setChecked(!checked)} />
        Current value: {checked.toString()}
      </>
    )
  },
}
