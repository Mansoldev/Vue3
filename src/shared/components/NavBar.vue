<template>
    <nav>
        <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="25" height="25" />
        <span class="appTitle">CompoApp</span>

        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
    </nav>
</template>

<style>
nav {
  align-items: flex-start;
  display: flex;
  font-size: 12px;
  margin-top: 10px;
  text-align: center;
  width: 100%;
}

.logo {
    margin-right: 5px;
}
.appTitle {
    margin-right: 10px;
}
a {
    margin-right: 5px;
}

nav a {
    display: inline-block;
    padding: 0 1rem;
    border-left: 1px solid var(--color-border);
}
nav a:first-of-type {
    border: 0;
}
nav a.router-link-exact-active {
    color: var(--color-text);
}
nav a.router-link-exact-active:hover {
    background-color: transparent;
}
</style>