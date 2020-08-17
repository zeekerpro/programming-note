https://mp.weixin.qq.com/s/0l1FH4kCGyNShxPK22iPkQ

- wget https://dl.eff.org/certbot-auto 

- mv certbot-auto /usr/local/bin/

- chown root /usr/local/bin/certbot-auto

- chmod 0755 /usr/local/bin/certbot-auto

- certbot-auto certonly --standalone --email 1632384027@qq.com -d www.domain.com

- cd /etc/letsencrypt/live/www.domain.com/

- openssl pkcs12 -export -in fullchain.pem -inkey privkey.pem -out fullchain_and_key.p12 -name yndjs-tomcat -passout pass:password123123

- keytool -importkeystore -srckeystore fullchain_and_key.p12 -srcstoretype PKCS12 -deststoretype JKS -destkeystore www.domain.com.jks -alias yndjs-tomcat

- cp www.domain.com.jks /home/tomcat/conf/

配置
```xml
    <Connector port="443" protocol="org.apache.coyote.http11.Http11NioProtocol"
               maxThreads="150" SSLEnabled="true">
        <SSLHostConfig>
            <Certificate certificateKeystoreFile="conf/www.domain.com.jks"
                        certificateKeystorePassword="password123123"
                         type="RSA" />
        </SSLHostConfig>
    </Connector>
```

### 续期

- certbot-auto certificates

- cd /etc/letsencrypt/live/www.domain.com/

- openssl pkcs12 -export -in fullchain.pem -inkey privkey.pem -out fullchain_and_key.p12 -name yndjs-tomcat -passout pass:password123123

- keytool -importkeystore -srckeystore fullchain_and_key.p12 -srcstoretype PKCS12 -deststoretype JKS -destkeystore www.domain.com.jks -alias yndjs-tomcat

- cp www.domain.com.jks /home/tomcat/conf/


