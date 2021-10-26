### NGINX with LUA
####
Setup Docker Nginx with LUA Openresty
```
docker run -d -v {REPO_PATH}/custom/conf.d:/etc/nginx/conf.d -p 8080:80  openresty/openresty:buster-fat
```

Install Server Whitelist Engine
```
npm install
```
Run Server Whitelist Engine
```
node index.js
```

Access this url to test the whitelist engine using Nginx with lua
```
http://localhost:8080
```

Try to update config.yaml adding your IP that need to whitelist
