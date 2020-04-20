import React from 'react';

const Selected = ({ selected, add }) => (

  //render song
  <div className="selected[0]-song">
    <div>{selected[0].name} </div>
    <div className="artist-name">{selected[0].artists[0].name} </div>
    <span> </span>
  </div>

)

export default Selected

