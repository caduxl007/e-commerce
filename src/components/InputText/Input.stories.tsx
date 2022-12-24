import { Meta, StoryObj } from '@storybook/react';
import { InputText, InputTextProps } from '.';

export default {
  title: 'Form/Input Text',
  component: InputText,
  args: {
    placeholder: 'Procurando por algo específico?'
  },
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
  },
} as Meta<InputTextProps>;

export const Default: StoryObj<InputTextProps> = {}
