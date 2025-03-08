### US Population table

## Overview
This project displays us population data in a table using data pulled from the data usa api. the html file sets up a basic structure with a heading and a table that has two columns: year and population. 

## script.js
The script.js file handles the data fetching and table population. it waits for the document to load before running. it makes a fetch call to the data usa api, which returns a json object. the data is stored under the data field, which contains an array of objects with "Year" and "Population" keys. the script sorts the data by year using parseInt() since the year values are strings. Ince sorted, the script creates new tr and td elements using createElement and adds them to the table body with appendChild. this approach was more reliable than innerHTML, which caused formatting issues. also added .catch() to handle network or api errors, so if the request fails, an error message is logged in the console.

## index.css
The css styles the table to make it more readable by adding borders, adjusting padding, and centering text in the headers.