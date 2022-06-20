import React from 'react';
import { createDevApp } from '@backstage/dev-utils';
import { bootstrapPlugin, BootstrapPage } from '../src/plugin';

createDevApp()
  .registerPlugin(bootstrapPlugin)
  .addPage({
    element: <BootstrapPage />,
    title: 'Cluster Bootstrap',
    path: '/bootstrap'
  })
  .render();
