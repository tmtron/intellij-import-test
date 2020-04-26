Test project for [SO: "Why does auto-import of some packages not work?"](
https://stackoverflow.com/questions/61410187/why-does-auto-import-of-some-packages-not-work)

Intellij auto-import does not work for some packages.  
e.g. here is a simple [example project on Github][1] where the auto-import from the [change-case][2] package does not work: 

[![enter image description here][3]][3]

1. When I click CTRL+SPACE for a function that exists in the package, I see no suggestions
1. When I manually add the import (e.g. uncomment this line), it compiles fine
1. I noticed that the `change-case` package has type defs in the subdirs `dist` and `dist.es2015`  
I guess this is the reason: if so, how can we solve this?


  [1]: https://github.com/tmtron/intellij-import-test
  [2]: https://github.com/blakeembrey/change-case
  [3]: https://i.stack.imgur.com/qJcQd.png

**Answer**
>Auto-import only works for packages added as direct dependencies. 
>Adding "snake-case": "^3.0.3" to package.json should help:

see also: [change-case #95](https://github.com/blakeembrey/change-case/issues/95)

The project contains 3 branches:
* [master](https://github.com/tmtron/intellij-import-test): only imports change-case
* [additional-import](https://github.com/tmtron/intellij-import-test/tree/additional-import): 
also imports `snake-case`: auto-import for `snakeCase` works, for other (e.g. `camelCase)`not
* [change-case-all](https://github.com/tmtron/intellij-import-test/tree/change-case-all): 
uses the [change-case-all](https://github.com/btxtiger/change-case-all) package, 
instead of [change-case](https://github.com/blakeembrey/change-case): 
all auto-imports work
