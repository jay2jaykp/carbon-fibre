import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Button } from "../button/Button";

import { ButtonSet } from "./ButtonSet";
import { Primary, Secondary } from "../button/Button.stories";

export default {
  title: "ButtonSet",
  component: ButtonSet,
  subcomponents: {
    Button,
  },
  parameters: {
    layout: "centered",
  },
} as ComponentMeta<typeof ButtonSet>;

Primary.args = {
  ...Primary.args,
  skeleton: false,
};

export const Original: ComponentStory<typeof ButtonSet> = (args) => (
  <ButtonSet {...args}>
    <Button {...Primary.args}>Hello</Button>
    <Button {...Secondary.args}>Hello</Button>
  </ButtonSet>
);
