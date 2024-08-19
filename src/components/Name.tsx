// This is the first component.

// data fetching
async function fetchData({url}:{url: string}) {
  const response = await fetch(url, { cache: "no-store" });
  const data = await response.json();

  // This simulates a long-running data fetch that lasts 3 seconds
  await new Promise(resolve => setTimeout(resolve, 3000));

  return data;
}

export default async function Data({API_URL}:{API_URL: string}) {
  const data = await fetchData({url: API_URL});

  // when the data is ready, shows it. THIS WILL REPLACE THE SKELETON
  return <h2 className='h-[38px]'>{data.name}</h2>;
}