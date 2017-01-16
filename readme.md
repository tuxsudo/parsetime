# Parse Time

Flexible time parsing - intended for extracting the time of day from user input.

```
import {parse} from '@tuxsudo/parsetime';

const {hours, minutes, seconds, time12, time24} = parse('1p');

// hours: 13 (int)
// minutes: 0 (int)
// seconds: 0 (int)
// time12: "01:00:00 pm"
// time24: "13:00:00"
```


## With CommonJS

```
const timeparser = require('@tuxsudo/parsetime');
timeparser.parse('333a');
```
