export interface MenuItem {
    id:              string;
    name:            string;
    description:     string;
    imageUrl:        null | string;
    price:           number;
    menuId:          string;
    isEnabled:       boolean;
}