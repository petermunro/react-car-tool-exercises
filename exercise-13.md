# Exercise 13

- Implement the Add New Car function. When the user adds
  a new car, it should be added to the server.

  You will need to HTTP POST the new car to
  the car collection, eg http://myserver/cars.

  In `fetch`:

  ```javascript
  const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(myNewCar),
  };
  fetch("http://myserver/cars", requestOptions)
  .then(...)
  ```

- Check that it works!
