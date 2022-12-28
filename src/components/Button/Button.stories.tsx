import { Meta, StoryObj } from '@storybook/react';
import { ShoppingBagOpen } from 'phosphor-react';
import { Button, ButtonProps } from '.';

export default {
  title: 'Form/Button',
  component: Button,
  args: {
    children: 'Finalizar a compra',
  },
  decorators: [(Story) => {
    return (
      <div className="w-[400px]">
        {Story()}
      </div>
    )
  }]
} as Meta<ButtonProps>;

export const Default: StoryObj<ButtonProps> = {};

export const WithIcon: StoryObj<ButtonProps> = {
  args: {
    children: (
      <>
        <ShoppingBagOpen size={20} /> Adicionar ao carrinho
      </>
    ),
    className: 'bg-blue-700',
  },
};
