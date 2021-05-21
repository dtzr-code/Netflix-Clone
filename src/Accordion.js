import React from 'react'
import './Accordion.css'
import {questions} from './AccordionData'
import AccordionFormat from './AccordionFormat'

function Accordion() {

  return (
    <div className="accordion__container">
      <h1> Frequently Asked Questions </h1>
      <>
        {questions.map(({header, body, id}) => (
          <AccordionFormat key={id} header={header} body={body}></AccordionFormat>
        ))}
      </>
    </div>
  )
}
 
export default Accordion


