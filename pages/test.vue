<template>
  <div>
    <input
      @change="imageFile($event)"
      type="file"
      accept="image/*;capture=camera"
    />
    <h1>Updated</h1>

    <div>
      <img :src="imageData" alt="" style="width: 100px; height: 100px" />
      <!-- <v-quagga
        :onDetected="logIt"
        :readerSize="readerSize"
        :readerTypes="['ean_reader']"
      ></v-quagga> -->
      <img />
    </div>
  </div>
</template>

<script>
// import Client from "@veryfi/veryfi-sdk";
// const Client = require("@veryfi/veryfi-sdk");
import scanner from "../plugins/scanner";
export default {
  async created() {
    // const client_id = "vrfdBR7u5cjwOvAXtsacPf0WJGiLXgZT0zTLg4M";
    // const client_secret =
    //   "C3EYeAXPHzN1fb7klo1peBipo0ine8VwYug6I5s7i55g5Rsxrgn4GWos0UZljDeNBBJ7L8CohBWcYjmzRTsrWTBCeiJheOHEUoeElJ0vjYPG7G77Xc19XZfs2YErdyGB";
    // const username = "ezra1";
    // const api_key = "c7fa47314ac6af0207b602c311e90c68";
    // let my_client = new Client(client_id, client_secret, username, api_key);
    // const response = async () => await my_client.process_document("two.jpg");
    // response().then(console.log);
    // let my_client = new Client(
    //   process.env.client_id,
    //   process.env.client_secret,
    //   process.env.username,
    //   process.env.api_key
    // );
    // const response = async () =>
    //   await my_client.process_document(
    //     "https://makereceipt.com/images/CustomLogoReceipt4.jpg"
    //   );
    // response().then(console.log);
    // scanner("https://makereceipt.com/images/CustomLogoReceipt4.jpg");
    console.log("test");
    this.testMethod();
  },
  data() {
    return {
      readerSize: {
        width: 640,
        height: 480,
      },
      detecteds: [],
      imageData:
        "https://static.scientificamerican.com/sciam/cache/file/4F73FD83-3377-42FC-915AD56BD66159FE_source.jpg",
    };
  },
  methods: {
    logIt(data) {
      console.log("detected", data);
    },
    imageFile(event) {
      console.log("event", event.target.files[0]);
      this.imageData = URL.createObjectURL(event.target.files[0]);
    },
    testMethod() {
      console.log("testMethod");
      if(process.server){

        scanner.receipt(
          "https://templates.invoicehome.com/receipt-template-us-neat-750px.png"
        );
      }
      
    },
  },
};
</script>