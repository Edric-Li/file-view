FROM ubuntu:21.10

WORKDIR /file-view
# Switch Docker source
RUN sed -i "s/archive.ubuntu./mirrors.aliyun./g" /etc/apt/sources.list
RUN sed -i "s/deb.debian.org/mirrors.aliyun.com/g" /etc/apt/sources.list
RUN sed -i "s/security.debian.org/mirrors.aliyun.com\/debian-security/g" /etc/apt/sources.list
RUN sed -i "s/httpredir.debian.org/mirrors.aliyun.com\/debian-security/g" /etc/apt/sources.list

# Switch ubuntu source
RUN  sed -i s@/archive.ubuntu.com/@/mirrors.aliyun.com/@g /etc/apt/sources.list

RUN apt-get clean
RUN apt-get update

# Installing the base library
RUN apt-get install -y wget
RUN apt-get install -y curl

# Set the time zone
RUN apt-get install -y tzdata
RUN echo "Asia/Shanghai" > /etc/timezone
RUN dpkg-reconfigure tzdata

# Install nodejs
RUN apt install -y nodejs npm
RUN npm install -g n
RUN n stable
RUN npm install -g yarn --registry=https://registry.npm.taobao.org
RUN yarn config set registry https://registry.npm.taobao.org -g
RUN yarn config set sass_binary_site http://cdn.npm.taobao.org/dist/node-sass -g

# Install  nginx
RUN apt-get -y install supervisor software-properties-common logrotate curl
RUN add-apt-repository ppa:nginx/stable
RUN apt-get -y install nginx

# Install libreoffice
RUN mkdir libreoffice
RUN cd libreoffice
RUN wget https://s-1252587737.cos.ap-nanjing.myqcloud.com/LibreOffice_7.0.6_Linux_x86-64_deb.tar.gz
RUN tar -zxvf LibreOffice_7.0.6_Linux_x86-64_deb.tar.gz
RUN dpkg -i LibreOffice_7.0.6.2_Linux_x86-64_deb/DEBS/*.deb

ADD ./server /file-view/server
ADD ./web /file-view/web
ADD ./nginx /file-view/nginx
ADD ./scripts /file-view/scripts
ADD ./nginx/nginx.conf /etc/nginx/nginx.conf
RUN chmod -R +x /file-view/scripts

CMD /file-view/scripts/docker.start.sh
