import { ProductItemProps } from "../interfaces";

export const productsMenor = (productsA: ProductItemProps, productsB: ProductItemProps) => {
    if (productsA?.price < productsB?.price) {
        return -1;
        }
    if (productsA?.price > productsB?.price) {
        return 1;
    }
    return 0
}

export const productsMayor = (productsA: ProductItemProps, productsB: ProductItemProps) => {
    if (productsA?.price > productsB?.price) {
        return -1;
      }
      if (productsA?.price < productsB?.price) {
        return 1;
      }
      return 0;
}
