# From https://www.drupal.org/requirements/php#drupalversions
FROM php:7.0-apache
MAINTAINER peter@peterpolman.nl

RUN a2enmod rewrite

# Install the PHP extensions we need
RUN apt-get update && apt-get install -y \
  libpng-dev \
  libjpeg-dev \
  libpq-dev \
  libmcrypt-dev \
  mysql-client \
  git \
  nano \
  vim \
  unzip \
  graphviz \
  && apt-get clean \
  && rm -rf /var/lib/apt/lists/* \
  && docker-php-ext-configure gd --with-png-dir=/usr --with-jpeg-dir=/usr \
  && docker-php-ext-install bcmath gd mbstring pdo pdo_mysql pdo_pgsql zip mcrypt

RUN apt-get update -qq && apt-get install -y unzip

# Apache workdir.
WORKDIR /var/www/html

# Add our custom php.ini file.
ADD php.ini /usr/local/etc/php/php.ini

# Install Composer.
RUN curl -sS https://getcomposer.org/installer | php
RUN mv composer.phar /usr/local/bin/composer

# Install composer dependencies.
ADD composer.json /root/.composer/composer.json
# ADD composer.lock /root/.composer/composer.lock
RUN composer global install --prefer-dist

# Unfortunately, adding the composer vendor dir to the PATH doesn't seem to work. So:
RUN ln -s /root/.composer/vendor/bin/drush /usr/local/bin/drush

# Make sure Drush is installed correctly.
RUN if [ ! -f /root/.composer/vendor/drush/drush/lib/Console_Table-1.1.3/Table.php ]; then pear install Console_Table; fi

# Fix shell.
RUN echo "export TERM=xterm" >> ~/.bashrc

# Contains the Mac hack to get the permissions to work for development.
# Set user 1000 and group staff to www-data, enables write permission.
# https://github.com/boot2docker/boot2docker/issues/581#issuecomment-114804894
RUN usermod -u 1000 www-data
RUN usermod -G staff www-data
