import React, {useContext} from "react";
import {gql, useQuery} from '@apollo/client';
import PokemonContext from "../PokemonContext";

const ListPokemon = () => {
    const {setSelectedName} = useContext(PokemonContext);

    const GET_POKEMON = gql`
        query pokemons($limit: Int, $offset: Int) {
            pokemons(limit: $limit, offset: $offset) {
                count
                next
                previous
                status
                message
                results {
                    name
                }
            }
        }
    `;

    const {loading, error, data} = useQuery(GET_POKEMON, {
        variables: {
            limit: 10
        },
    });

    const listData = data?.pokemons.results.map((value) => {
        return <button key={value.name} onClick={() => setSelectedName(value.name)}
                       className="list-group-item list-group-item-action text-capitalize">{value.name}</button>
    })

    return (
        <>
            <h4 className="text-capitalize">Detail Pokemon</h4>
            <ul className="list-group">{listData}</ul>
        </>
    )
}

export default ListPokemon;