console.show();
// 设置定时器，每天早上8点自动运行脚本
setInterval(function() {
  var now = new Date();
  if (now.getHours() === 21 && now.getMinutes() === 42) {
    // 运行你的特定脚本
    log("运行我的特定脚本！");
  }
}, 60 * 1000); // 每分钟检查一次
