// export default function scanner(){

//     const Client = require('@veryfi/veryfi-sdk');
//     const client_id = 'vrfdBR7u5cjwOvAXtsacPf0WJGiLXgZT0zTLg4M';
//     const client_secret = 'C3EYeAXPHzN1fb7klo1peBipo0ine8VwYug6I5s7i55g5Rsxrgn4GWos0UZljDeNBBJ7L8CohBWcYjmzRTsrWTBCeiJheOHEUoeElJ0vjYPG7G77Xc19XZfs2YErdyGB';
//     const username = 'ezra1';
//     const api_key = 'c7fa47314ac6af0207b602c311e90c68';
    
    
//     let my_client = new Client(client_id, client_secret, username, api_key)
    
    
//     const response = async() => await my_client.process_document('two.jpg')
    
//     response().then(console.log)
// }


// import Client from '@veryfi/veryfi-sdk';
const scanner = {
    receipt (image) {
    const Client = require('@veryfi/veryfi-sdk');
    const client_id = 'vrfdBR7u5cjwOvAXtsacPf0WJGiLXgZT0zTLg4M';
    const client_secret = 'C3EYeAXPHzN1fb7klo1peBipo0ine8VwYug6I5s7i55g5Rsxrgn4GWos0UZljDeNBBJ7L8CohBWcYjmzRTsrWTBCeiJheOHEUoeElJ0vjYPG7G77Xc19XZfs2YErdyGB';
    const username = 'ezra1';
    const api_key = 'c7fa47314ac6af0207b602c311e90c68';
    
    
    let my_client = new Client(client_id, client_secret, username, api_key)
    
    
    const response = async() => await my_client.process_document(image)
    
    response().then(console.log)

    },
 
}

export default scanner