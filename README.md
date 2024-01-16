# Last Dependency

To use as trailling comma to avoid git commit unnecessary while managing new packages.

## Description

This project was created to add as any kind of dependency on your own project, it was no functionality and work just like trailing comma. So you could install a dependency `z` and do not worry about, for example, commit dependency line `"y":"0.0.0",` only because the comma.

## Check list

- [x] dependencies
- [x] devDependencies
- [x] optionalDependencies
- [x] peerDependencies
- [ ] peerDependenciesMeta
- [ ] bundleDependencies

## Help

To use type `npx zzzzz-last-dependency help` and check the current options,
but its simple as it seem, using current npm flag options (-S for --save -D for --save-dev, ...) and -A for all and -N for none.

The negative form take precedence, so if you set true a option and explicit negate it (--no-S for example), so it will not install.
The order is:
1. -A: set all dependencies to true;
2. -N: set all dependencies to false;
3. -S, -D, -O, -P: set the specific dependency to true;
4. --no-S, --no-D, --no-O, --no-P: set the specific dependnecy to false;
Always check in this order, so `npx zzzzz-last-dependency -D --no-D` and `npx zzzzz-last-dependency --no-D -D` has the same result.

By default install only dependencies and devDependencies in package.json, but you can stack for everything you need.
```sh
npx zzzzz-last-dependency -N -D # This code disable all modes and enable only the devDependencies
```

Check [npm install](https://docs.npmjs.com/cli/v8/commands/npm-install) documentantion for more info.

To manually install should change the aliasname: `npm i zzzzz-last-dependency-aliasname@github:AngelsProgram/zzzzz-last-dependency`
