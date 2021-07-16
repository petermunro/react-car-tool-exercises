# Exercise 13

- Implement the Add New Car function. When the user adds
  a new car, it should be added to the server.

  You will likely need to HTTP PUT the new car to,
  for example, http://myserver/cars/415.

  In `fetch`:

  ```javascript
  const requestOptions = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(myNewCar),
  };
  fetch("https://myserver/cars/415", requestOptions)
  .then(...)
  ```

- Check that it works!
