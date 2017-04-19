REACT_APP_API_BASE_URL=https://api.oneclicksandwich.com npm run build && aws s3 cp ./build s3://oneclicksandwich.com/ --recursive

