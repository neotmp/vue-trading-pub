<template>
  <div>
    <header>
      <div>Header</div>
      <nav class="bg-green-500 p-4 space-x-2 justify-around flex">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/login">Login</RouterLink>
        <RouterLink to="/funds">Funds</RouterLink>
        <RouterLink to="/terminal">Terminal</RouterLink>
        <RouterLink to="/brokers">Brokers</RouterLink>
        <RouterLink to="/analytics">Analytics</RouterLink>
        <RouterLink to="/accounts">Accounts</RouterLink>
        <RouterLink to="/preferences">Preferences</RouterLink>
        <RouterLink to="/pairs">Pairs</RouterLink>
      </nav>
    </header>
    <slot />
    <footer>
      <div>Footer</div>
    </footer>
  </div>
</template>
