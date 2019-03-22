<template>
  <div>
    <p>
      Cette application est uniquement développée en
      <span class="color-hover">
        <img
          class="inline-icon"
          src="static/icons/ruby-icon.png"
          alt="icon"
        >
        Ruby
      </span>
      pur. Pas besoin de base de donnée, tout est écrit en dur. Il suffit de disposer d'un shell avec
      <span class="color-hover">
        <img
          class="inline-icon"
          src="static/icons/ruby-icon.png"
          alt="icon"
        >
        Ruby
      </span>
      2.6.
    </p>
    <p>
      Il faut installer les gems requises avec
      <pre>> bundle install</pre>
      et executer le launcher avec
      <pre>> ruby run/launcher.rb</pre>
    </p>
  </div>
</template>

<style lang="scss" scoped>
  pre {
    background-color: rgba(0,0,0,0.4);
    margin: 0;
    padding: 4px 7px;
    border: 1px solid rgba(#fff, 0.2);
    border-radius: 2px;
  }
</style>
