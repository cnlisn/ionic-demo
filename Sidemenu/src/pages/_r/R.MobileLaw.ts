import{ Injectable } from '@angular/core'

@Injectable()
export class ResMobileLawHelper{

    String : any;
    Api : any;

    constructor(){
        /**
         * 字符串配置项
         */
        this.String = {
            MobileLaw:{
                Main:{
                    Home:{
                        text:"首页",
                        icon:"home"
                    },
                    Todo:{
                        text:"待办",
                        icon:"ios-notifications",
                        desc:"待办任务"
                    },
                    Warning:{
                        text:"预警",
                        icon:"warning",
                        desc:"任务预警"
                    },
                    Tool:{
                        text:"助手",
                        icon:"hammer"
                    },
                    User:{
                        text:"我的",
                        icon:"contacts"
                    },
                    Notice:{
                        text:"欢迎进入环境监察移动执法系统！"
                    }
                }
            }
        }

        /**
         * 接口资源配置项
         *host:"http://61.178.20.254:8002",
         *host:"http://10.32.1.26:8006",
         *http://121.17.30.65:8004
         */
        this.Api = {
            UserService: {
                // host: "http://121.17.30.65:8004",
                host: "http://10.32.2.120:6221/WebService",
                Service: {
                    login: "/UserService.asmx/CheckUserPassword", //验证用户名和密码
                    identitynum: "/UserService.asmx/GetUserIdentityNumber", //获取用户的身份个数
                    identitylist: "/UserService.asmx/GetUserIdentityInfo", //获取用户的身份列表
                    getuserinfo: "/UserService.asmx/GetUserInfo", //根据登录代码获取用户信息
                    getuserinfobyid: "/UserService.asmx/GetUserInfoById", //根据用户标识获取用户信息
                    getuserinfobycode: "/UserService.asmx/GetUserInfoByCode", //根据登录代码获取用户信息
                    getunituseralllist: "/UserService.asmx/GetUnitUserAllList", //根据一级单位节点获取这个节点下的所有用户信息

                    appinfo: "/AppStoreService.asmx/GetAppInfo", //获取应用版本信息
                    savefeedback: "/AppStoreService.asmx/SaveFeedback", //添加反馈意见
                    apkinfo: "/AppStoreService.asmx/GetApkInfo", //获取应用apk信息
                    appwidgetslist: "/AppStoreService.asmx/GetAppWidgetsList" ,//获取应用功能信息

                    GetBasicInfo: "/ArchivesService.asmx/GetBasicInfo" //根据企业行标识查询获取企业详细信息
                }
            }
        };

    }
    
}