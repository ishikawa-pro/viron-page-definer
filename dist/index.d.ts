import { IEndpoint, EndpointColor } from './endpoint';
import { theme } from './theme';
import { IPage } from './page';
import { ISection } from './section';
export { theme };
interface IVironDefinition extends IEndpoint {
    theme?: theme;
    pages: IPage[];
    sections?: ISection[];
}
export declare class VironDefinition implements IVironDefinition {
    theme?: theme;
    pages: IPage[];
    sections?: ISection[];
    name: string;
    thumbnail?: string;
    tags?: string[];
    color?: EndpointColor;
    constructor(endpoint: IEndpoint, pages: IPage[], sections?: ISection[], themeColor?: theme);
}
