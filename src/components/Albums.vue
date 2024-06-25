<template>
  <div>
    <q-page class="flex flex-center">
      <q-card class="q-pa-md" style="width: 80%">
        <q-card-section>
          <div class="text-h6">Albums</div>
        </q-card-section>
        <q-list>
          <q-item v-for="album in albums" :key="album.id" clickable @click="goToAlbum(album.id)">
            <q-item-section>{{ album.title }}</q-item-section>
          </q-item>
        </q-list>
      </q-card>
    </q-page>
  </div>
</template>

<script>
import { useAlbumStore } from '../stores/albumStore'
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'

export default {
  name: 'Albums',
  setup() {
    const albumStore = useAlbumStore()
    const router = useRouter()

    onMounted(() => {
      albumStore.fetchAlbums()
    })

    const goToAlbum = (id) => {
      router.push(`/albums/${id}`)
    }

    return {
      albums: albumStore.albums,
      goToAlbum,
    }
  }
}
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
