# Angular Directives Plugin

Prevent compling directives in sourcecode

[SourceJS](http://sourcejs.com) plugin.

[npm](https://www.npmjs.com/package/sourcejs-ngdirective) package

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

## How to use it?

Probably, you have wrapped `my-component` directive with `source_example` css class element, like here:
```
<div class="source_example">
        <my-component attr="{{someValue}}"></my-component>
</div>
```
Simply add `source_ngdirective` class into wrap container:
```
<div class="source_example source_ngdirective">
        <my-component attr="{{someValue}}"></my-component>
</div>
```

And that's it. Plugin will automatically create source code for you, instead of compiling it.

After restarting your app, plugin will be loaded automatically. To disable it, remove npm plugin and run `grunt update` again.

## Other SourceJS plugins

* https://github.com/sourcejs/sourcejs-bubble
* https://github.com/sourcejs/sourcejs-spec-dependencies
* https://github.com/sourcejs/sourcejs-spec-status
* https://github.com/sourcejs/sourcejs-specs-linting