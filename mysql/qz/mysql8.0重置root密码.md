1. sudo /usr/local/mysql/support-files/mysql.server stop

2. sudo mysql_safe --skip-grant-tables &

3. user mysql;
FLUSH PRIVILEGES;
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '123456';
