import { Meta, StoryObj } from '@storybook/react';
import { Header } from '.';

export default {
  tile: 'Header',
  component: Header,
  args: {},
  argTypes: {},
  decorators: [
    (Story) => {
      return (
        <div className="bg-slate-50">
          {Story()}
        </div>
      )
    }
  ]
} as Meta;

export const Default: StoryObj = {};
