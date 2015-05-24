angular2-helloworld
===================

It's exactly what it says on the tin. Except I'm learning the Typescript way of doing things,
rather than the ES5 way.

## Requirements

You need `npm` and `nodejs` installed. You should have a web server (localhost).


## Setup

```shell
make install
```

This will:
- grab type definitions for angular (Typescript definitions)
- install bower component for traceur runtime

You should be able to run index.html in your web server now.

There is no build step at this time.

## Dependencies

The traceur runtime seems to be necessary even following the
[step by step](https://angular.io/docs/js/latest/guide/setup.html) guide on the main angular
page, which is frustrating at first.

You will probably need Typescript installed.

```shell
sudo npm install -g typescript
```

This will give you `tsd` which is a package manager for Typescript definitions, and `tsc` which is
a compiler.

## IDE

I'm using Atom with the atom-typescript package. It creates a `tsconfig.json` file for me, it lints
my code as I go, gives me code hints and compiles on save, which can be turned off.

Alternatively you can follow the instructions to use the tsc (Typescript compiler) on the shell.

```shell
tsc --watch -m commonjs -t es5 --emitDecoratorMetadata main.ts
```

I've also seen tutorials where the tutor is using the Visual Studio IDE that's built on top of the
Atom shell. Apparently it's pretty dope for working with Typescript, but I just can't bring myself
to use Visual Studio, I'm not ready for installing Microsoft software on my Linux box quite yet, but
if you are (Visual Studio code)[https://www.visualstudio.com/] is ready for download.
