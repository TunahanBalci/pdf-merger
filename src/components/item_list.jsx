import DraggableList from "react-draggable-list";
import React, { useEffect, useRef, useState } from "react";

export const data = [];

const Item = ({ item, itemSelected, dragHandleProps, onDelete }) => {
  const { onMouseDown, onTouchStart } = dragHandleProps;

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div
        className="disable-select"
        style={{
          border: "5px solid rgb(42, 58, 87)",
          borderRadius: "20px",
          margin: "5px",
          marginLeft: "50px",
          marginRight: "50px",
          width: "40%",
          padding: "10px",
          display: "flex",
          alignItems: "center",
          background: "#5885af",
          userSelect: "none",
          fontWeight: "bold",
          fontSize: "40px",
          color: "white",
          gap: "10px",
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="100"
          height="100"
          viewBox="0 0 128 128"
        >
          <path
            fill="#F7F7FB"
            d="M85,9H24.7c-2.5,0-4.6,2.1-4.6,4.6v100.8c0,2.5,2.1,4.6,4.6,4.6h78.5c2.5,0,4.6-2.1,4.6-4.6V31.9L85,9v18.3c0,2.5,2.1,4.6,4.6,4.6h18.3"
          ></path>
          <path
            fill="#DEDFE6"
            d="M85.1 94.5H41c-1.7 0-3-1.3-3-3s1.3-3 3-3h44.1c1.7 0 3 1.3 3 3S86.8 94.5 85.1 94.5zM85.1 76.2H41c-1.7 0-3-1.3-3-3s1.3-3 3-3h44.1c1.7 0 3 1.3 3 3S86.8 76.2 85.1 76.2zM85.1 57.8H41c-1.7 0-3-1.3-3-3s1.3-3 3-3h44.1c1.7 0 3 1.3 3 3S86.8 57.8 85.1 57.8z"
          ></path>
          <g>
            <path
              fill="#464C55"
              d="M110,29.8L87.1,6.9C86.5,6.4,85.6,6,84.7,6c0,0,0,0,0,0H24.7c-4.2,0-7.6,3.4-7.6,7.6v100.8c0,4.2,3.4,7.6,7.6,7.6h78.6c4.2,0,7.6-3.4,7.6-7.6V31.9C110.9,31.1,110.5,30.3,110,29.8z M88,16.2l12.7,12.7H89.6c-0.9,0-1.6-0.7-1.6-1.6V16.2z M104.8,114.4c0,0.9-0.7,1.6-1.6,1.6H24.7c-0.9,0-1.6-0.7-1.6-1.6V13.6c0-0.9,0.7-1.6,1.6-1.6h57.2v15.3c0,4.2,3.4,7.6,7.6,7.6h15.3V114.4z"
            ></path>
          </g>
        </svg>
        <div
          style={{
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            maxWidth: "60%",
          }}
        >
          {item.name}
        </div>
        <svg
          onClick={() => onDelete(item.id)}
          cursor={"pointer"}
          style={{
            marginLeft: "auto",
            marginRight: "0px",
            scale: "0.8",
            transform: "translateY(5px)",
          }}
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="100"
          height="100"
          viewBox="0,0,256,256"
        >
          <g
            fill="#ffffff"
            fill-rule="nonzero"
            stroke="none"
            stroke-width="1"
            stroke-linecap="butt"
            stroke-linejoin="miter"
            stroke-miterlimit="10"
            stroke-dasharray=""
            stroke-dashoffset="0"
            font-family="none"
            font-weight="none"
            font-size="none"
            text-anchor="none"
            style={{
              mixBlendMode: "normal",
            }}
          >
            <g transform="scale(3.55556,3.55556)">
              <path d="M32,11c-1.105,0 -2,0.895 -2,2v1h-13c-2.209,0 -4,1.791 -4,4c0,2.209 1.791,4 4,4h38c2.209,0 4,-1.791 4,-4c0,-2.209 -1.791,-4 -4,-4h-13v-1c0,-1.105 -0.895,-2 -2,-2zM16,24v25c0,5.514 4.486,10 10,10h20c5.514,0 10,-4.486 10,-10v-25zM24.5,29c0.828,0 1.5,0.671 1.5,1.5v19c0,0.829 -0.672,1.5 -1.5,1.5c-0.828,0 -1.5,-0.671 -1.5,-1.5v-19c0,-0.829 0.672,-1.5 1.5,-1.5zM36,29c1.104,0 2,0.896 2,2v18c0,1.104 -0.896,2 -2,2c-1.104,0 -2,-0.896 -2,-2v-18c0,-1.104 0.896,-2 2,-2zM47.5,29c0.828,0 1.5,0.671 1.5,1.5v19c0,0.829 -0.672,1.5 -1.5,1.5c-0.828,0 -1.5,-0.671 -1.5,-1.5v-19c0,-0.829 0.672,-1.5 1.5,-1.5z"></path>
            </g>
          </g>
        </svg>
        <div
          className="disable-select dragHandle"
          style={{
            cursor: "all-scroll",
            fontSize: "56px",
            color: "white",
            display: "flex",
            marginLeft: "0px",
            marginRight: "15px",
          }}
          onTouchStart={(e) => {
            e.preventDefault();
            console.log("touchStart");
            e.target.style.backgroundColor = "blue";
            document.body.style.overflow = "hidden";
            onTouchStart(e);
          }}
          onMouseDown={(e) => {
            console.log("mouseDown");
            document.body.style.overflow = "hidden";
            onMouseDown(e);
          }}
          onTouchEnd={(e) => {
            e.target.style.backgroundColor = "black";
            document.body.style.overflow = "visible";
          }}
          onMouseUp={() => {
            document.body.style.overflow = "visible";
          }}
        >
          &#x2630;
        </div>
      </div>
    </div>
  );
};

export default function ItemList({ list, setList }) {
  const containerRef = useRef();

  const _onListChange = (newList) => {
    setList(newList);
  };

  const handleDelete = (idToRemove) => {
    setList((prevList) => prevList.filter((item) => item.id !== idToRemove));
  };

  const renderItem = (props) => <Item {...props} onDelete={handleDelete} />;

  return (
    <div ref={containerRef}>
      <DraggableList
        itemKey="id"
        template={renderItem}
        list={list}
        onMoveEnd={_onListChange}
        container={() => containerRef.current}
      />
    </div>
  );
}
