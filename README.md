## StyleWerx ##

| param | type | default | desc |
| :---: | :--: | :-----: | :---- |
| @clr | color | | sets color |
| @inline | boolean | false | sets display type to inline-(dt)
## **namespace: #flex** ##

.row(@inline: false; @rev: false)
.col(@inline: false; @rev: false)
---
### **align-content**
**call:** #ac.*mixin*()
| mixin | set value |
| :--- | ----: |
| .normal() | normal  |
| .fs() | flex-start  |
| .fe() | flex-end  |
| .c() | center  |
| .str() | stretch  |
| .se() | space-evenly  |
| .sa() | space-around  |
| .sb() | space-between  |
| .bl() | baseline  |


### **align-items**
**call:** #ai.*mixin*()
| mixin | set value |
| :---- | ----: |
|.auto() | auto |
|.normal() | normal |
|.fs() | flex-start |
|.fe() | flex-end |
|.c() | center |
|.str() | stretch |
|.bl() | baseline |


### **justify-content**
**call:** #jc.*mixin*()
| mixin | set value |
| :--- | ----: |
| .normal() | normal |
| .fs() | flex-start |
| .fe() | flex-end |
| .c() | center |
| .str() | stretch |
| .se() | space-evenly |
| .sa() | space-around |
| .sb() | space-between |
| .bl() | baseline |