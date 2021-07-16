# Exercise 12

- Implement the Delete function. When the user hits a Delete
  button, the car should be removed from the server.

  To do this, you will need to issue an HTTP DELETE request.

  In `fetch`:

  ```javascript
  fetch('http://myserver/cars/1', { method: 'DELETE' })
  .then(res => res.json())
  .then(...)
  ```

  Or in `axios`:

  ```javascript
  axios.delete('http://myserver/cars/1')
  .then(...)
  ```

- Check that it works!
