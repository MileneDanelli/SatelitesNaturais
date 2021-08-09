import {StyleSheet} from 'react-native';

const css = StyleSheet.create({
  icon: {
    backgroundColor: '#7fff00',
    width: 100,
    height: 100,
    borderRadius: 200,
    marginBottom: 20,
  },
  input: {
    marginTop: 10,
    padding: 10,
    width: 400,
    backgroundColor: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    borderRadius: 3,
  },
  botao: {
    width: 400,
    height: 42,
    backgroundColor: '#fa8072',
    borderRadius: 4,
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textoBotao: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageHome: {
    flex: 1,
    resizeMode: 'cover',
    alignItems: 'center',
  },
  topBar: {
    flexDirection: 'row',
    paddingTop: 10,
    paddingBottom: 10,
    width: '100%',
    backgroundColor: '#111',
    alignItems: 'center',
    justifyContent: 'center',
  },
  home: {
    textAlign: 'left',
  },
  titulo_topBar: {
    width: '80%',
    fontWeight: 'bold',
    fontSize: 20,
    color: '#fff',
    textAlign: 'center',
  },
  grid: {
    textAlign: 'right',
  },
});

export {css};
