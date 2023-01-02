import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Button } from "./Button";

export default {
  title: "Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    skeleton: {
      defaultValue: false,
      type: "boolean",
    },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => (
  <Button {...args}>Button</Button>
);

export const Primary = Template.bind({});
Primary.args = {
  intent: "primary",
  size: "medium",
  skeleton: true,
};
export const Secondary = Template.bind({});
Secondary.args = {
  intent: "secondary",
  size: "medium",
};
export const Tertiary = Template.bind({});
Tertiary.args = {
  intent: "tertiary",
  size: "medium",
};
export const Ghost = Template.bind({});
Ghost.args = {
  intent: "ghost",
  size: "medium",
};
export const Danger = Template.bind({});
Danger.args = {
  intent: "danger",
  size: "medium",
};
