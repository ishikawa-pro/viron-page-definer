import {IPage} from './page';
import {theme} from './theme';
export enum EndpointColor {
  purple ='purple',
  blue = 'blue',
  green = 'green',
  yellow = 'yellow',
  red = 'red',
  gray = 'gray',
  black = 'black',
  white = 'white'
}

interface IMenu {
  name: string
  thumbnail?: string
  tags?: string[]
  theme?: theme
  color?: EndpointColor
  pages: IPage[]
  sections?: string
}

export function createMenu(
  name: string,
  pages: IPage[],
  thumbnail?: string,
  tags?: string[],
  theme?: theme,
  color?: EndpointColor,
  sections?: string,
): IMenu {
  return {
    name,
    pages,
    thumbnail,
    theme,
    color,
    tags,
    sections
  };
}