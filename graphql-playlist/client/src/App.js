import ApolloClient from 'apollo-boost';
import React from 'react';
import { ApolloProvider } from 'react-apollo';
import BookList from './components/BookList';
import AddBook from './components/AddBook';
const client =new ApolloClient({
  uri:'http://localhost:4000/graphql'
})

class App extends React.Component{
  render() {
    return (
      <ApolloProvider client={client}>
      <div className="App">
        <h1>贾晓乐的读书笔记</h1>
        <BookList/>
        <AddBook></AddBook>
      </div>
      </ApolloProvider>
    );
  }
}

export default App;
