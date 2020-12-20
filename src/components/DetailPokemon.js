import React from "react";
import PokemonContext from "../PokemonContext";
import {useContext, useEffect, useState} from "react";
import {gql, useLazyQuery, useQuery} from "@apollo/client";

const DetailPokemon = () => {
    const {selectedName} = useContext(PokemonContext);
    const [pokemon, setPokemon] = useState({
        name: "Pikachu",
        sprites: {
            "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
            "back_default": ""
        }
    });

    const GET_POKEMON = gql`
        query pokemon($name: String!){
            pokemon(name: $name){
                name
                sprites{
                    front_default
                }
            }
        }
    `;

    const {loading, error, data} = useQuery(GET_POKEMON, {
        variables: {
            name: selectedName
        },
        onCompleted: function (value) {
            setPokemon(value.pokemon)
        },
        skip: !selectedName
    });

    return (
        <div className="container">
            <h4 className="text-capitalize">Detail Pokemon</h4>
            <div className="row">
                <div className="col-md-4">
                    <img src={pokemon.sprites.front_default} className="img-thumbnail" alt="Front default"/>
                </div>
                <div className="col-md-8">
                    <h5 className="text-capitalize">{pokemon.name}</h5>
                </div>
            </div>
        </div>
    )
}
export default DetailPokemon;