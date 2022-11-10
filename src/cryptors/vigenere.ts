import { VigenereTypes } from "../typings/types";
import inputLetters from "../utils/inputLetters";
import { IsValidInput } from "../utils/utils";

class VigenereCrypt {
    private readonly code: boolean;
    private readonly key: string;
    private readonly letters: string = inputLetters;
    private text: string;
    private result: string = '';

    constructor(text: string, key: string, action: 'decode' | 'code') {
        this.text = text;
        this.key = key;
        this.code = action == "decode" ? false : true;
    };
    public get crypted(): string {
        if (!IsValidInput(this.text)) {
            throw new Error('This is not a valid input');
        }
        let key = 0;

        for (let i = 0; i < this.text.length; i++) {
            let letterIndex = this.letters.indexOf(this.text[i]);
            let keyIndex = this.letters.indexOf(this.key[key]);

            key++;
            if (key > this.key.length) key = 0;

            let combine = this.code == true ? letterIndex + keyIndex : letterIndex - keyIndex;

            let letter;
            
            if (combine > this.letters.length - 1) {
                letter = (this.letters + this.letters)[combine];
            } else if (combine < 0) {
                combine = this.letters.length - Math.abs(combine);
                letter = this.letters[combine];
            } else {
                letter = this.letters[combine];
            };

            this.result+=letter;
        };

        return this.result;
    }
};

export const VigenereCryptor = ({ input, key }: VigenereTypes): string => {
    const crp = new VigenereCrypt(input, key, 'code').crypted;
    return crp;
}
export const VigenereDecryptor = ({ input, key }: VigenereTypes): string => {
    return new VigenereCrypt(input, key, 'decode').crypted;
}