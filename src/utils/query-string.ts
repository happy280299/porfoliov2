import qs from "query-string";
import { Anonymous } from "src/@types/common";

const arrayFormat = "none";

export const getQueryStringFromObj = (obj: Anonymous) =>
  qs.stringify(obj, { arrayFormat });
export const getQueryObjFromString = (queryString: string) =>
  qs.parse(queryString, { arrayFormat });
