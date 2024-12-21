"use client";

import { createContext, useState } from 'react';

export const GlobalStateContext = createContext({
    collectionId: '',
    setCollectionId: (collectionId: string) => {},
    pickedCards: [] as Array<any>,
    setPickedCards: (pickedCards: Array<any>) => {},
});

export const GlobalStateProvider = ({ children }: { children: React.ReactNode }) => {
    const [collectionId, setCollectionId] = useState('');
    const [pickedCards, setPickedCards] = useState<any[]>([]);

    return <GlobalStateContext.Provider value={{
        collectionId,
        setCollectionId,
        pickedCards,
        setPickedCards,
    }}>{children}</GlobalStateContext.Provider>;
};