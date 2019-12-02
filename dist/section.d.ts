interface ISection {
    id: string;
    label: string;
}
export declare function createSections(sections: {
    [n: string]: string;
}): ISection[];
export {};
