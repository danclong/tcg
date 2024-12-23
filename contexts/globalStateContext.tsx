"use client";

import { createContext, useState } from 'react';

export const GlobalStateContext = createContext({
    collectionId: '',
    setCollectionId: (collectionId: string) => {},
    pickedCards: [] as Array<any>,
    setPickedCards: (pickedCards: Array<any>) => {},
    packType: '',
    setPackType: (packType: string) => {},
    newCards: [] as Array<any>,
    setNewCards: (newCards: Array<any>) => {},
});

export const GlobalStateProvider = ({ children }: { children: React.ReactNode }) => {
    const [collectionId, setCollectionId] = useState('');
    const [pickedCards, setPickedCards] = useState<any[]>([]);
    const [packType, setPackType] = useState('');
    const [newCards, setNewCards] = useState<any[]>([]);

    return <GlobalStateContext.Provider value={{
        collectionId,
        setCollectionId,
        pickedCards,
        setPickedCards,
        packType,
        setPackType,
        newCards,
        setNewCards,
    }}>{children}</GlobalStateContext.Provider>;
};