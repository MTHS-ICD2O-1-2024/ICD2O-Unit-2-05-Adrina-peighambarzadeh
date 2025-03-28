// Copyright (c) 2025 Adrina. peighambarzadeh All rights reserved
//
// Created by: Adrina. peighambarzadeh
// Created on: mar 2025
// This file contains the JS functions for index.html

"use strict"

function calculateTakeHomePay() {
  // input
  const hoursWorked = parseFloat(document.getElementById('hours-worked').value);
  const hourlyWage = parseFloat(document.getElementById('hourly-wage').value);
  
  // process
  const grossPay = hoursWorked * hourlyWage;
  const taxAmount = grossPay * 0.18;
  const takeHomeSalary = grossPay - taxAmount;
  
  // output
  document.getElementById('TakeHomePay').innerHTML = `Your pay will be: $${takeHomeSalary.toFixed(2)}`;
  document.getElementById('TakeHomePay').innerHTML += `<br>The government will take: $${taxAmount.toFixed(2)}`;
}