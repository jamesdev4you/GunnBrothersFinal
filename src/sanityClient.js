// eslint-disable-next-line import/no-extraneous-dependencies
import { createClient } from '@sanity/client';

const client = createClient({
  projectId: 'igdzi5a7',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2021-10-25',
});

export default client;
