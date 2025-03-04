import './app.styles.css';
import { Component } from 'solid-js';
import { Section1 } from '@src/components/Section1/Section1';

export var App: Component = () => {
  return (
    <main>
      <Section1 />
    </main>
  );
};
