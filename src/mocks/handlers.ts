import { rest } from "msw";

const routes = { user: "/user", login: "/login", register: "/register" };

const apiUrl = process.env.REACT_APP_API_URL!;

export const handlers = [
  rest.post(`${apiUrl}${routes.user}${routes.login}`, async (req, res, ctx) => {
    return res(
      ctx.status(200),

      ctx.json({
        token: "mockedToken",
      })
    );
  }),

  rest.post(
    `${apiUrl}${routes.user}${routes.register}`,
    async (req, res, ctx) => {
      return res(ctx.status(201));
    }
  ),
];

export const errorHandlers = [
  rest.post(`${apiUrl}${routes.user}${routes.login}`, async (req, res, ctx) => {
    return res(ctx.status(401));
  }),

  rest.post(
    `${apiUrl}${routes.user}${routes.register}`,
    async (req, res, ctx) => {
      return res(ctx.status(401));
    }
  ),
];
