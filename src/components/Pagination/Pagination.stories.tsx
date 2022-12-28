import { Meta, StoryObj } from "@storybook/react";
import { Pagination, PaginationProps } from ".";

export default {
  title: 'Pagination',
  component: Pagination,
  args: {
    totalPages: 10,
    pageSelected: 1,
  }
} as Meta<PaginationProps>

export const Default: StoryObj = {}