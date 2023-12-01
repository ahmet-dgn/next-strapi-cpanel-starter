// Desc: graphql request for puling data from crm.medicomyazilim.com

export default async function graphqlRequest(query) {
  const url = "https://crm.medicomyazilim.com/graphql";
  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(query),
  });
  const resjson = await res.json();
  return resjson;
}
