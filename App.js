import Main from './src/components/Main';
import { NativeRouter } from 'react-router-native';
import { ApolloProvider } from '@apollo/client';
import createApolloClient from './src/utils/apolloClient';
import AuthStorage from './src/utils/authStorage';
import AuthStorageContext from './src/context/AuthStorageContext';
import UserContext from './src/context/UserContext';
import userReducer from './src/reducers/userReducer';

const authStorage = new AuthStorage();

const apolloClient = createApolloClient(authStorage);

const App = () => {
  const { user, dispatch } = userReducer();
  return (
    <>
      <NativeRouter>
        <ApolloProvider client={apolloClient}>
          <AuthStorageContext.Provider value={authStorage}>
            <UserContext.Provider value={{ user, dispatch }}>
              <Main />
            </UserContext.Provider>
          </AuthStorageContext.Provider>
        </ApolloProvider>
      </NativeRouter>
    </>
  );
};

export default App;
