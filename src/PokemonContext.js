import React, {useState} from 'react';

const PokemonContext = React.createContext()

export const PokemonProvider = ({children}) => {
    const [selectedName, setSelectedName] = useState(null);

    const value = {
        selectedName,
        setSelectedName
    };
    return (
        <PokemonContext.Provider value={value}>{children}</PokemonContext.Provider>
    );
};

export default PokemonContext;