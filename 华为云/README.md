# docker-nginx
docker image of nginx

### build  
```bash
$ docker build -t zhangfuxing/nginx:latest .
```  

### push
```bash
$ docker push zhangfuxing/nginx:latest
```

### run  
```bash
$ docker run -d -e TZ="Asia/Shanghai" -v /app/nginx/nginx.conf:/etc/nginx/nginx.conf -v /app/nginx/static:/usr/share/nginx/static --restart=always --name nginx --network host zhangfuxing/nginx:latest
# Enter the container
$ docker exec -it nginx bash
# Exit
$ exit
```  

### docker-compose  
``` bash
# run
$ docker-compose up -d
# Enter the container
$ docker-compose exec nginx bash
# Exit
$ exit
```