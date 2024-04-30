import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    position: 'relative',
    flex: 1,
    backgroundColor: '#1A1A1A',
    alignItems: 'center'
  },
  header: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    top: 0,
    left: 0,
    width: '100%',
    height: 173,
    backgroundColor: '#0D0D0D'
  },
  logo: {
    width: 110,
    height: 32,
  },
  form: {
    flex: 1,
  },
  inputContainer: {
    marginTop: 142,
    flexDirection: 'row',
    height: 54,
    gap: 4,
    alignItems: 'center',
  },
  input: {
    borderColor: '#0D0D0D',
    borderWidth: 1,
    borderRadius: 6,
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#262626',
    fontSize: 16,
    width: 271,
    color: '#F2F2F2'
  },
  button: {
    height: 52,
    width: 52,
    backgroundColor: '#1E6F9F',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6
  },
  countContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 32,
    alignItems: 'center',
    paddingBottom: 20,
  },
  createdCount: {
    flexDirection: 'row',
    gap: 8
  },
  concludedCount: {
    flexDirection: 'row',
    gap: 8
  },
  createdCountTextLegend: {
    color: '#4EA8DE',
    fontSize: 14,
    fontWeight: 'bold'
  },
  concludedCountTextLegend: {
    color: '#8284FA',
    fontSize: 14,
    fontWeight: 'bold'
  },
  createdCountText: {
    backgroundColor: '#333333',
    color: '#D9D9D9',
    fontSize: 12,
    fontWeight: 'bold',
    height: 19,
    width: 25,
    borderRadius: 999,
    textAlign: 'center'
  },
  concludedCountText: {
    backgroundColor: '#333333',
    color: '#D9D9D9',
    fontSize: 12,
    fontWeight: 'bold',
    height: 19,
    width: 25,
    borderRadius: 999,
    textAlign: 'center',
    textAlignVertical: 'center'
  },
  emptyList: {
    borderTopWidth: 1,
    borderTopColor: '#333333',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 48,
    paddingHorizontal: 20
  },
  emptyListImage: {
    height: 56,
    width: 56,
    marginBottom: 16
  },
  emptyListTitle: {
    color: '#808080',
    fontWeight: 'bold',
    fontSize: 14
  },
  emptyListText: {
    color: '#808080',
    fontSize: 14
  }
}) 