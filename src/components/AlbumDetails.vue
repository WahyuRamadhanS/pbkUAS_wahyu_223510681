<!-- AlbumDetails.vue -->
<template>
    <div>
      <q-page class="flex flex-center">
        <q-card class="q-pa-md" style="width: 80%">
          <q-card-section>
            <div class="text-h6">Album Details</div>
          </q-card-section>
          <q-list>
            <q-item v-for="photo in photos" :key="photo.id" clickable @click="viewPhoto(photo.url)">
              <q-item-section>
                <q-img :src="photo.thumbnailUrl" style="width: 100px; height: 100px;"></q-img>
              </q-item-section>
            </q-item>
          </q-list>
          <q-dialog v-model="photoDialog" persistent>
            <q-img :src="selectedPhotoUrl" style="max-width: 100%; max-height: 100vh;" />
          </q-dialog>
        </q-card>
      </q-page>
    </div>
  </template>
  
  <script>
  import { useAlbumStore } from '../stores/albumStore';
  import { onMounted, ref } from 'vue';
  import { useRoute } from 'vue-router';
  
  export default {
    name: 'AlbumDetails',
    setup() {
      const albumStore = useAlbumStore();
      const route = useRoute();
      const photoDialog = ref(false);
      const selectedPhotoUrl = ref('');
  
      onMounted(() => {
        albumStore.fetchPhotos(route.params.id); // Fetch photos based on route param `id`
      });
  
      const viewPhoto = (url) => {
        selectedPhotoUrl.value = url;
        photoDialog.value = true;
      };
  
      return {
        photos: albumStore.photos,
        photoDialog,
        selectedPhotoUrl,
        viewPhoto,
      };
    },
  };
  </script>
  
  <style scoped>
  .q-card {
    background-color: #E1AFD1 !important;
    color: black;
  }
  .q-item:hover {
    background-color: #AD88C6 !important;
    color: white;
  }
  </style>
  