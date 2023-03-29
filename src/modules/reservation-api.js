const URL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/NSQ2jUNcTp3W8mj5Cd8P/reservations/';

const object = {
    "item_id": "item1",
    "username": "Jane",
    "date_start": "2020-10-15",
    "date_end": "2020-10-16"
}

const postToApi = (object)=> {
    fetch(URL,{
        method: 'POST',
        headers: {
            'Content-type':'application/json'
        },
        body: JSON.stringify(object)
    })
}
