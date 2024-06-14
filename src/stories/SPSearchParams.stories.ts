import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
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
    searchSiteUrl: 'https://collabittest.sharepoint.com/sites/hold/_layouts/15/search.aspx/siteall',
    searchQueryField: 'ContentTypeId',
    searchQueryValue: '0x0101009D1CB255DA76424F860D91F20E6C411800D8E0213A576B964CBACF7F1BD29E761C',
    searchplaceholder: 'keresés...' 
  },
} satisfies Meta<typeof SPSearchParams>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Search: Story = {
  args: {
    searchSiteUrl: 'https://collabittest.sharepoint.com/sites/hold/_layouts/15/search.aspx/siteall',
    searchQueryField: 'ContentTypeId',
    searchQueryValue: '0x0101009D1CB255DA76424F860D91F20E6C411800D8E0213A576B964CBACF7F1BD29E761C',
    searchplaceholder: 'keresés...' 
  },
};