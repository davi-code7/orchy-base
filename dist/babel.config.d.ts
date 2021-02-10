export const presets: (string | (string | {
    targets: {
        node: string;
    };
})[])[];
export const plugins: (string | {
    alias: {
        '@config': string;
        '@controllers': string;
        '@database': string;
        '@interfaces': string;
        '@middlewares': string;
        '@models': string;
        '@routes': string;
        '@utils': string;
    };
})[][];
