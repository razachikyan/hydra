import React from 'react';
import './App.css';
import { Footer } from './shared/Footer/Footer';
import { Header } from './shared/Header/Header';
import { Layout } from './shared/Layout/Layout';
import { Main } from './shared/Main/Main';

function App() {
  return (
    <Layout>
      <div className="container">
        <Header />
        <Main />
        <Footer />
      </div>
    </Layout>
  );
}

export default App;
