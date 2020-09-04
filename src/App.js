import React from 'react';
import logo from './logo.png';
import 'bulma/css/bulma.css'
import './App.css';
import './App.sass';

function App() {
  return (
    <div className="App">
      <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
          <img src={logo} alt="logo" class="logo"/>
        </div>
      </nav>
      <section class="section">
        <div class="container">
        <div class="columns">
          <div class="column is-one-third">
          <div class="card">
            <div class="card-image">
              <figure class="image is-4by3">
                <img src="https://lh3.googleusercontent.com/pw/ACtC-3fTJd1koshxEq_dfnOXjUgfMuEjy7qPVstGzauuSD2dxJX56SqjYOJcB_u_XbtUgnFJOI9ualCshjKIcYctZg35t5u5YBVeYjk9-iA3_wHo5v-iS-pmM-wMlvisInxDIbbZ2Z18WkMHA2DYcsDK2mlNww=s666-no?authuser=0" alt="Placeholder image" />
              </figure>
            </div>
            <div class="card-content">
              <div class="content has-text-justified">
                <div class="content-description">
                  <p><span>Descripción: </span> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris</p>
                </div>
                <div class="content-price">
                  <p><span>Precio: </span> $100</p>
                </div>
                <div class="content-unit">
                  <p><span>Quedan: </span> 4</p>
                </div>
              </div>
            </div>
          </div>

          </div>
        </div>
        </div>
      </section>
      <footer class="footer">
        <div class="content has-text-centered">
          <p>
            <strong>Meli</strong> by <a href="https://jgthms.com">David CS Tech</a>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
