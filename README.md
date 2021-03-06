# angular-examples
Angular examples from my blog software-developer.org

# Intro

Like many software engineer in daily business as an software engineer I don't have a lot of time for diving deeper into new tools and technologies. Now as a new and first-time father I'm taking a professional timeout and focus on new things respectively in more details like Angular, machine learning, React, Docker...

With 'diving deeper' I mean understanding it down to its basics and concepts - without diluting it with other APIs and concepts! By learning its theories and purposes of each component, class, and configuration files allows me developing high-quality software in an efficient way.

Since I'm switching from AngularJs to Angular I will start collecting and summarizing all fundamentals of Angular Version 7 and higher. My resources I'm using are:

- [Official angular.io site](https://angular.io) including [docs](https://angular.io/docs) and [API](https://angular.io/api)
- [German Angular book](https://angular-buch.com/blog) with its examples on [GitHub](https://github.com/book-monkey2-build)

# ToC
The subfolders contains examples of the following blog cheatsheet series:

[01. Generating a new project](http://software-developer.org/2019/02/11/Angular-cheatsheet-01-new-project/) - [GitHub example](https://github.com/taitruong/angular-examples/tree/master/Cheatsheet0100Project)

[02. Components](http://software-developer.org/2019/02/11/Angular-cheatsheet-02-component/) - [GitHub example](https://github.com/taitruong/angular-examples/tree/master/Cheatsheet0200Component)

[02.01. Templates](http://software-developer.org/2019/02/12/Angular-cheatsheet-0201-template-syntax/) - [GitHub example](https://github.com/taitruong/angular-examples/tree/master/Cheatsheet0201Template)

# Updates
Updates and progress of my learnings can be found on my [blog](http://software-developer.org/2019/02/11/Angular-cheatsheet-00-in-aNutshell-with-cheatsheets-collection/) with examples here on GitHub.

# Install Node, Angular and CLI
Install nodejs

```
# Optional: add this ppa for installing latest nodejs release
curl -sL https://deb.nodesource.com/setup_10.x
# installs latest (10.15.1) or LTS (8.10.0) release
sudo apt install nodejs
# check version
node -v # v10.15.1
```

Install angular globally (using '-g' option):
```
sudo npm install -g @angular/cli
```

Optionally install and configure git:
```
sudo apt install git
git config --global user.name yourname
git config --global user.email your@email.address
```

Clone from my GitHub repo:
```
git clone https://github.com/taitruong/angular-examples
```
