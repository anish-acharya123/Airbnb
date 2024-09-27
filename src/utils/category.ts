export const fetchByCategory = async (category: any) => {
  console.log(category);
  const res = await fetch(
    `http://172.17.30.111:1337/api/rooms?populate=*&filters[category][name][$eq]=${category}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  const data = res.json();
  return data;
};
