# GifsApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.0.2.

## Create project

```
ng new giftsApp
```

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Create a module shared

```sh
ng g module shared
ng g c shared/sidebar --skip-tests -is
```

## Create a module gifts

```sh
ng g module gifts
ng g c gifts/gifsPage --skip-tests -is

ng g c gifts/busqueda --skip-tests -is
ng g c gifts/resultados --skip-tests -is
```

Create a service for gifts

```sh
ng g service gifts/services/gifs --skip-tests
```

Convert Data json to typescript

```
https://app.quicktype.io/
```

Add some animations

```
https://animate.style/
```
