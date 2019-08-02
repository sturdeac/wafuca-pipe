# This project is used to collect an email list for Wafuca.

To use a mongoDB database include a folder configs inside `/server` with a keys.js file containing: 

```
module.exports = {
  mongoURI:
    "<YOUR MONGODB URI>"
};
```

To use a Google Recaptcha include a folder configs inside `/src/components/containers/config` with a keys.js file containing: 

```
module.exports = {
  prodCaptcha: "<YOUR PROD KEY>",
  localCaptcha: "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
};
```

This project was created using CREATE-REACT-APP

## In the root folder install
- react
- concurrently
- axios
- classnames
- react-recaptcha-google
- react-router-dom
- react-router-hash-link

## in the client folder install
- body-parser
- concurrently
- express
- is-empty
- mongoose
- validator
