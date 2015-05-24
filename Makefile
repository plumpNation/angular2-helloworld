.PHONY : install

all:
	echo "Hello, nothing to do by default"
	echo "Try 'make help'"

# target: help - Display callable targets.
help:
	egrep "^# target:" [Mm]akefile

# target: remove-app-configs - Delete app configs
install:
	tsd reinstall
	npm install
	bower install
