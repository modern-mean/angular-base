# angular-base
Base module for Angular

#Installation
Until angular-cli becomes more stable and includes an addon/library generation feature like ember cli, I am just cloning and sym linking to the src/app folder.

##Clone Repository
```
git clone git@github.com:modern-mean/angular-base.git
```

##Navigate to the src/app directory of your angular cli project
```
ln -s <PATH TO CLONE/src> modern-mean 
```

##Install Libraries
```
npm i --save @angular/material @angular/flex-layout hammerjs
```

#Configuration
Configure the module.

##CSS Configuration
Add styles.scss to ./angular-cli.json
```
"styles": [
    "styles.css",
    "styles.scss"
],

```

Create file src/styles.scss
You can change the first import to any prebuilt material2 theme.
```
@import '~@angular/material/core/theming/prebuilt/deeppurple-amber.scss';
@import 'app/modern-mean/navigation-list/navigation-list.component.scss';

@include modern-mean-navigation($theme);
```

src/styles.css
```
html, body, app-root, md-sidenav-layout {
  margin: 0 0 -64px 0;
  width: 100%;
  height: 100%;
}
```

#Include module
src/app/app.module.ts
```
import { ModernMeanModule } from './modern-mean/modern-mean.module';
... //More code here
imports: [
    ModernMeanModule
    ...
]

```

#Add component
src/app/app.component.html
```
<app-modern-mean></app-modern-mean>
```
