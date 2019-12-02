import {IPage} from './page';
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
  color?: EndpointColor
  pages: IPage[]
  sections?: string
}

export function createMenu(
  name: string,
  pages: IPage[],
  thumbnail?: string,
  tags?: string[],
  color?: EndpointColor,
  sections?: string,
): IMenu {
  const menu: IMenu = {
    name,
    pages,
    thumbnail,
    color,
    tags,
    sections
  }
  return menu;
}