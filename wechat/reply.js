// const rp = require("request-promise-native");
// const Theaters = require("../model/Theaters");
// const { url } = require("../config");

module.exports = message => {
  let options = {
    toUserName: message.FromUserName,
    fromUserName: message.ToUserName,
    createTime: Date.now(),
    msgType: "text"
  };

  let content = "I don't understand";
  //判斷用戶發送的消息是否是文本消息
  if (message.MsgType === "text") {
    //判斷用戶發送的消息內容具體是什麼
    if (message.Content === "你好") {
      content = "你好,我們是lumisa";
    } else if (message.Content === "2") {
      content = "Great two!";
    } else if (message.Content === "3") {
      content = [
        {
          title: "Nodejs开发",
          description: "微信公众号开发",
          picUrl:
            "https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=1841004364,244945169&fm=58&bpow=121&bpoh=75",
          url: "http://nodejs.cn/"
        },
        {
          title: "web前端",
          description: "这里有最新、最强的技术",
          picUrl:
            "https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=1981851186,10620031&fm=58&s=6183FE1ECDA569015C69A554030010F3&bpow=121&bpoh=75",
          url: "http://www.atguigu.com/"
        }
      ];
      options.msgType = "news";
    } else if (message.Content.match("a")) {
      content = "It has an A";
    }
  } else if (message.MsgType === "image") {
    options.msgType = "image";
    options.mediaId = message.MediaId;
    console.log(message.PicUrl);
  } else if (message.MsgType === "voice") {
    options.msgType = "voice";
    options.mediaId = message.MediaId;
    console.log(message.Recognition);
  } else if (message.MsgType === "location") {
    content = `緯度:${message.Location_X} 經度:${message.Location_Y} 縮放大小:${message.Scale} 位置信息:${message.Label}`;
  } else if (message.MsgType === "event") {
    if (message.Event === "subscribe") {
      content = "欢迎您的关注~"; //可加操作守則
      if (message.EventKey) {
        content = "用戶掃描帶參數的二維碼關注事件";
      }
    } else if (message.Event === "unsubscribe") {
      console.log("用户取消关注");
    } else if (message.Event === "SCAN") {
      content = "用戶已經關注過，再掃描帶參數的二維碼關注事件";
    } else if (message.Event === "LOCATION") {
      content = `緯度:${message.Latitude} 經度:${message.Longitude} 精度:${message.Precision}`;
    } else if (message.Event === "CLICK") {
      content = `您點擊了按鈕${message.EventKey}`;
    }
  }

  options.content = content;
  console.log(options);
  return options;
};
