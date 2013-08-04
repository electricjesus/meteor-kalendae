# Meteor Kalendae

[Kalendae](https://www.github.com/chipersoft/kalendae) is an attempt to do something that nobody has yet been able to do: make a date picker that doesn't suck.

### Installation

The preferred method is to add this package directly into your Meteorite's `smart.json` package file:

```javascript
{
  "packages": {
    "meteor-kalendae" : { 
	"branch" : "master",
	"git" : "https://github.com/electricjesus/meteor-kalendae.git"
    }
  }
}
```
Swap the `branch` entry from `master` to `cdn` to grab the CDN version for your production systems. CDN version is backed by Cloudflare's [CDNjs](http://cdnjs.com/).


You can also install via Meteorite:

```
mrt install kalendae
```

Then run `mrt install`.

### Don't have Meteorite, yet?

It's easy! Just run `sudo -H npm install -g meteorite` (provided you already have the latest Node/NPM). For more info visit this page:

For more information visit https://www.github.com/oortcloud/meteorite/

https://github.com/oortcloud/meteorite#installing-meteorite
