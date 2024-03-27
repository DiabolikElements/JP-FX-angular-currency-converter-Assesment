CREATE TABLE 'users' (
  'id' int(11) unsigned NOT NULL AUTO_INCREMENT,
  'item'     varchar(30) DEFAULT '',
  'full_name' varchar(50) DEFAULT '',
  'timestamp' timestamp,
  PRIMARY KEY ('id')
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

