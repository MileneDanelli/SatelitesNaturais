import {synchronize} from '@nozbe/watermelondb/sync';

export async function mySync() {
  await synchronize({
    database,
    pullChanges: async ({lastPulledAt, schemaVersion, migration}) => {
      const response = await fetch(`http://10.205.5.131:3000/sync`, {
        body: JSON.stringify({lastPulledAt, schemaVersion, migration}),
      });
      if (!response.ok) {
        throw new Error(await response.text());
      }

      const {changes, timestamp} = await response.json();
      return {changes, timestamp};
    },
    pushChanges: async ({changes, lastPulledAt}) => {
      const response = await fetch(
        `http://10.205.5.131:3000/sync?last_pulled_at=${lastPulledAt}`,
        {
          method: 'POST',
          body: JSON.stringify(changes),
        },
      );
      if (!response.ok) {
        throw new Error(await response.text());
      }
    },
    migrationsEnabledAtVersion: 2,
  });
}
