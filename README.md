# uknock - ultimate knocking tool

## Idea
I love the idea of port knocking, but hated the idea of manually knocking every time I wanted to access a serivce, I created a knocker that would monitor if a connection was open with the destination server, and if not, knock again, we call this: continuous knocking, currently this is the only way supported by uknock

## Instalation

The ideal way of installing uknock is bundling uknock with NSSM (Non-Sucking Service Manager) , creating the uknock daemon as a service in the OS and having it use continous knocking for access

Please, currently use uknock-e.js, uknock.js is a WIP and should not be used currently
