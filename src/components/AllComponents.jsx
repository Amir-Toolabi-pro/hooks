import React from 'react';
import RefExample from './RefExample';
import MemoExample from './MemoExample';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Accordion } from 'react-bootstrap';
import ReducerExample from './ReducerExample';
import TransitionExample from './TransitionExample';


const AllComponents = () => {
  return (
    <>
      <h3 style={{textAlign:"center", margin:"10px 0 30px"}} >
        یادگیری و استفاده از هوک ها
      </h3>
      <Accordion dir='rtl'>
        <Accordion.Item eventKey="0">
          <Accordion.Header>useRef</Accordion.Header>
          <Accordion.Body>
            <RefExample />
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>useMemo</Accordion.Header>
          <Accordion.Body>
            <MemoExample />
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>useReducer</Accordion.Header>
          <Accordion.Body>
            <ReducerExample />
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>useTransition</Accordion.Header>
          <Accordion.Body>
            <TransitionExample />
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </>
  );
}

export default AllComponents;