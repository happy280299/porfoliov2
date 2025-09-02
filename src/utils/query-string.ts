import qs from "query-string";

const arrayFormat = "none";

export const getQueryStringFromObj = (obj: Anonymous) =>
  qs.stringify(obj, { arrayFormat });
export const getQueryObjFromString = (queryString: string) =>
  qs.parse(queryString, { arrayFormat });
