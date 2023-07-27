const QiExR_picture = "";

const QiExR_icon = "";

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
            id: witcat_fps_extensionId, // 拓展id
            name: this.formatMessage("QiExR.name"), // 拓展名
            blockIconURI: witcat_fps_icon,
            menuIconURI: witcat_fps_icon,
            color1: "#EC3838",
            color2: "#B32B2B",
            blocks: [
            ],
            menus: {
                type: [
                    {
                        text: this.formatMessage('QiExR.type.1'),
                        value: 'true'
                    },
                    {
                        text: this.formatMessage('QiExR.type.2'),
                        value: 'false'
                    },
                ],
            },
        };
    }
}

window.tempExt = {
    Extension: QiExR,
    info: {
        name: "QiExR.name",
        description: "QiExR.descp",
        extensionId:  QiExR_extensionId,
        iconURL:  QiExR_picture,
        insetIconURL:  QiExR_icon,
        featured: true,
        disabled: false,
        collaborator: "Qi & C4D"
    },
    l10n: {
        "zh-cn": {
            "QiExR.name": "[测试]Qi拓展R",
            "QiExR.descp": "一个还在规划中的拓展"
        },
        en: {
            "QiExR.name": "[test]QiExR",
            "QiExR.descp": "A Extend which is planning"
        }
    }
};
