SUBDIRS = team-basket team-composer team-header team-list team-product team-discover

install:
	for dir in $(SUBDIRS); do \
        $(MAKE) -C $$dir install; \
    done

build:
	for dir in $(SUBDIRS); do \
        $(MAKE) -C $$dir build; \
    done
