import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateComponent } from './template.component';
import { EditingAreaComponent } from './editing-area/editing-area.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { EditBarComponent } from './edit-bar/edit-bar.component';
import { EditingAreaItemComponent } from './editing-area-item/editing-area-item.component';
import { ContentEditorToolComponent } from './content-editor-tool/content-editor-tool.component';
import { ContentEditorToolItemComponent } from './content-editor-tool/content-editor-tool-item/content-editor-tool-item.component';
import { EditingAreaItemService } from './editing-area-item/editing-area-item.service';
import { ContentEditorToolItemService } from './content-editor-tool/content-editor-tool-item/content-editor-tool-item.service';
import { FormsModule } from '@angular/forms';
import { NzModalModule} from 'ng-zorro-antd';
import { NzMessageModule } from 'ng-zorro-antd';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSelectModule } from 'ng-zorro-antd/select';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ImgTailoringComponent } from './img-tailoring/img-tailoring.component';
import { ImgTailoringService } from './img-tailoring/img-tailoring.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    BrowserAnimationsModule,
    NzModalModule,
    NzMessageModule,
    HttpClientModule,
    NzInputModule,
    NzSelectModule
  ],
  declarations: [
    TemplateComponent,
    EditingAreaComponent,
    ToolbarComponent,
    EditBarComponent,
    EditingAreaItemComponent,
    ContentEditorToolComponent,
    ContentEditorToolItemComponent,
    ImgTailoringComponent

  ],
  exports: [
    TemplateComponent,
    EditingAreaComponent,
    ToolbarComponent,
    EditBarComponent,
    EditingAreaItemComponent,
    ContentEditorToolComponent,
    ContentEditorToolItemComponent,
    ImgTailoringComponent
  ],
  providers: [
    EditingAreaItemService,
    ContentEditorToolItemService,
    ImgTailoringService
  ]
})
export class TemplateModule { }
