import type { Meta, StoryObj } from '@storybook/react'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card/card'
import { Typography } from '@/components/ui/typography'

const meta = {
  component: Card,
  tags: ['autodocs'],
  title: 'Components/UI/Card',
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: <Typography variant={'h1'}>Card</Typography>,
    style: {
      height: '552px',
      padding: '24px',
      width: '420px',
    },
  },
}
export const ExampleWithContent: Story = {
  args: {
    children: (
      <>
        <Typography variant={'h1'}>Card</Typography>
        <Button as={'a'} href={'https://google.com'} target={'_blank'} variant={'primary'}>
          Google
        </Button>
      </>
    ),
    style: {
      height: '552px',
      padding: '24px',
      width: '420px',
    },
  },
}
