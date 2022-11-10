import inpChars from "./inputLetters"

export const IsValidInput = (input: string): boolean => {
    let valid = true;
    for (const ch of input) {
        if (!inpChars.includes(ch)) valid = false;
    }

    return valid;
}