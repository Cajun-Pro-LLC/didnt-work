
export const sanitizeProblem = (value: string | string[]) => {
  let problem;
  if (Array.isArray(value)) {
    problem = value[0] || "";
  } else {
    problem = value || "";
  }

  problem = problem
    // Replace all non-ascii characters
    .replace(/[^\x00-\x7F]/g, "")
    // replace all whitespace with a single space
    .replace(/\s+/g, " ")
    // replace all non-alphanumeric characters with a single space
    .replace(/[^a-zA-Z0-9-']/g, " ")
    // remove leading and trailing whitespace
    .trim()
    // sanitize screaming
    .toLowerCase();

  return problem.length > 0 ? problem.replace(/^./, problem[0].toUpperCase()) : "";
}
