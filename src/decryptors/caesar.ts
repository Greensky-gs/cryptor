import { CaesarTypes } from "../typings/types";
import inputLetters from "../utils/inputLetters";
import { IsValidInput } from "../utils/utils";

export default function caesarCryptor({ input, sens = 'alphabetic', gap }: CaesarTypes): string {
    if (!IsValidInput(input)) {
        throw new Error('This is not a valid input');
    }

    let crypted = '';
    for (const ch of input) {
        let cr: string;
        const initialPosition = inputLetters.indexOf(ch);

        if (sens === 'reversed') {
            cr = inputLetters[initialPosition + gap];
            if (!cr) cr = inputLetters[inputLetters.length - (initialPosition + gap)];
        } else {
            cr = inputLetters[initialPosition - gap];
            if (!cr) cr = inputLetters[inputLetters.length - (initialPosition - gap) - 1];
        }
        crypted += cr;
    }
    return crypted;
}