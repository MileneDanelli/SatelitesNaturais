import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import {mySync} from '../models/sync';

const SyncIndicator = () => {
  const [syncState, setSyncState] = useState('Sincronizando...');

  useEffect(() => {
    mySync()
      .then(() => setSyncState(''))
      .catch(() => setSyncState('Sincronização falhou!'));
  });

  if (!syncState) {
    return null;
  }

  return (
    <View>
      <Text>{syncState}</Text>
    </View>
  );
};

export default SyncIndicator;
