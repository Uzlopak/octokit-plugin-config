import { Octokit } from "@octokit/core";

import { VERSION } from "./version";
import { composeConfigGet } from "./compose-config-get";
import * as Types from "./types";

/**
 * @param octokit Octokit instance
 */
export function config(octokit: Octokit): Types.API {
  return {
    config: {
      async get(options) {
        return composeConfigGet(octokit, options);
      },
    },
  };
}

config.VERSION = VERSION;

export { composeConfigGet } from "./compose-config-get";

export namespace createPullRequest {
  export type GetOptions<T extends Types.Configuration = Types.Configuration> =
    Types.GetOptions<T>;
  export type GetResult<T extends Types.Configuration = Types.Configuration> =
    Types.GetResult<T>;
  export type ConfigFile = Types.ConfigFile;
}
