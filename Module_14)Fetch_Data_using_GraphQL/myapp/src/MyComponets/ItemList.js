import { gql, useQuery } from "@apollo/client";

const GET_ITEMS = gql`
  query GetItems {
    items {
      id
      name
    }
  }
`;

const ItemList = () => {
  const { loading, error, data } = useQuery(GET_ITEMS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <ul>
      {data.items.map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
};

export default ItemList;