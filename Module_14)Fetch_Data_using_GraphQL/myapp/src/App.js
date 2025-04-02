import logo from './logo.svg';
import './App.css';
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import ItemForm from './MyComponets/ItemForm';
import ItemList from './MyComponets/ItemList';


const client = new ApolloCliecdcdnt({
  uri: "https://graphqlzero.almansi.me/api", 
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
    <div className="app">
      <h1>GraphQL CRUD App</h1>
      <ItemForm/>
      <ItemList/>
    </div>
  </ApolloProvider>
  );
}

export default App;
