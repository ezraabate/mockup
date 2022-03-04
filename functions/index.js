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

exports.onAddTestMessage = functions.firestore.document('test/{docID}').onCreate(async (snap, context) => {
    try {
        return snap.ref.set({adminMessage: 'Welcome bot'}, {merge: true})
    } catch (error) {
        console.log('stuff went', error);
        return Promise.reject(error)
    }
})
