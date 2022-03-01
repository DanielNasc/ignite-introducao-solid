import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  handle(request: Request, response: Response): Response {
    const { user_id } = request.headers;

    if (Array.isArray(user_id)) {
      return response.status(404).json({ error: "X -> String[]  V -> String" });
    }

    try {
      const list = this.listAllUsersUseCase.execute({ user_id });
      return response.json(list);
    } catch (e) {
      return response.status(400).json({ error: e });
    }
  }
}

export { ListAllUsersController };
