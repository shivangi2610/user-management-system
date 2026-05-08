import LoginForm from "./LoginForm";
import type { Meta, StoryObj } from "@storybook/react";
import { http, HttpResponse, delay } from "msw";

const meta: Meta<typeof LoginForm> = {
  title: "Components/LoginForm",
  component: LoginForm,
};

export default meta;

type Story = StoryObj<typeof LoginForm>;

const mockUser = {
  id: 1,
  username: "shivangi",
  email: "shivangi@gmail.com",
  token: "mock-jwt-token",
};

export const Default: Story = {
  args: {
    loading: false,
    onSubmit: async (data) => {
      console.log("Submitted Data:", data);
    },
  },
};

export const Loading: Story = {
  args: {
    loading: true,
    onSubmit: async () => {},
  },
};

export const LoginSuccess: Story = {
  parameters: {
    msw: {
      handlers: [
        http.post(
          "http://localhost:5000/api/auth/login",
          async ({ request }) => {
            await delay(1000);

            const body = (await request.json()) as {
              email: string;
              password: string;
            };

            if (
            body?.email === "s`Q2340-=hivangi@gmail.com" &&
              body?.password === "123456"
            ) {
              return HttpResponse.json(
                {
                  success: true,
                  message: "Login Successful",
                  user: mockUser,
                },
                {
                  status: 200,
                }
              );
            }

            return HttpResponse.json(
              {
                success: false,
                message: "Invalid Credentials",
              },
              {
                status: 401,
              }
            );
          }
        ),
      ],
    },
  },

  args: {
    loading: false,
    onSubmit: async (data) => {
      console.log("Login Attempt:", data);
    },
  },
};

export const InvalidCredentials: Story = {
  parameters: {
    msw: {
      handlers: [
        http.post(
          "http://localhost:5000/api/auth/login",
          async () => {
            await delay(1000);

            return HttpResponse.json(
              {
                success: false,
                message: "Invalid email or password",
              },
              {
                status: 401,
              }
            );
          }
        ),
      ],
    },
  },

  args: {
    loading: false,
    onSubmit: async (data) => {
      console.log("Invalid Login:", data);
    },
  },
};

export const ServerError: Story = {
  parameters: {
    msw: {
      handlers: [
        http.post(
          "http://localhost:5000/api/auth/login",
          async () => {
            await delay(1000);

            return HttpResponse.json(
              {
                message: "Internal Server Error",
              },
              {
                status: 500,
              }
            );
          }
        ),
      ],
    },
  },

  args: {
    loading: false,
    onSubmit: async (data) => {
      console.log("Server Error:", data);
    },
  },
};