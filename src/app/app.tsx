import React, { FC } from 'react';
import './app.css';
import { DateDisplay } from 'src/components/date';
import { Face } from 'src/components/face';
import { Hands } from 'src/components/hands';
import { Numbers } from 'src/components/numbers';
import { Ticks } from 'src/components/ticks';
import { Title } from 'src/components/title';
import { SpotLight } from 'src/components/spot-light';

export const App: FC = () => {
  return (
    <div className="App">
      <Title/>
      <div className="clock">
        <Face />
        <DateDisplay />
        <Numbers />
        <Ticks />
        <Hands />
      </div>
      <SpotLight />
    </div>
  );
}

