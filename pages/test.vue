<template>
  <div>
    <!-- <input
      @change="imageFile($event)"
      type="file"
      accept="image/*;capture=camera"
    /> -->
    <input type="file" name="img" id="img" @change.prevent="primaryImg" />

    <h1>Updated</h1>

    <div>
      <img :src="tempSrc" alt="" style="width: 100px; height: 100px" />
      <!-- <v-quagga
        :onDetected="logIt"
        :readerSize="readerSize"
        :readerTypes="['ean_reader']"
      ></v-quagga> -->
      <img />
    </div>
    <div>
      <button class="action" @click="clicked">upload</button>
    </div>
  </div>
</template>

<script>
// import Client from "@veryfi/veryfi-sdk";
// const Client = require("@veryfi/veryfi-sdk");
import scanner from "../plugins/scanner";
import firebase from 'firebase'
export default {
  data() {
    return {
      readerSize: {
        width: 640,
        height: 480,
      },
      detecteds: [],
      imageData: {},
      imageName: '',
      tempSrc: ''
    };
  },
  methods: {
    primaryImg(event) {
      this.tempSrc = URL.createObjectURL(event.target.files[0])
      this.imageData = event.target.files[0]
      this.imageName = event.target.files[0].name
    },
    logIt(data) {
      console.log("detected", data);
    },
    imageFile(event) {
      this.imageData = URL.createObjectURL(event.target.files[0]);
      console.log("event", event.target.files[0]);
    },
    testMethod() {
      console.log("testMethod");
      if (process.server) {
        scanner.receipt(
          "https://templates.invoicehome.com/receipt-template-us-neat-750px.png"
        );
      }
    },
    async clicked() {
      try {
        
        const storageRef = firebase.storage().ref().child(this.imageName);
      let file = this.imageData;
      console.log('file', this.imageName);
      await storageRef.put(file);
      this.imageRef = await storageRef.getDownloadURL();
      console.log('image ref', this.imageRef);
      await this.$fire.firestore.collection("test").add({ url: this.imageRef });
      } catch (error) {
        console.log('error', error);
      }
    },
  },
};
</script>
<style scoped>
.action {
  padding: 4em;
  border: 1em;
  border-radius: 3px;
  background: #349023;
}
</style>