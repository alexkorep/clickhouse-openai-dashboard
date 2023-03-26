// Button.stories.ts|tsx

import React from "react";

import DashboardGrid from ".";

export default {
  title: "DashboardGrid",
  component: DashboardGrid,
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => <DashboardGrid {...args} />;

export const Default = Template.bind({});
Default.args = {
  width: 320,
  children: [
    <img src={`https://picsum.photos/id/1/320`} />,
    <img src={`https://picsum.photos/id/2/320`} />,
  ],
};
