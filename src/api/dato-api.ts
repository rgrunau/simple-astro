export const getDatoCMSData = async (
  dataQuery: string,
  variables: object = {}
) => {
  const response = await fetch("https://graphql.datocms.com/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${import.meta.env.DATOCMS_API_KEY}`,
    },
    body: JSON.stringify({ query: dataQuery, variables }),
  });
  const json = await response.json();
  const data = json.data;
  const errors = json.errors;
  return data;
};
