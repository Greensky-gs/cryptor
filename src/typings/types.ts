export type CaesarTypes = {
    input: string;
    gap: number;
    sens?: 'reversed' | 'alphabetic'
}
export type VigenereTypes = {
    input: string;
    key: string;
}