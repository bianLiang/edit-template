# 项目
基于angular编写的富文本模块编辑器

# 使用
npm install xre-edit-template --save
npm install ng-zorro-antd --save
或者直接下载源码在自己的项目中使用

再需要使用的模块里引入下面代码
import { TemplateModule } from 'xre-edit-template';
import { NzModalModule} from 'ng-zorro-antd';
import { NzMessageModule } from 'ng-zorro-antd';
@NgModule({
  imports: [
   TemplateModule,
   NzModalModule,
   NzMessageModule
  ],
})

# 配置

