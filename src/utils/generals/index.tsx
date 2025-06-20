import { IMAGES } from '../../assets/images';

export const getStarType = (idx: number, rating: number) => {
  const full = idx + 1 <= Math.floor(rating);
  const half = rating > idx && rating < idx + 1;
  if (full) {
    return IMAGES.icon_star_filled_black;
  }
  if (half) {
    return IMAGES.icon_star_half_black;
  }
  return IMAGES.icon_star_empty_black;
};
