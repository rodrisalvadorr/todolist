import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: 327,
    height: 64,
    backgroundColor: '#262626',
    borderWidth: 1,
    borderColor: '#333333',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 8,
    marginBottom: 8
  },
  containerChecked: {
    width: 327,
    height: 64,
    backgroundColor: '#262626',
    borderWidth: 1,
    borderColor: '#262626',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 8,
    marginBottom: 8
  },
  task: {
    padding: 12,
    flexDirection: 'row',
    width: 267,
    alignItems: 'center',
    gap: 11
  },
  taskText: {
    color: '#F2F2F2',
    fontSize: 14
  },
  taskTextChecked: {
    color: '#808080',
    fontSize: 14,
    textDecorationLine: 'line-through',
    textDecorationStyle: 'solid'
  },
  deleteButton: {
    marginLeft: 8,
    height: 32,
    width: 32,
    justifyContent: 'center',
    alignItems: 'center'
  }
})