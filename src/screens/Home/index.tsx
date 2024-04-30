import {
	Alert,
	FlatList,
	Image,
	Text,
	TextInput,
	TouchableOpacity,
	View,
} from 'react-native';
import { styles } from './styles';
import { MaterialIcons } from '@expo/vector-icons';
import { useState } from 'react';
import { Task } from '../../components/Task';

interface Task {
	data: string;
	isChecked: boolean;
}

export function Home() {
	const [tasks, setTasks] = useState<Task[]>([]);
	const [taskData, setTaskData] = useState('');
	const [tasksCreated, setTaskCreated] = useState(0);
	const [tasksFinished, setTaskFinished] = useState(0);

	function handleTaskAdd() {
		setTasks(prevState => [...prevState, { data: taskData, isChecked: false }]);
		setTaskData('');
		setTaskCreated(prevState => prevState + 1);
	}

	function handleTaskCheck(index: number) {
		setTasks(prevState => {
			const updatedTasks = [...prevState];
			updatedTasks[index].isChecked = !updatedTasks[index].isChecked;
			return updatedTasks;
		});

		setTaskFinished(tasks.filter(item => item.isChecked === true).length);
	}

	function handleTaskRemove(data: string) {
		Alert.alert('Confirmar', 'Tem certeza que deseja excluir essa tarefa?', [
			{
				text: 'Sim',
				onPress: () => {
					setTasks(prevState => {
						const updatedTasks = prevState.filter(task => task.data !== data);
						const finishedTasks = updatedTasks.filter(
							item => item.isChecked === true,
						).length;

						setTaskFinished(finishedTasks);

						return updatedTasks;
					});
					setTaskCreated(prevState => prevState - 1);
				},
			},
			{
				text: 'Não',
				style: 'cancel',
			},
		]);
	}

	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<Image
					style={styles.logo}
					source={require('../../assets/img/logo.png')}
				/>
			</View>

			<View style={styles.form}>
				<View style={styles.inputContainer}>
					<TextInput
						style={styles.input}
						placeholder='Adicione uma nova tarefa'
						placeholderTextColor={'#808080'}
						onChangeText={setTaskData}
						value={taskData}
					/>

					<TouchableOpacity
						style={styles.button}
						activeOpacity={0.7}
						onPress={handleTaskAdd}
					>
						<MaterialIcons
							name='add-circle-outline'
							size={18}
							color={'#F2F2F2'}
						/>
					</TouchableOpacity>
				</View>

				<View style={styles.countContainer}>
					<View style={styles.createdCount}>
						<Text style={styles.createdCountTextLegend}>Criadas</Text>
						<Text style={styles.createdCountText}>{tasksCreated}</Text>
					</View>

					<View style={styles.concludedCount}>
						<Text style={styles.concludedCountTextLegend}>Concluídas</Text>
						<Text style={styles.concludedCountText}>{tasksFinished}</Text>
					</View>
				</View>

				<FlatList
					data={tasks}
					keyExtractor={task => task.data}
					renderItem={({ item, index }) => (
						<Task
							key={item.data}
							value={item.data}
							isChecked={item.isChecked}
							onChecked={() => handleTaskCheck(index)}
							onRemove={() => handleTaskRemove(item.data)}
						/>
					)}
					showsVerticalScrollIndicator={false}
					ListEmptyComponent={() => (
						<View style={styles.emptyList}>
							<Image
								style={styles.emptyListImage}
								source={require('../../assets/img/list.png')}
							/>
							<Text style={styles.emptyListTitle}>
								Você ainda não tem tarefas cadastradas
							</Text>
							<Text style={styles.emptyListText}>
								Crie tarefas e organize seus itens a fazer
							</Text>
						</View>
					)}
				/>
			</View>
		</View>
	);
}
