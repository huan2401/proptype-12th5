import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Col, Layout, Row } from 'antd';
import { v4 as uuidv4 } from 'uuid';
import routes from '@/routes';
import Container from '@/components/styles/Container';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';

const { Content } = Layout;

const DefaultLayout = () => {
  const { t } = useTranslation();

  return (
    <Container>
            <Suspense fallback={null}>
              <Switch>
                {routes.map(
                  ({ component: Component, title, query, ...rest }) => (
                    <Route
                      {...rest}
                      key={uuidv4()}
                      render={routeProps =>
                        Component && (
                          <>
                            <Helmet>
                              <title>{t(title)}</title>
                            </Helmet>
                            <Component {...routeProps} query={query} />
                          </>
                        )
                      }
                    />
                  )
                )}
              </Switch>
            </Suspense>
    </Container>
  );
};

export default DefaultLayout;
