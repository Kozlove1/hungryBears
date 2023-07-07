/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { create } from 'zustand';

interface BearState {
    hungryBears: number;
    feed: (food: number) => void;
    dontFeed: (food: number) => void;
}

export const useHungryBearsStore = create<BearState>()((set) => ({
    hungryBears: 0,
    feed: (food) => set((state) => ({ hungryBears: state.hungryBears + food })),
    dontFeed: (food) => set((state) => ({ hungryBears: state.hungryBears - food })),
}));
