# ng-selector
----------

This repository will help angular projects to add name attributes based on the host module to an element.

<a href="http://52.28.171.132:8111/viewType.html?buildTypeId=NgSelector_Build&guest=1">
<img src="http://52.28.171.132:8111/app/rest/builds/buildType(id:NgSelector_Build)/statusIcon"/>
</a>

<hr>


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
	<my-component name="custom-module-login">
		...
        </my-component>
</custom-module
```


## Module Details

| Features        |            | Description  |
| ------------- |:-------------:| -----:|
| AOT compatible     | X | directive can be compiled using AOT feature |
