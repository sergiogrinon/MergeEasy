import React from "react";
import { AppService } from "../../services/app.service";
import {
  provideFluentDesignSystem,
  fluentTextField,
  fluentButton,
} from "@fluentui/web-components";
import { provideReactWrapper } from "@microsoft/fast-react-wrapper";
import "./SearchRepository.styles.css";

const { wrap } = provideReactWrapper(React, provideFluentDesignSystem());

//Fluent components
export const FluentTextField = wrap(fluentTextField());
export const FluentButton = wrap(fluentButton());

function SearchRepository(): JSX.Element {
  const appService = new AppService();

  const fetchPullRequests = async (e: any) => {
    const response = await appService.getPullRequests();
    console.log(response);
  };

  return (
    <>
      <div id="search-box" className="searchBox">
        <h1>Find all your pull requests</h1>
        <FluentTextField className="textInput" />
        <FluentButton appearance="accent" onClick={fetchPullRequests}>
          Click Me
        </FluentButton>
      </div>
    </>
  );
}

export { SearchRepository };
