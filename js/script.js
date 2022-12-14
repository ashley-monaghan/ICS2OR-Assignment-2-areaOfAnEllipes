// Copyright (c) 2022 Ashley Monaghan all rights reserved
//
// Created by: Ashley Monaghan
// Created on: Oct 2022
// This file contains the JS functions for index.html

"use strict"
/**
 * This function calculates area of an Ellipse.
 */
function calculate() {
  // input
  const a = parseInt(document.getElementById("a-of-ellipse").value)
  const b = parseInt(document.getElementById("b-of-ellipse").value)

  // process
  const area = b * a * 3.14

  // output
  document.getElementById("area").innerHTML = "Area is: " + area + " cm²"
}
