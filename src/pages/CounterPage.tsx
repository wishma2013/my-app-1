import React from 'react';
import { FCCounter } from '../components/fc-counter'


const page = () => {

  var   state  = 12

  return (
    <div>
      <div>Counter</div>
      <FCCounter label="我是label" count={state} onIncrement={()=>state+1}/>
    </div>
  );
};

// const END_POINT = process.env.HOST_NAME || 'localhost:9000';

const initState = ():number => {
  // return fetch(`http://${END_POINT}/api/count`).then(response => {
  //   if (response.status !== 200) {
  //     throw new Error('Fail to fetch count');
  //   }
  //   return response.json();
  // }).then(responseJson => {
  //   return responseJson.count;
  // });
  return 100;
}

export {page};
