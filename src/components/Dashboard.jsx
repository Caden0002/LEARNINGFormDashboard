import { useState, useEffect } from "react";

export default function Dashboard() {
  const apiURL = import.meta.env.VITE_API_URL;

  const [data, setData] = useState([]);
  const fetchData = async () => {
    const res = await fetch(`${apiURL}/api/form`);
    const data = await res.json();
    setData(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div>Dashboard</div>
      {data &&
        data.map((d) => (
          <div className="mb-4" key={d._id}>
            <div>Name: {d.name}</div>
            <div>Email: {d.email}</div>
            <div>Message: {d.message}</div>
          </div>
        ))}
    </>
  );
}
