import { Injectable } from '@angular/core';

@Injectable()
export class ResHelper {

    Theme: any;
    String: any;
    Image: any;
    Api: any;

    constructor() {

        /**
         * 皮肤设置
         */
        this.Theme = {
            default: {}
        };

        /**
         * 字符串配置项
         */
        this.String = {
            App: {
                AppId: "232ee007c07a471e8553d71cfe51b893", //app应用的AppId
                id: "tengdi.agile.userauthen.mobile",
                name: "环境监察移动执法系统",
                code: "MobileLaw"
            },
            Department: {
                name: "衡水市环境保护局"
            },
            Network: {
                tip: "网络环境",
                loading: "网络连接中······",
                error: "网络连接出现错误······"
            },
            Company: {
                attr: "开发商",
                name: "南京腾迪智能科技有限公司",
                site: "http://www.njtd.com.cn",
                tel: "024-86432478",
                address: "南京市建邺区江东中路311号中泰国际广场"
            },
            Ui: {
                Alert: {
                    title: "提示信息",
                    ok: "确定",
                    cancel: "取消"
                },
                Loading: {
                    content: "数据加载中······"
                },
                Toast: {
                    message: "数据加载中······"
                },
                ActionSheet: {
                    title: "",
                    subTitle: ""
                },
                Refresh: {
                    pullicon: "arrow-dropdown",
                    pulltext: "加载更多数据",
                    spinner: "circles",
                    loadingtext: "更多数据加载中······"
                }
            },
            Action: {
                DownLoad: {
                    text: "下载",
                    loading: "文件下载中，请稍后..."
                },
                Upload: {},
                Update: {
                    title: "更新提示!",
                    text: "检查到新版本，是否更新?",
                    latest: "已经是最新版本！",
                    loading: "更新中，请稍后...",
                    derror: "更新包下载失败!"
                },
                Exit: {
                    title: "退出提示!",
                    text: "您确定退出当前系统吗?"
                }
            },
            Data: {
                pagesize: 12,
                empty: "未找到相关记录!",
                error: "对不起，没有查询到相关记录",
                errormore: "数据真的只有这么多了，不要再拉了"
            }
        };

        /**
         * 图表资源配置项
         */
        this.Image = {
            App: {
                logo: "assets/logo/epi.svg"
            },
            mapimg: "assets/icon/map.png"
        };


        /**
         * 接口资源配置项
         *host:"http://61.178.20.254:8002",
         *host:"http://10.32.1.26:8006",
         *http://121.17.30.65:8004
         */
        this.Api = {
            CommonService: {
                host: "http://61.178.20.254:8002",
                Service: {
                    codevalue: "/CodeInfoService.asmx/GetCodeValue" //获取代码信息
                }
            }
        };
    }
}
