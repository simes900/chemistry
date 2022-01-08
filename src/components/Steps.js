import data from '../data.json'
import React from 'react'
function Steps(){
    
    const [steps, setSteps] = React.useState( data || [])
    return(
        <div className="checklist">
           {steps.map(description=> 
                <div class="step-check">
                    <input className="checkBox" type="checkbox"></input>{description.step}
                </div>
             )}
           
        </div>
    )
}

export default Steps