import { MenuItem } from "./menu-item.model";

export interface Menu {
    id:           string;
    name:         string;
    isFeatured:   boolean;
    restaurantId: string;
    restaurant:   null;
    menuItems:    MenuItem[];
}