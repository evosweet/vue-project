<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <router-link to="/"><a class="navbar-brand">Stock Trader</a></router-link>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
      aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link to="/portfolio" class="nav-link" tag="a">Portfolio</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/stocks" class="nav-link" tag="a">Stocks</router-link>
        </li>
        <li>
            <button type="button" class="btn btn-light">End Day</button>
        </li>
        <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
           Save & Load
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a class="dropdown-item" href="#">Save</a>
          <a class="dropdown-item" href="#">Load</a>
        </div>
      </li>
      </ul>
    </div>
  </nav>
</template>
