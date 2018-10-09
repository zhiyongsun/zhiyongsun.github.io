//object merge
if (!Object.assign) {
  Object.defineProperty(Object, "assign", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function(target, firstSource) {
      "use strict";
      if (target === undefined || target === null)
        throw new TypeError("Cannot convert first argument to object");
      var to = Object(target);
      for (var i = 1; i < arguments.length; i++) {
        var nextSource = arguments[i];
        if (nextSource === undefined || nextSource === null) continue;
        var keysArray = Object.keys(Object(nextSource));
        for (var nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex++) {
          var nextKey = keysArray[nextIndex];
          var desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);
          if (desc !== undefined && desc.enumerable) to[nextKey] = nextSource[nextKey];
        }
      }
      return to;
    }
  });
}

(function(owner) {
    var language;
    var resources = {
        "zh-cn": {
            "base": {
                "yes": "是",
                "no": "否",
                "tips": "提示",
                "net_none": "当前网络不可用。",
                "remindNet": "当前为2/3G网络，是否继续?",
                "remote_login": "已在其他设备登录",
                "max_value": "最大值",
                "min_value": "最小值",
                "detail": "明细",
                "range_month": "本月",
                "range_year": "本年",
                "range_all": "全部",
                "confirm": "确认",
                "cancel": "取消",
                "search": "搜索",
                "select_audit_item": "请选择审批意见",
                "mark": "的",
                "mard_year": "年",
                "mark_day": "日",
                "from_day": "起始日期",
                "year_amount": "当年额度",
                "last_transfer": "去年转结",
                "used_year": "当年已使用",
                "in_transit": "当年申请在途",
                "can_be_used": "当年可使用",
                "remaining": "当年剩余",
                "approver_list":"审批人列表",
                "select_all":"全选",
                'selected':'已选择',
                "select_none":"全不选",
                "nodataText":"暂无数据"
            },
            "login": {
                "back_toast": "再按一次退出应用",
                "account_hint": "邮箱地址",
                "password_hint": "密码",
                "logo_text": "VX人力资源管理系统",
                "login_text": "登录",
                "forget_password": "忘记密码?",
                "account_must_enter": "请输入邮箱地址",
                "account_min_limited": "账号最短为 5 个字符",
                "account_max_limited": "",
                "password_must_enter": "请输入密码",
                "password_min_limited": "密码最短为 6 个字符",
                "password_max_limited": "",
                "mail_validation": "邮箱地址不合法",
                "connection_unkow": "无法连接网络",
                "password_error": "密码不正确"
            },
        },
        "en": {
            "base": {
                "yes": "Yes",
                "no": "No",
                "tips": "Alert",
                "remind_2g": "Remind_2g?",
                "net_none": "Network is unavailable!",
                "remindNet": "There is 2G/3G network, are you sure you want to continue?",
                "remote_login": "You are signed in on another device!",
                "max_value": "Max",
                "min_value": "Min",
                "detail": " Detail",
                "range_month": "Current Month",
                "range_year": "Current Year",
                "range_all": "All",
                "confirm": "Confirm",
                "cancel": "Cancel",
                "search": "Search",
                "select_audit_item": "Please select an audit item",
                "mark": " ",
                "mard_year": " ",
                "mark_day": "",
                "from_day": "From Day",
                "year_amount": "Year amount",
                "last_transfer": "Last year's transfer",
                "used_year": "Was used in the year",
                "in_transit": "Application in transit",
                "can_be_used": "Year can be used",
                "remaining": "Remaining",
                "select_all":"All",
                'selected':'Selected',
                "select_none":"Selected None",
                "nodataText":"No data"
            },
            "login": {
                "back_toast": "Press again to exit the application",
                "account_hint": "Email Address",
                "password_hint": "Password",
                "logo_text": "VX Human Resource Consulting",
                "login_text": "Login",
                "forget_password": "Forget password?",
                "account_must_enter": "Email Address is required!",
                "account_min_limited": "Account must be more than 5 characters",
                "account_max_limited": "Account length is limited to X characters",
                "password_must_enter": "Password is required!",
                "password_min_limited": "Password must be more than 6 characters",
                "password_max_limited": "Password length is limited to X characters",
                "mail_validation": "Email Address is not valid!",
                "connection_unkow": "Unable to connect to the network!",
                "password_error": "Password is not available!"
            },
        }
    };

    /**
	 * 根据传入的 modelName 获取对应的国际化文件
	 * @param {String} modelName
	 */
    function getGlob(modelName) {
        var glob = resources[language];
        if (modelName) {
            return glob[modelName];
        }
        return glob;
    }

    owner.language = language || "zh-cn";
    owner.init = function() {
        language = localStorage.getItem("$language") || "zh-cn";
        var returnData = {};
        if (arguments.length > 0) {
            for (var i = 0; i < arguments.length; i++) {
                var glob = getGlob(arguments[i]);
                if (glob) {
                   returnData =  Object.assign(returnData, glob);
                }
            }
            return returnData;
        }
        return getGlob();
    };
})(window.glob = {})