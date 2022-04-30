import React from "react";

const RecursiveComponent = ({ item}) => {
  return (
    <div
      style={{
        maxWidth: "100vw",
        display: "grid",
        gap: "2rem",
        gridTemplateColumns: "30% 30% 30%",
      }}
    >
      {item.map((comm, index) => {
        return (
          <div style={{}} key={`${comm.item}${index}`}>
            <span>{comm.item} </span>
            <span>{comm.start}</span>
            {comm.child && <RecursiveComponent item={comm.child} />}
          </div>
        );
      })}
    </div>
  );
};

export const data = [
  {
    item: "Hello",
    start: "hope",
    child: [{
      item: "Hello",
      start: "hope",
      child: [{
        item: "Hello",
        start: "hope",
        child: [{
          item: "Hello",
          start: "hope",
          child: [{
            item: "Hello",
            start: "hope",
            child:[ {
              item: "Hello",
              start: "hope",
              
            }],
          }],
        }],
      }],
    }],
  },
  {
    item: "Hello",
    start: "hope",
    child: [{
      item: "Data",
    }],
  },
  {
    item: "Hello",
    start: "hope",
    child: [{
      item: "Hello",
      start: "hope",
      child:[ {
        item: "Hello",
        start: "hope",
       
      }],
    }],
  },
];
export default RecursiveComponent;
