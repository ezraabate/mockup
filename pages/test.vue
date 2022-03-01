<template>
  <div>
    <input type="file" accept="image/*;capture=camera" />
    <div>
      <v-quagga
        :onDetected="logIt"
        :readerSize="readerSize"
        :readerTypes="['ean_reader']"
      ></v-quagga>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      readerSize: {
        width: 640,
        height: 480,
      },
      detecteds: [],
    };
  },
  methods: {
    logIt(data) {
      console.log("detected", data);
    },
  },
};
</script>