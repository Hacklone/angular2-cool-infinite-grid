[npm-url]: https://npmjs.org/package/angular2-cool-infinite-grid
[npm-image]: https://img.shields.io/npm/v/angular2-cool-infinite-grid.svg
[downloads-image]: https://img.shields.io/npm/dm/angular2-cool-infinite-grid.svg
[total-downloads-image]: https://img.shields.io/npm/dt/angular2-cool-infinite-grid.svg

# angular2-cool-infinite-grid [![NPM version][npm-image]][npm-url] [![Downloads][downloads-image]][npm-url]  [![Total Downloads][total-downloads-image]][npm-url]
Cool Infinite Grid for angular2

## Install 
> npm install --save angular2-cool-infinite-grid

## Demo
[View demo on Plunker](https://embed.plnkr.co/8cnYDA/)

## Setup
```javascript
import { NgModule } from '@angular/core';
import { CoolInfiniteGridModule } from 'angular2-cool-infinite-grid';

@NgModule({
    imports: [CoolInfiniteGridModule]
})
export class MyAppModule {}
```

## Usage
```javascript
import { Component } from '@angular/core';
import { Http } from '@angular/http';

@Component({
    selector: 'my-app',
    template: `
        <cool-infinite-grid [itemIterator]="myItemIterator" [itemHeight]="40" [itemWidth]="35" [itemSpace]="5">
            <ng-template let-item>
                <img [src]="item.imageUrl">
                <div>{{ item.name }}</div>
            </ng-template>
        </cool-infinite-grid>
    `
})
export class MyAppComponent {
    myItemIterator;

    constructor(private http: Http) {
        const self = this;

        this.myItemIterator = {
            next: function(fromIndex, length) {
                return {
                    value: this.http.get(`/api/items?from${fromIndex}&length=${length}`).toPromise();
                };
            }
        };
    }
}
```

Place the ```cool-infinite-grid-container``` attribute on any html element. This element will be the scrolling container.

>Note: ```cool-infinite-grid-container``` won't work on the ```<body>``` element as the body element cannot be scrolled.

```html 
<html cool-infinite-grid-container>
```

# License
> The MIT License (MIT)

> Copyright (c) 2016 Hacklone
> https://github.com/Hacklone

> Permission is hereby granted, free of charge, to any person obtaining a copy
> of this software and associated documentation files (the "Software"), to deal
> in the Software without restriction, including without limitation the rights
> to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
> copies of the Software, and to permit persons to whom the Software is
> furnished to do so, subject to the following conditions:

> The above copyright notice and this permission notice shall be included in all
> copies or substantial portions of the Software.

> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
> IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
> FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
> AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
> LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
> OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
> SOFTWARE.
