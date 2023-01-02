import { ComponentMeta, ComponentStory } from "@storybook/react";
import NavBar from "./NavBar";

export default {
  title: "NavBar",
  component: NavBar,
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof NavBar>;

const Template: ComponentStory<typeof NavBar> = (args) => <NavBar {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
