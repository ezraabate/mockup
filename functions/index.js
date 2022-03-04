const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp()

// // Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
    //   functions.logger.info("Hello logs!", {structuredData: true});
    //   response.send("Hello from Firebase!");
    // });
    
    const Client = require('@veryfi/veryfi-sdk');
    exports.onAddTestMessage = functions.firestore.document('test/{docID}').onCreate(async (snap, context) => {
        try {
        
    const client_id = 'vrfdBR7u5cjwOvAXtsacPf0WJGiLXgZT0zTLg4M';
    const client_secret = 'C3EYeAXPHzN1fb7klo1peBipo0ine8VwYug6I5s7i55g5Rsxrgn4GWos0UZljDeNBBJ7L8CohBWcYjmzRTsrWTBCeiJheOHEUoeElJ0vjYPG7G77Xc19XZfs2YErdyGB';
    const username = 'ezra1';
    const api_key = 'c7fa47314ac6af0207b602c311e90c68';
    
    
    let my_client = new Client(client_id, client_secret, username, api_key)
    
    console.log(snap.data().url);
    const response = await my_client.process_document_url(snap.data().url)
    const items = response.line_items
    console.log(response.line_items);
    items.forEach(item => {
        console.log(item.description);
    });
 
        // return snap.ref.set(response, {merge: true})
    } catch (error) {
        console.log('stuff went', error);
        return Promise.reject(error)
    }
})
