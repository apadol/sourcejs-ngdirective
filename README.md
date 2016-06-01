# Angular Directives Plugin

Prevent compling directives in sourcecode

[SourceJS](http://sourcejs.com) plugin.

## Install

To install plugin, run npm command in `sourcejs/user` folder:

```
npm install sourcejs-ngdirective --save
```

Then run Grunt update in SourceJS root:

```
cd ..
grunt update
```

Define name of angular app to bootstrap after parsing source code in `sourcejs/user/options.json` file

```
plugins: {
    ngdirective : {
        appname : "yourApp"
    },
}
```

After restarting your app, plugin will be loaded automatically. To disable it, remove npm plugin and run `grunt update` again.

Remember that plugin is bootstrapping an app for you so don't do it twice.

## Other SourceJS plugins

* https://github.com/sourcejs/sourcejs-bubble
* https://github.com/sourcejs/sourcejs-spec-dependencies
* https://github.com/sourcejs/sourcejs-spec-status
* https://github.com/sourcejs/sourcejs-specs-linting