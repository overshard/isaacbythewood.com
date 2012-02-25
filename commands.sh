#!/bin/bash


SCRIPT_ROOT=`dirname $0`
FRAMEWORK_ROOT=$SCRIPT_ROOT'/framework'
PYTHON_FILE=$SCRIPT_ROOT'/bin/python'
MANAGE_FILE=$FRAMEWORK_ROOT'/manage.py'
PID_FILE=$SCRIPT_ROOT'/run/django.pid'
SOCKET_FILE=$SCRIPT_ROOT'/run/django.sock'


start () {
    sudo -u www-data $PYTHON_FILE $MANAGE_FILE run_gunicorn --settings=settings.production -D -w 4 -p $PID_FILE 'unix:'$SOCKET_FILE
}

stop () {
    sudo -u www-data kill `cat $PID_FILE`
}

update () {
    cd $SCRIPT_ROOT
    sudo -u www-data git pull
    sudo -u www-data $PYTHON_FILE $MANAGE_FILE collectstatic --noinput
}


case $1 in
start)
    start
;;
stop)
    stop
;;
restart)
    stop
    start
;;
update)
    stop
    update
    start
;;
esac


exit 0
