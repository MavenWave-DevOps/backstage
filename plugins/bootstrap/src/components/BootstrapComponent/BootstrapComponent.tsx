import React from 'react';
import { Typography, Grid } from '@material-ui/core';
import {
  InfoCard,
  Header,
  Page,
  Content,
  ContentHeader,
  HeaderLabel,
  SupportButton,
} from '@backstage/core-components';
import { BootstrapFetchComponent } from '../BootstrapFetchComponent';
// eslint-disable-next-line import/no-extraneous-dependencies
// import {
//   EntityArgoCDOverviewCard,
//   isArgocdAvailable
// } from '@roadiehq/backstage-plugin-argo-cd';
// import {
//   EntitySwitch,
// } from '@backstage/plugin-catalog';

export const BootstrapComponent = () => (
  <Page themeId="tool">
    <Header title="Welcome to Project X!" subtitle="Not the movie...">
      <HeaderLabel label="Owner" value="Dev Ops Team" />
      <HeaderLabel label="Lifecycle" value="Alpha" />
    </Header>
    <Content>
      <ContentHeader title="Cluster Bootstrap">
        <SupportButton>A description of your new plugin goes here.</SupportButton>
      </ContentHeader>
      <Grid container spacing={3} direction="column">
        <Grid item>
          <InfoCard title="Get your cluster here">
            <Typography variant="body1">
              All content for project X goes here.
            </Typography>
          </InfoCard>
        </Grid>
        <Grid item>
          <BootstrapFetchComponent />
        </Grid>
      </Grid>
    </Content>
  </Page>
);
