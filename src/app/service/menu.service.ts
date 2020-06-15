import { Injectable } from '@angular/core';

export enum MenuItemType {
  section = 'section',
  item = 'item'
}

export interface MenuSection {
  id: number;
  parent: number;
  color?: string;
  order: number;
  name: string;
  collapse: boolean;
  items?: MenuSection[];
  sections?: MenuSection[];
  sale?: number;
}

const initialMenu = [
  {
    items: [],
    name: 'Кофе на Молоке',
    id: 1,
    parent: 0,
    collapse: true,
    color: 'green',
    order: 1,
    sections: [
      {
        items: [
          {
            name: 'Капучино 250мл',
            sale: 60.0,
            id: 7
          },
          {
            name: 'Капучино 350мл',
            sale: 90.0,
            id: 8
          },
          {
            name: 'Капучино 450мл',
            sale: 120.0,
            id: 9
          }
        ],
        id: 3,
        parent: 1,
        name: 'Капучино',
        collapse: true,
        order: 1,
        sections: []
      },
      {
        items: [
          {
            name: 'Латте 250мл',
            sale: 60.0,
            id: 10
          },
          {
            name: 'Латте 350мл',
            sale: 90.0,
            id: 11
          },
          {
            name: 'Латте 450мл',
            sale: 120.0,
            id: 12
          }
        ],
        id: 4,
        parent: 1,
        collapse: true,
        order: 2,
        name: 'Латте',
        sections: []
      }
    ]
  },
  {
    items: [],
    name: 'Черный Кофе',
    id: 2,
    parent: 0,
    color: 'red',
    collapse: true,
    order: 2,
    sections: [
      {
        items: [
          {
            name: 'Американо 250мл',
            sale: 60.0,
            id: 13
          },
          {
            name: 'Американо 350мл',
            sale: 90.0,
            id: 14
          },
          {
            name: 'Американо 450мл',
            sale: 120.0,
            id: 15
          }
        ],
        id: 5,
        parent: 2,
        order: 1,
        name: 'Американо',
        sections: []
      },
      {
        items: [
          {
            name: 'Эспрессо ',
            sale: 50.0,
            id: 16
          }
        ],
        id: 6,
        parent: 2,
        order: 2,
        name: 'Эспрессо',
        sections: []
      }
    ]
  }
] as MenuSection[];

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  constructor() {}

  get() {
    return Promise.resolve(initialMenu);
  }
}

export const getType = (item: MenuSection) => (item?.sale ? MenuItemType.item : MenuItemType.section);

export function findById(items: MenuSection[], id: number) {
  const item = items?.find(x => x.id === id);
  if (!item && items?.length) {
    for (let i = 0; i < items.length; i++) {
      return findById(items[i]?.items, id) ?? findById(items[i]?.sections, id);
    }
  }
  return item;
}
