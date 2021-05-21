import React, { useEffect, useState } from 'react'
import './Accordion.css'
import {questions} from './AccordionData'
import AccordionFormat from './AccordionFormat'

function Accordion() {

  return (
    <div className="accordion__container">
      <h1> Frequently Asked Questions </h1>

      {questions.map(({header, body}) => (
        <AccordionFormat header={header} body={body}></AccordionFormat>
      ))}
    </div>
  )
}
 
export default Accordion


