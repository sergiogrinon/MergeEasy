import React from "react";
import { AppService } from "../../services/app.service";

function SearchRepository(): JSX.Element {
  const appService = new AppService();

  const fetchPullRequests = async (e: any) => {
    const response = await appService.getPullRequests();
    console.log(response);
  }

  return (
    <>
      <div>
        <button onClick={fetchPullRequests}>Click Me</button>
      </div>
    </>
  );
}

export { SearchRepository };
