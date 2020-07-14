import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  greeting: {
    marginTop: 32,
    fontSize: 18,
    fontWeight: '500',
    textAlign: 'center',
    color: '#8A8F9E',
  },
  form: {
    justifyContent: 'center',
    marginTop: 50,
    marginBottom: 48,
    marginHorizontal: 30,
  },
  inputTitle: {
    color: '#8A8F9E',
    fontSize: 10,
    textTransform: 'uppercase',
  },
  input: {
    borderBottomColor: '#8A8F9E',
    borderBottomWidth: StyleSheet.hairlineWidth,
    height: 40,
    fontSize: 15,
    color: '#161F3D',
  },
  button: {
    marginHorizontal: 30,
    backgroundColor: '#22089F',
    borderRadius: 16,
    height: 52,
    alignItems: 'center',
    justifyContent: 'center',
  },
  errorMessage: {
    height: 72,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 30,
  },
  error: {
    color: '#22089F',
    fontSize: 13,
    fontWeight: '600',
    textAlign: 'center',
  },
  back: {
    position: 'absolute',
    top: 48,
    left: 32,
    width: 32,
    height: 32,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatar: {
    width: 100,
    height: 100,
    backgroundColor: '#E1E2E6',
    borderRadius: 50,
    marginTop: 48,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
