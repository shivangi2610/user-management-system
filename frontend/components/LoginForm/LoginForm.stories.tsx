import LoginForm from "./LoginForm";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof LoginForm> = {
  title: "Components/LoginForm",
  component: LoginForm,
};

export default meta;

type Story = StoryObj<typeof LoginForm>;

export const Default: Story = {
  args: {
    loading: false,
    onSubmit: (data: any) => {
      console.log("Submit:", data);
    },
  },
};

export const Loading: Story = {
  args: {
    loading: true,
    onSubmit: () => {},
  },
};