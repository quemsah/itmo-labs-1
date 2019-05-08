import React from 'react';
import { render as r } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import Page from './Page';

const render = (Compo, props = {}) =>
  r(
    <AppContainer>
       <Compo {...props} />
    </AppContainer>,
    document.querySelector('.cont')
  );

const starter = () => render(Page);
starter();
if (module.hot) module.hot.accept('./Page', starter);
