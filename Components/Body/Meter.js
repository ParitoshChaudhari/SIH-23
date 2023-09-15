import React from 'react'
import './meter.css'


const Meter = () => {
  return (
    <>

      <h1>CSS Gauge - 4 levels</h1>

      <div class="gauge-wrapper">
        <div class="gauge four rischio3">
          <div class="slice-colors">
            <div class="st slice-item"></div>
            <div class="st slice-item"></div>
            <div class="st slice-item"></div>
            <div class="st slice-item"></div>
          </div>
          <div class="needle"></div>
          <div class="gauge-center">
            <div class="label">RISK</div>
            <div class="number">HIGH</div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Meter
