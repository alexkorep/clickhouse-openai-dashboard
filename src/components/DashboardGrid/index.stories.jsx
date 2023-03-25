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
Default.args = { imageSize: 320, numImages: 13 };
