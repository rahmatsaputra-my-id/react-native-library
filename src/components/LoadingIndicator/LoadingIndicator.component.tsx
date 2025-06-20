import { ActivityIndicator, Modal, View } from 'react-native';
import { styles } from './LoadingIndicator.style';

const LoadingIndicator: React.FC = () => (
  <Modal transparent={true} visible={true}>
    <View style={styles.container}>
      <View style={styles.card}>
        <ActivityIndicator />
      </View>
    </View>
  </Modal>
);

export { LoadingIndicator };
