const Qiergzdshf_picture = "";

const Qiergzdshf_icon = "";

const Qiergzdshf_extensionId = "Qiergzdshf";

class Qiergzdshf {
    constructor(runtime) {
        this.runtime = runtime;
    }
    getInfo() {
        return {
            id: Qiergzdshf_extensionId, // 拓展id
            name:({
      				id:'Qiergzdshf.categoryName',
      				default:'Qiergzdshf',
      				description:"A testing Ext"
      			})
           block:[
				      {
    					opcode:’fn’,
    					blockType: BlockType.COMMAND,
    					arguments:{
                      an:{
                          type: ArgumentType.STRING,
                          defaultValue:''
                      }
                  }
    				  }
    			]
      }
  }
};
