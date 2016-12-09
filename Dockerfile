FROM nginx

COPY ./build /web
COPY nginx/nginx.conf /etc/nginx/nginx.conf
