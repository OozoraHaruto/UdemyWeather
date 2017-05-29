import React from 'react';
import Nav from 'Nav';

var About = (props) =>{
  return (
    <div>
      <h1 className="text-center pageTitle">About</h1>
      <p>This is a weather application built on React. I have bult this for The Complete React Web App Developer Course</p>
      <p>Here are some of the tools I used:</p>
      <table className="hover stacked table-scroll ">
        <thead>
          <tr>
            <th>Link</th>
            <th>What is it</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><a href="https://facebook.github.io/react" target="_blank">React</a></td>
            <td>This is the javascript framework being used to render this page</td>
          </tr>
          <tr>
            <td><a href="http://openweathermap.org" target="_blank">Open Weather Map</a></td>
            <td>To look for weather data by city</td>
          </tr>
          <tr>
            <td><a href="http://foundation.zurb.com/" target="_blank">Foundation</a></td>
            <td>This is the CSS framework used to style this page</td>
          </tr>
        </tbody>
      </table>

      <p>Quick Links for myself:</p>
      <table className="hover stacked table-scroll ">
        <thead>
          <tr>
            <th>Link</th>
            <th>What is it</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><a href="http://obscure-everglades-61572.herokuapp.com/" target="_blank">Heroku</a></td>
            <td>Application Webpage</td>
          </tr>
          <tr>
            <td><a href="https://github.com/taiyoOzora/UdemyWeather" target="_blank">GitHub</a></td>
            <td>Git repo</td>
          </tr>
          <tr>
            <td><a href="https://www.udemy.com/the-complete-react-web-app-developer-course/learn/v4/content" target="_blank">Udemy</a></td>
            <td>Udemy course link for this application</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

module.exports = About;
