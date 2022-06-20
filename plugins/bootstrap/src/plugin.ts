import { createPlugin, createRoutableExtension } from '@backstage/core-plugin-api';

import { rootRouteRef } from './routes';

export const bootstrapPlugin = createPlugin({
  id: 'bootstrap',
  routes: {
    root: rootRouteRef,
  },
});

export const BootstrapPage = bootstrapPlugin.provide(
  createRoutableExtension({
    name: 'BootstrapPage',
    component: () =>
      import('./components/BootstrapComponent').then(m => m.BootstrapComponent),
    mountPoint: rootRouteRef,
  }),
);
