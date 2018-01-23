
//elias * carrega tudo da lib
//as serve para dar um apelido pro *
import * as R from 'ramda';

//
import sum,{sub,mult} from './utils';

import react from 'react';
import reactDOM from 'react-dom';

const arr1 = [1,1,1,1,2,3,4,5,6,7];
const arr2 = [3,2,1,2,3,4,2,2,1,1];

const arr3 = R.union(arr1,arr2);

console.log(sum(2,3));
console.log(sub(3,2), mult(2,2))
