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

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    TemplateComponent,
    EditingAreaComponent,
    ToolbarComponent,
    EditBarComponent,
    EditingAreaItemComponent,
    ContentEditorToolComponent,
    ContentEditorToolItemComponent,

  ],
  exports: [
    TemplateComponent,
    EditingAreaComponent,
    ToolbarComponent,
    EditBarComponent,
    EditingAreaItemComponent,
    ContentEditorToolComponent,
    ContentEditorToolItemComponent,
  ],
  providers: [
    EditingAreaItemService,
    ContentEditorToolItemService
  ]
})
export class TemplateModule { }
