import React from 'react'

const GridItem = () => (
  <div>
    <section 
      className="beyondga-grid-container" 
      style={{
        display: 'flex',
        alignItem: 'flex-start',
        justifyContent: 'center',
        flexDirection: 'column'
      }}
    >
      <div 
        className="beyondga-grid-item-image"
        style={{
          backgroundColor: 'pink',
          height: '350px',
          width: '100%'
        }}
      ></div>
      <div 
        className="beyondga-grid-item-tag"
        style={{
          backgroundColor: 'green',
          height: '50px',
          width: '100%'
        }}
      >
      </div>
      <h2 
        className="beyondga-grid-item-headline"
        style={{
          backgroundColor: 'blue',
          height: '50px',
          width: '100%'
        }}
      ></h2>
      <p 
        className="beyondga-grid-item-headline"
        style={{
          backgroundColor: 'red',
          height: '200px',
          width: '100%'
        }}
      ></p>
    </section>
  </div>
)

export default GridItem
