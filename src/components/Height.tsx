// This is the second component.

// data fetching
async function fetchData() {
  const API_URL = 'https://swapi.dev/api/people/2';

  const response = await fetch(API_URL, { cache: "no-store" });
  const data = await response.json();

  // This simulates a long-running data fetch that takes 1 second
  await new Promise(resolve => setTimeout(resolve, 1000));

  return data;
}

export default async function Data() {
  const data = await fetchData();

  // when the data is ready, shows it. THIS WILL REPLACE THE SKELETON
  return <h2>{data.height}</h2>;
}