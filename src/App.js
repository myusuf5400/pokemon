import 'bootstrap/dist/css/bootstrap.css';
import {PokemonProvider} from "./PokemonContext";
import {ApolloClient, ApolloProvider, gql, InMemoryCache} from '@apollo/client';
import {useState} from "react";
import ListPokemon from "./components/ListPokemon";
import DetailPokemon from "./components/DetailPokemon";

function App() {
    const client = new ApolloClient({
        cache: new InMemoryCache(),
        uri: "https://graphql-pokeapi.vercel.app/api/graphql"
    });

    return (
        <ApolloProvider client={client}>
            <PokemonProvider>
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-md-3">
                            <ListPokemon/>
                        </div>
                        <div className="col-md-9">
                            <DetailPokemon/>
                        </div>
                    </div>
                </div>
            </PokemonProvider>
        </ApolloProvider>
    );
}

export default App;
