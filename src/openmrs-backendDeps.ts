import { openmrsFetch } from "@openmrs/esm-api";
import semver from "semver";

export function fetchBackendDeps() {
  return openmrsFetch(`/ws/rest/v1/module?v=custom:(uuid,version)`, {
    method: "GET"
  });
}

export const omodDeps = { formentryapp: "^1.5.2", reporting: "1.17.0" };

export function checkBackendDeps() {
  fetchBackendDeps().then(({ data }) => {
    let foundDependecies: any[] = [];
    for (let [key] of Object.entries(omodDeps)) {
      let found = false;
      data.results.map(element => {
        if (element.uuid === key) {
          found = true;
          foundDependecies.push(element);
        }
      });
      if (!found) {
        throw Error(`${key} backend end module not supported`);
      }
    }

    for (let [key, value] of Object.entries(omodDeps)) {
      foundDependecies.map(backEndDeps => {
        if (key === backEndDeps.uuid) {
          if (
            !semver.eq(semver.coerce(value), semver.coerce(backEndDeps.version))
          ) {
            throw Error(`version dont match for`);
          }
        }
      });
    }
  });
}
