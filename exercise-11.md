# Exercise 11

## Set up json-server

Install and run json-server. You will need to:

    - create your `db.json` file containing the JSON you want to serve
      (with keys for the REST endpoint categories)
    - npm install json-server --save-dev
    - npx json-server --watch `db.json`
    - check that it works

## Retrieve your initial list of cars from the JSON server

- Make a `fetch` or `axios` call to the REST API to retrieve the initial
  list of cars.
- Render them on screen.
- Render any errors that might occur.
- Don't go any further at this stage.

---

### A `checkHttpStatus` function

You can use this function to check the HTTP status if you're using `fetch`:

```javascript
function checkHttpStatus(response) {
  if (response.ok) {
    return Promise.resolve(response);
  } else {
    const error = new Error(response.statusText);
    error.response = response;
    return Promise.reject(error);
  }
}
```
