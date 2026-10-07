export default function Child({ data }) {
  return (
    <div>
      <p>Name: {data.name}</p>
      <p>University: {data.University}</p>
      <p>City: {data.city}</p>
      <p>Department: {data.dep}</p>
    </div>
  );
}