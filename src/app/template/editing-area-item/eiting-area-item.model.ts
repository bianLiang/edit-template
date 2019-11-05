export class EeitingAreaItem {
  public name?: string;
  public holder?: string;
  public index?: number;
  public type: string;
  public id?: string;
  public style?: any;
  public content?: string;
  public imgSize?: string;
  public url?: string;
  public href?: string;
  public toolConfigure?: any;
  public params?: any;
  public key?: string;
  public isEdit?: boolean;
  public isShowEditorTool?: boolean;
  public isCrop?: boolean;
  public showShadow?: boolean;
  public children?: EeitingAreaItem[];


  public onItemClick?: (event: any) => void;
  public onItemMouseenter?: (event: any) => void;
  public onItemMouseleave?: (event: any) => void;
}
