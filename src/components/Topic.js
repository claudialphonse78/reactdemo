import React from 'react';
import {
  Link,
  Route
} from 'react-router-dom';

export default function Topic(){
  return (
    <div>
      <h2>Topics</h2>
      <ul>
        <li>
          <Link to='/topics/rendering'>Rendering with React</Link>
        </li>
        <li>
          <Link to='/topics/components'>Components</Link>
        </li>
        <li>
          <Link to='/topics/props-v-state'>Props Vs State</Link>
        </li>
      </ul>
      <hr/>
      <Route path='/topics'></Route>
    </div>
  ) 
}