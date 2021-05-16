import axios from 'axios';
export function patch(values){
    axios({
      method: 'patch',
      url:'https://jsonplaceholder.typicode.com/users/1',
      data:{
        "offerName": values.name,
        "offerLink": values.link
      }
    })
    .then(res=>console.log(res))
    .catch(err=>console.error(err))
  }
export function post(values) {
        axios({
          method:'post',
          url:'https://jsonplaceholder.typicode.com/todos',
          data:{
            "offerName": values.name,
            "offerLink": values.link
          }
        })
        .then(res=>console.log(res))
        .catch(err=>console.error(err))
      }
export function remove(values){
    axios({
        method: 'delete',
        url:'https://jsonplaceholder.typicode.com/users/1'
    })
    .then(res=>console.log(res))
    .catch(err=>console.error(err))
}
export function getOffers(){
    axios({
        method: 'get',
        ulr:'https://jsonplaceholder.typicode.com/users'
    })
    .then(res=>console.log(res))
    .catch(err=>console.error(err))
}
export function getPrelands(values){

    axios({
        method: 'get',
        ulr:'https://jsonplaceholder.typicode.com/users',
        params:{
            id:values.id
        }
    })
    .then(res=>console.log(res))
    .catch(err=>console.error(err))
}

export function patchpreland(values){
  axios({
    method: 'patch',
    url:'https://jsonplaceholder.typicode.com/users/1',
    data:{
      "prelandName": values.name,
      "prelandShowing": values.showing,
      "prelandUniques": values.uniques,
      "prelandUnique": values.unique,
      "prelandPostback": values.postback
    }
  })
  .then(res=>console.log(res))
  .catch(err=>console.error(err))
}

export function removepreland(values){
  axios({
      method: 'delete',
      url:'https://jsonplaceholder.typicode.com/users/1'
  })
  .then(res=>console.log(res))
  .catch(err=>console.error(err))
}

export function postpreland(values) {
  axios({
    method:'post',
    url:'https://jsonplaceholder.typicode.com/todos',
    data:{
      "prelandName": values.name,
      "prelandShowing": values.showing,
      "prelandUniques": values.uniques,
      "prelandUnique": values.unique,
      "prelandPostback": values.postback
    }
  })
  .then(res=>console.log(res))
  .catch(err=>console.error(err))
}