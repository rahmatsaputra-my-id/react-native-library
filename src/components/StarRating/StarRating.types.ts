export type StarRatingProps = {
  rating?: number;
  maxStars?: number;
  starSize?: number;
  onRate?: (value: number) => void;
};