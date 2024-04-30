import { Image, Pressable, Text, TouchableOpacity, View } from 'react-native';
import { MaterialIcons, Feather } from '@expo/vector-icons';
import { styles } from './styles';

interface Props {
	value: string;
	isChecked?: boolean;
	onChecked: () => void;
	onRemove: () => void;
}

export function Task({ value, isChecked = false, onChecked, onRemove }: Props) {
	return (
		<View style={!isChecked ? styles.container : styles.containerChecked}>
			<TouchableOpacity
				style={styles.task}
				onPress={onChecked}
				activeOpacity={1}
			>
				{isChecked ? (
					<MaterialIcons
						name='check-circle'
						size={18}
						color={'#5E60CE'}
					/>
				) : (
					<Feather
						name='circle'
						size={18}
						color={'#4EA8DE'}
					/>
				)}

				{!isChecked ? (
					<Text style={styles.taskText}>{value}</Text>
				) : (
					<Text style={styles.taskTextChecked}>{value}</Text>
				)}
			</TouchableOpacity>

			<TouchableOpacity
				style={styles.deleteButton}
				onPress={onRemove}
			>
				<Feather
					name='trash-2'
					size={14}
					color={'#808080'}
				/>
			</TouchableOpacity>
		</View>
	);
}
