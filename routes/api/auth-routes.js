import express from "express";

import authController from "../../controllers/auth-controller.js";

import usersSchemas from "../../schemas/users-schemas.js";

import { validateBody } from "../../decorators/index.js";
import authenticate from "../../middlewares/authenticate.js";

const authRouter = express.Router();

authRouter.post(
  "/register",
  validateBody(usersSchemas.userSignupSchema),
  authController.signup
);

authRouter.post(
  "/login",
  validateBody(usersSchemas.userSigninSchema),
  authController.signin
);

authRouter.get("/current", authenticate, authController.getCurrent);

authRouter.post("/logout", authenticate, authController.logout);
authRouter.patch(
  "/",
  authenticate,
  validateBody(usersSchemas.subscriptionSchema),
  authController.updateSubscription
);

export default authRouter;
