import * as endpoints from "../data/endpoints";

export class AppService {
  public async getPullRequests(): Promise<any> {
    const response = await fetch(endpoints.default.GET_PULL_REQUESTS);
    return await response.json();
  }

  public async getComments(): Promise<any> {
    const response = await fetch(endpoints.default.GET_COMMENTS);
    return await response.json();
  }

  public async updateComment(user: any) {
    const response = await fetch(endpoints.default.UPDATE_COMMENT, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ user }),
    });
    return await response.json();
  }

  public async createComment(user: any) {
    const response = await fetch(endpoints.default.CREATE_COMMENT, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ user }),
    });
    return await response.json();
  }
}