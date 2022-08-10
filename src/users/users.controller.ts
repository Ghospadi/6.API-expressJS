import { NextFunction, Request, Response } from "express";
import { BaseController } from "../common/base.controller";
import { LoggerService } from "../logger/logger.service";

export class UserController extends BaseController {
  constructor(logger: LoggerService) {
    super(logger);
    this.bindRoutes([
      { path: "/register", method: "post", func: this.register },
      { path: "/login", method: "post", func: this.login },
    ]);
  }

  login(req: Request, resp: Response, next: NextFunction) {
    this.ok(resp, "login");
  }

  register(req: Request, resp: Response, next: NextFunction) {
    this.ok(resp, "register");
  }
}
