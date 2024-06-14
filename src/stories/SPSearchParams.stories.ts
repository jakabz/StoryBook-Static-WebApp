import type { Meta, StoryObj } from '@storybook/react';
import { SPSearchParams } from '../components/SPSearchParams/SPSearchParams';

const meta = {
  title: 'CollabIT/SPSearchParams',
  component: SPSearchParams,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {
    searchSiteUrl: '',
    searchQueryField:' ',
    searchQueryValue: '',
    searchplaceholder: 'keresés...',
  }
} satisfies Meta<typeof SPSearchParams>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Search: Story = {
  args: {
    searchSiteUrl: '',
    searchQueryField:'',
    searchQueryValue: '',
    searchplaceholder: 'keresés...',
  },
};
