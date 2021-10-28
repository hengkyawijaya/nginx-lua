### NGINX with LUA
####
Setup Docker Nginx with LUA Openresty
```
docker run -d -v {REPO_PATH}/custom/conf.d:/etc/nginx/conf.d -p 8080:80  openresty/openresty:alpine-fat
```
Enter to terminal docker
```
docker exec -it 5f4da8b069b29ed4b1a8f52d11d9dd991df79add4d6fcd8cbfd907f82b8227f6 /bin/sh
```
Install Library lua-resty-iputils
```
/usr/local/openresty/luajit/bin/luarocks install lua-resty-iputils
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
http://localhost:8080/test-simple-ip
```
Or this for implementation cidr, but for now the list ip still hardcoded on lua script
```
http://localhost:8080/test-cidr
```

Try to update config.yaml adding your IP that need to whitelist
