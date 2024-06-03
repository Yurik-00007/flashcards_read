import type { Meta, StoryObj } from '@storybook/react'

import { TextField } from './'

const meta = {
  argTypes: {
    variant: {
      control: { type: 'radio' },
      options: ['primary', 'secondary', 'tertiary', 'link'],
    },
  },
  component: TextField,
  tags: ['autodocs'],
  title: 'Components/UI/TextField',
} satisfies Meta<typeof TextField>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    children: 'Primary TextField',
    disabled: false,
    variant: 'primary',
  },
}

export const Secondary: Story = {
  args: {
    children: 'Secondary TextField',
    disabled: false,
    variant: 'secondary',
  },
}

export const Tertiary: Story = {
  args: {
    children: 'Tertiary TextField',
    disabled: false,
    variant: 'tertiary',
  },
}

export const FullWidth: Story = {
  args: {
    children: 'Full Width Primary TextField',
    disabled: false,
    fullWidth: true,
    variant: 'primary',
  },
}
export const AsLink: Story = {
  args: {
    as: 'a',
    children: 'Link that looks like a button',
    variant: 'primary',
  },
}
export const Link: Story = {
  args: {
    as: 'a',
    children: 'Link that looks like a button',
    variant: 'link',
  },
}
