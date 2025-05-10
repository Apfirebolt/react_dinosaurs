import { atom } from 'jotai';

export interface Dinosaur {
    Name: string;
    Description: string;
}

const dinosaursAtom = atom<Dinosaur[]>([]);

export { dinosaursAtom };