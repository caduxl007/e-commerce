import { Meta, StoryObj } from "@storybook/react";
import { Product, ProductProps } from ".";

export default {
  title: 'Cards/Product',
  component: Product,
  args: {}
} as Meta<ProductProps>

export const Default: StoryObj<ProductProps> = {
  args: {
    imageUrl: 'https://github.com/caduxl007.png',
    name: 'Novo produto',
    price: 10
  }
}