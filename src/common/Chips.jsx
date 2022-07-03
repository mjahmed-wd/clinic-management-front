import React from 'react';

export default function Chips(props) {

   return (
      <>
         <div
            className={`chips ${props?.classes ? props?.classes : ''}`}
            {...props}
         >
            {props.label}
         </div>
      </>
   );
}

/*
   Usage
   <Chips label="Busy" classes="mx-2" />
*/