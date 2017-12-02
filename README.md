# ng-selenium-selector
This repository will help angular projects to add attributes to an element based on the host

```javascript
import { NgSelectorModule } from 'ng-selector';
```

# usage

```
<custom-module>
	<my-button ng-selector name="login"></my-component>
</custom-module
```

## html output

```
<custom-module>
	<my-component selector="custom-module-login"></my-component>
</custom-module
```


Colons can be used to align columns.

| Features        |            | Description  |
| ------------- |:-------------:| -----:|
| AOT compatible     | X | directive can be compiled using AOT feature |
