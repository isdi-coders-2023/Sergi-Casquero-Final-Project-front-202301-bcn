import { rest } from "msw";

const routes = { user: "/user", login: "/login" };

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
];
