<?php

$ip = getenv("DB_PORT_3306_TCP_ADDR");
$port = getenv("DB_PORT_3306_TCP_PORT");
$rootpwd = getenv("DB_ENV_MYSQL_ROOT_PASSWORD");

$databases = array (
  'default' =>
    array (
      'default' =>
        array (
          'database' => 'mintpuur_db',
          'username' => 'root',
          'password' => $rootpwd,
          'host' => $ip,
          'port' => $port,
          'driver' => 'mysql',
          'prefix' => '',
        ),
    ),
);

$update_free_access = FALSE;
$drupal_hash_salt = '65sn4wkTNZPA9g7CpQDk1XbimuWLYijqfyzgjqu6TjY';
ini_set('session.gc_probability', 1);
ini_set('session.gc_divisor', 100);
ini_set('session.gc_maxlifetime', 200000);
ini_set('session.cookie_lifetime', 2000000);

// Custom settings.
// Core cache settings.
$conf['cache'] = 0;
$conf['page_compression'] = 0;
$conf['cache_lifetime'] = 600;
$conf['page_cache_maximum_age'] = 600;

$conf['file_temporary_path'] = '/tmp';
