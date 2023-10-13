import React from 'react';
import ReactDOM from 'react-dom';
var parent = React.createElement("div",{id:"parent"},React.createElement
("h1",{},"heading element"),React.createElement("p",{},"some welcom paragraph"))
var htmlroot=document.getElementById("root")
var rootreact=ReactDOM.createRoot(htmlroot)
rootreact.render(parent)