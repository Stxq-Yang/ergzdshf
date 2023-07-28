const QiExR_picture = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAQAAABaKYYPAAAAYklEQVR42u3RAQ0AAAjDsPdP7FAF5+KltnCsd5I1A9RUyjHaV1HdS7HEioLbPDltWuIiwAAAAASUVORK5CYII=";

const QiExR_icon = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAQAAADZc7J/AAAAeElEQVR42u3TAQkAAAjDsI/P9GgA6yEZpiqmyr4tK8gT5TMovVNUF0oG6Kl1THUtxBmKE2zTCFTEuAfDhE+rA4L9fXdRdR5aqWCzSMgAAAAASUVORK5CYII=";

const QiExR_extensionId = "QiExR";

class QiExR {
    constructor(runtime) {
        this.runtime = runtime;
        this._formatMessage = runtime.getFormatMessage({
            "zh-cn": {
                "QiEXT.name": "[测试]Qi拓展R",
            },
            en: {
                "QiExR.name": "[test]QiExR",
            }
        })
    }
    formatMessage(id) {
        return this._formatMessage({
            id,
            default: id,
            description: id
        });
    }
    
    getInfo() {
        return {
            id: QiExR_extensionId, // 拓展id
            name: this.formatMessage("QiExR.name"), // 拓展名
            blockIconURI: QiExR_icon,
            menuIconURI:QiExR_icon ,
            color1: "#000000",
            color2: "#FFFFFF",
            blocks: [
                 {
                  opcode: 'example-nop',
                  blockType: Scratch.BlockType.COMMAND,
                  blockAllThreads: false,
                  text: 'do nothing',
                  func: 'nop',
                }
            ]
        };
    }
    function nop(){}
};
    
Scratch.extensions.register(new ExampleExtension());
