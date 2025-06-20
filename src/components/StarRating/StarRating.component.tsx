import { getStarType } from '../../utils/generals';
import { styles } from './StarRating.style';
import { View, TouchableOpacity, Image } from 'react-native';
import type { StarRatingProps } from './StarRating.types';

const StarRating: React.FC<StarRatingProps> = ({
  rating = 0,
  maxStars = 5,
  starSize = 32,
  onRate = () => {},
}) => {
  const handlePress = (value: number): void => {
    onRate(value);
  };

  return (
    <View style={styles.row}>
      {Array.from({ length: maxStars }).map((_, idx) => (
        <TouchableOpacity
          key={idx}
          onPress={() => handlePress(idx + 1)}
          activeOpacity={0.7}
        >
          <Image
            style={[styles.star, { height: starSize, width: starSize }]}
            source={getStarType(idx, rating)}
          />
        </TouchableOpacity>
      ))}
    </View>
  );
};

export { StarRating };
