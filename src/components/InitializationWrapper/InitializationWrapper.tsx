import React, { useEffect, useState, FC } from 'react';
import { useRecoilState } from 'recoil';
import { onAuthUIStateChange } from '@aws-amplify/ui-components';

import Spinner from '../Spinner';
import { gamesState, userState } from '../../store/atoms';
import Layout from '../Layout';
import { getUser, createUser, getGames } from '../../api';
import { AuthorizationData } from '../../types';

// to bypass double signedin state
// https://github.com/aws-amplify/amplify-js/issues/7635
let signedIn = false;

const InitializationWrapper: FC = ({ children }) => {
  const [loadingGames, setLoadingGames] = useState(false);
  const [loadingUser, setLoadingUser] = useState(false);
  const [user, setUser] = useRecoilState(userState);
  const [, setGames] = useRecoilState(gamesState);

  async function fetchUser(authData: AuthorizationData) {
    try {
      const userResponse = await getUser(authData.username);
      if (userResponse) {
        return userResponse;
      }

      return await createUser(authData);
    } catch (err) {
      console.log('error fetching user', err);
      return null;
    }
  }

  useEffect(() => {
    if (user) {
      setLoadingGames(true);
      getGames()
        .then((games) => {
          setGames(games);
          setLoadingGames(false);
        })
        .catch((error) => {
          console.error('error fetching footballData', error);
          setLoadingGames(false);
        });
    }
  }, [user]);

  useEffect(() => onAuthUIStateChange((nextAuthState, authData) => {
    if (nextAuthState === 'signedin' && !signedIn) {
      signedIn = true;
      setLoadingUser(true);
      fetchUser(authData as AuthorizationData)
        .then(setUser)
        .finally(() => setLoadingUser(false));
      // todo: catch case with error
    }
  }), []);

  if (loadingUser) {
    return <Spinner />;
  }
  if (!user) {
    return null;
  }
  return (
    <Layout>
      {loadingGames && <Spinner />}
      {children}
    </Layout>
  );
};

export default InitializationWrapper;
