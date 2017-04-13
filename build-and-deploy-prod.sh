REACT_APP_API_BASE_URL=https://ocs-api.herokuapp.com npm run build && aws s3 cp ./build s3://oneclicksandwich.com/ --recursive

