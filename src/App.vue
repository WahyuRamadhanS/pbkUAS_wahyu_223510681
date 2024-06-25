<template>
  <q-layout view="lHh lpr lFf">
    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-avatar>
            <img src="./assets/logo.png">
          </q-avatar> 
        <q-toolbar-title>Photo Album</q-toolbar-title>
        <q-tabs align="left">
          <q-route-tab to="/" label="Todos" />
          <q-route-tab to="/posts" label="Posts" />
          <q-route-tab to="/albums" label="Albums" />
        </q-tabs>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer elevated class="bg-grey-8 text-white">
      <q-toolbar>
        <q-toolbar-title class="footer-tittle">
          <q-avatar>
            <img src="./assets/logo.png">
          </q-avatar> 
          &copy; 2024 WahyuRamadhan.S. All Rights Reserved.
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script>
import { useRouter } from 'vue-router';

export default {
  name: 'App',
  setup() {
    const router = useRouter();

    return { router };
  }
};
</script>

<style>
@import 'quasar/dist/quasar.sass';

body {
  background-color: #FFE6E6;
}

.q-header {
  background-color: #7469B6 !important;
}

.q-route-tab {
  color: #FFF;
}

.q-card {
  background-color: #E1AFD1 !important;
}

.q-page {
  background-color: #FFE6E6 !important;
}

.q-footer {
  background-color: #7469B6 !important;
}

.footer-tittle{
  text-align: right;
}
</style>
