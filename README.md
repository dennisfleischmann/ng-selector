# ng-selector
This repository will help angular projects to add name attributes based on the host module to an element.

```javascript
import { NgSelectorModule } from 'ng-selector';
```

# usage

```
<custom-module>
	<my-button ng-selector selector-name="login"></my-component>
</custom-module
```

## html output

```
<custom-module>
	<my-component name="custom-module-login"></my-component>
</custom-module
```


Colons can be used to align columns.

| Features        |            | Description  |
| ------------- |:-------------:| -----:|
| AOT compatible     | X | directive can be compiled using AOT feature |
